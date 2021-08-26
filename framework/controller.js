var Controller = /** @class */ (function () {
    function Controller(container) {
        this.checkpointState = null; // The state in which the interface was before starting Limbo
        this.currentState = null; // The latest state, is always affected by final events (even in Limbo)
        this.container = container;
        this.windows = [];
        this.limboEvent = null;
        this.checkpointState = null;
        this.lastPreviewEvent = null;
        this.currentState = null;
        this.container = container;
        this.historyStack = new HistoryStack();
        this.init(container);
    }
    /**
     * Copy the template for all enabled look and feels
     *
     * lookAndFeels and lookAndFeelModes are Global variables defined using PHP
     */
    Controller.prototype.init = function (container) {
        var template = container.html();
        container.empty();
        var counter = 0;
        // Create a panel for every look and feel
        for (var lookAndFeelIndex in lookAndFeels) {
            container.append(template);
            var newMainWindow = new MainWindow();
            var lookAndFeelName = lookAndFeels[lookAndFeelIndex];
            var mode = lookAndFeelModes[lookAndFeelIndex];
            var widgetFactory = new WidgetFactory(this.getLookAndFeel(lookAndFeelName, mode));
            var windowContainer = container.find(".look_and_feel:eq(" + counter + ")").addClass(lookAndFeelName);
            newMainWindow.init(windowContainer, this, widgetFactory);
            this.windows.push(newMainWindow);
            counter++;
        }
        this.currentState = this.getWindowState();
        this.initState(this.currentState);
        this.setWindowState(this.currentState);
        logger.log("STATE INITIALISED");
    };
    /**
     * Get an instance of the look and feel with the lookAndFeelName
     * @param lookAndFeelName
     * @returns {*}
     */
    Controller.prototype.getLookAndFeel = function (lookAndFeelName, mode) {
        //if(lookAndFeelName === "default")               return new DefaultLookAndFeel(mode);
        // if(lookAndFeelName === "replica")               return new ReplicaLookAndFeel(mode);
        // if(lookAndFeelName === "replica_feedforward")   return new ReplicaFeedforwardLookAndFeel(mode);
        if (lookAndFeelName === "blue")
            return new BlueLookAndFeel(mode);
        if (lookAndFeelName === "black")
            return new BlackLookAndFeel(mode);
        // if(lookAndFeelName === "stacked")               return new StackedLookAndFeel(mode);
        if (lookAndFeelName === "mixed")
            return new MixedLookAndFeel(mode);
        return null;
    };
    /**
     * Receive events from the window and decide what to do with them
     * @param event
     */
    Controller.prototype.processEvent = function (event) {
        var windowState = this.getWindowState();
        switch (event.effect) {
            case Effect.EXECUTE:
                this.executeEvent(event, windowState);
                break;
            case Effect.START_PREVIEW:
                this.previewEvent(event, windowState);
                this.lastPreviewEvent = event;
                break;
            case Effect.STOP_PREVIEW:
                this.removePreviewEvent(event, windowState);
                break;
            case Effect.START_LIMBO:
                this.startLimbo(this.lastPreviewEvent, windowState);
                break;
            case Effect.ACKNOWLEDGE:
                this.acknowledge(event, windowState);
                break;
            default: console.log("Unknown effect in controller");
        }
    };
    /**
     * Will execute the given event on the given windowState, and apply it as the next state
     * (CAN BE CALLED DURING LIMBO AS WELL)
     * @param event: execute the event
     * @param windowState: assumes windowState is the current windowState
     */
    Controller.prototype.executeEvent = function (event, windowState) {
        this.pauseLimbo();
        this.removeWindowStatePreview();
        this.getNextState(event, windowState);
        this.confirmWindowState(windowState);
        this.currentState = windowState.getCopy();
        this.resumeLimbo(this.getWindowState());
    };
    /**
     * Will execute the application logic and preview the resulting windowState
     * (CAN BE CALLED DURING LIMBO AS WELL)
     * @param event
     * @param windowState
     */
    Controller.prototype.previewEvent = function (event, windowState) {
        this.pauseLimbo();
        this.getNextState(event, windowState);
        this.removeWindowStatePreview();
        this.previewNextWindowState(windowState);
        this.resumeLimbo(windowState);
    };
    /**
     *
     * @param event
     * @param windowState
     */
    Controller.prototype.removePreviewEvent = function (event, windowState) {
        this.removeWindowStatePreview();
        this.resumeLimbo(this.getWindowState());
    };
    /**
     * Start the limbo
     * The event that should be shown in Limbo
     */
    Controller.prototype.startLimbo = function (event, windowState) {
        //logger.log("Limbo STARTED");
        this.checkpointState = windowState.getCopy();
        this.limboEvent = event;
        this.getNextState(event, windowState);
        this.previewNextWindowState(windowState);
        for (var window in this.windows) {
            this.windows[window].showLimboButtons();
        }
    };
    /** CANNOT BE CALLED BY THE VIEW
     * Stop previewing the results of the limboEvent
     */
    Controller.prototype.pauseLimbo = function () {
        if (this.limboEvent == null)
            return;
        //logger.log("Limbo PAUSED");
        this.removeWindowStatePreview();
    };
    /** CANNOT BE CALLED BY THE VIEW
     * Start previewing the results of the limboEvent
     * @pre assumes this.limboEvent is still set
     * @param fromState
     */
    Controller.prototype.resumeLimbo = function (fromState) {
        if (!this.isInLimbo())
            return;
        //logger.log("Limbo RESUMED");
        this.getNextState(this.limboEvent, fromState);
        this.removeWindowStatePreview();
        this.previewNextWindowState(fromState);
    };
    Controller.prototype.previewCancelLimbo = function () {
        this.pauseLimbo();
    };
    Controller.prototype.removeCancelLimboPreview = function () {
        this.resumeLimbo(this.getWindowState());
    };
    /**
     * @post Will reset the limboEvent to NULL
     */
    Controller.prototype.cancelLimbo = function () {
        //logger.log("Limbo CANCELLED");
        this.limboEvent = null;
        this.removeWindowStatePreview();
        this.setWindowState(this.currentState);
    };
    Controller.prototype.previewRevertLimbo = function () {
        this.removeWindowStatePreview();
        this.setWindowState(this.checkpointState);
    };
    Controller.prototype.removeRevertLimboPreview = function () {
        this.setWindowState(this.currentState);
        this.resumeLimbo(this.currentState.getCopy());
    };
    /**
     * @post Will reset the limboEvent to NULL
     */
    Controller.prototype.revertLimbo = function () {
        //logger.log("Limbo REVERTED");
        this.limboEvent = null;
        this.currentState = this.checkpointState;
        this.removeWindowStatePreview();
        this.setWindowState(this.currentState);
    };
    Controller.prototype.previewAcceptLimbo = function () {
        var previewState = this.currentState.getCopy();
        this.getNextState(this.limboEvent, previewState);
        this.removeWindowStatePreview();
        this.setWindowState(previewState);
    };
    Controller.prototype.removeAcceptLimboPreview = function () {
        this.setWindowState(this.currentState);
        this.resumeLimbo(this.currentState.getCopy());
    };
    /**
     * @post Will reset the limboEvent to NULL
     */
    Controller.prototype.acceptLimbo = function () {
        //logger.log("Limbo ACCEPTED");
        this.removeWindowStatePreview();
        this.getNextState(this.limboEvent, this.currentState);
        this.setWindowState(this.currentState);
        this.limboEvent = null;
    };
    /**
     * Check if we are in limbo
     */
    Controller.prototype.isInLimbo = function () {
        return this.limboEvent != null;
    };
    /**
     * Acknowlegde the change of a widget
     * @param event
     * @param windowState
     */
    Controller.prototype.acknowledge = function (event, windowState) {
        windowState.getWidgetState(event.identifier).setAcknowledged(true);
        this.setWindowState(windowState);
        this.currentState = windowState.getCopy();
    };
    /**
     * Execute all logic based on an event (both UI and application logic)
     * @param event the event that occured
     * @param windowState
     * @post the windowState will be updated
     */
    Controller.prototype.getNextState = function (event, windowState) {
        // Widget logic (radio buttons, listboxes)...
        this.windows[0].handleEvent(event, windowState);
        // Application logic
        var action = event.action.replace("action_", "");
        var executionHandlerName = underscoresToCamelCase(event.identifier + "_" + action);
        var previewHandlerName = "preview" + capitalizeFirstLetter(executionHandlerName);
        if (event.effect === Effect.START_PREVIEW) {
            if (typeof this[previewHandlerName] !== "undefined") {
                this[previewHandlerName](event, windowState);
            }
            else {
                if (typeof this[executionHandlerName] !== "undefined") {
                    this[executionHandlerName](event, windowState);
                }
                else if (event.handlerRequired) {
                    console.warn("Preview handler '" + previewHandlerName + "' AND Execution handler '" + executionHandlerName + "' undefined");
                }
            }
        }
        else if (event.effect === Effect.EXECUTE) {
            if (typeof this[executionHandlerName] !== "undefined") {
                this[executionHandlerName](event, windowState);
            }
            else if (event.handlerRequired) {
                console.warn("Execution handler '" + executionHandlerName + "' undefined");
            }
        }
    };
    /**
     * Make sure controllers don't do this anymore
     */
    Controller.prototype.handleEvent = function (event, windowState) {
        console.warn("handleEvent() IS DEPRECATED");
    };
    /**
     * Ask the controller how this event will be possible on widgetIdentifier
     * @param widgetIdentifier
     * @param event
     * @returns {Array}
     */
    // abstract howTo (widgetIdentifier, event);
    Controller.prototype.getWindowState = function () {
        return this.windows[0].getWindowState();
    };
    Controller.prototype.confirmWindowState = function (newWindowState) {
        // TODO: Elements that are currently visible should not require acknowledgement
        newWindowState.findUnacknowledgedChanges(this.currentState);
        this.setWindowState(newWindowState);
    };
    Controller.prototype.setWindowState = function (newWindowState) {
        for (var window in this.windows) {
            this.windows[window].setWindowState(newWindowState);
        }
    };
    Controller.prototype.previewNextWindowState = function (windowState, timeRatioLeft) {
        //logger.log("preview_next_state;" + JSON.stringify(windowState));
        if (timeRatioLeft === void 0) { timeRatioLeft = -1; }
        for (var window_1 in this.windows) {
            this.windows[window_1].previewWindowState(windowState, timeRatioLeft);
        }
    };
    Controller.prototype.removeWindowStatePreview = function () {
        //logger.log("preview_next_removed");
        for (var window_2 in this.windows) {
            this.windows[window_2].removeWindowStatePreview();
        }
    };
    return Controller;
}());
//# sourceMappingURL=controller.js.map