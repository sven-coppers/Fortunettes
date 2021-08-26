/**
 * One instance for every [use case + lookAndFeel] combination
 * @constructor
 */
var MainWindow = /** @class */ (function () {
    function MainWindow() {
    }
    /**
     * Replace all UI elements
     * @param container
     * @param controller
     */
    MainWindow.prototype.init = function (container, controller, widgetFactory) {
        this.container = container;
        this.controller = controller;
        this.widgets = widgetFactory.initialiseWidgets(container, this.controller);
        this.initWhatIf(container, controller);
    };
    /**
     * Initialise all widgets to support what if questions
     */
    MainWindow.prototype.initWhatIf = function (container, controller) {
        var newHTML = '<div class="limbo_buttons">\n' +
            '    <div class="limbo_button limbo_revert" title="Revert changes">&#8656;</div>\n' +
            '    <div class="limbo_button limbo_cancel" title="Cancel changes ">&#10008;</div>\n' +
            '    <div class="limbo_button limbo_accept" title="Accept changes">&#10004;</div>\n' +
            '</div>';
        container.append(newHTML);
        this.hideLimboButtons();
        this.initWhatIfBehaviour(container, controller);
    };
    MainWindow.prototype.initWhatIfBehaviour = function (container, controller) {
        var oThis = this;
        container.find(".limbo_accept").click(function () {
            controller.acceptLimbo();
            oThis.hideLimboButtons();
        });
        container.find(".limbo_accept").hover(function () {
            controller.previewAcceptLimbo();
        }, function () {
            controller.removeAcceptLimboPreview();
        });
        container.find(".limbo_cancel").click(function () {
            controller.cancelLimbo();
            oThis.hideLimboButtons();
        });
        container.find(".limbo_cancel").hover(function () {
            controller.previewCancelLimbo();
        }, function () {
            controller.removeCancelLimboPreview();
        });
        container.find(".limbo_revert").click(function () {
            controller.revertLimbo();
            oThis.hideLimboButtons();
        });
        container.find(".limbo_revert").hover(function () {
            controller.previewRevertLimbo();
        }, function () {
            controller.removeRevertLimboPreview();
        });
    };
    MainWindow.prototype.showLimboButtons = function () {
        $(".limbo_buttons").show();
    };
    MainWindow.prototype.hideLimboButtons = function () {
        $(".limbo_buttons").hide();
    };
    /**
     * Redirect event down to the responsible widget
     * @param event
     * @param windowState
     * @post the windowState will be updated
     */
    MainWindow.prototype.handleEvent = function (event, windowState) {
        for (var widgetName in this.widgets) {
            this.widgets[widgetName].handleEvent(event, windowState);
        }
    };
    MainWindow.prototype.getWidgets = function () {
        return this.widgets;
    };
    MainWindow.prototype.setWindowState = function (windowState) {
        var widgetStates = windowState.getWidgetStates();
        for (var widgetName in widgetStates) {
            this.widgets[widgetName].setState(widgetStates[widgetName]);
        }
    };
    MainWindow.prototype.getWindowState = function () {
        var newWindowState = new MainWindowState();
        for (var widgetName in this.widgets) {
            newWindowState.setWidgetState(widgetName, this.widgets[widgetName].getState());
        }
        return newWindowState;
    };
    MainWindow.prototype.previewWindowState = function (windowState, timeRatioLeft) {
        var widgetStates = windowState.getWidgetStates();
        for (var widgetName in widgetStates) {
            this.widgets[widgetName].previewStateIfNeeded(widgetStates[widgetName], timeRatioLeft);
        }
    };
    MainWindow.prototype.removeWindowStatePreview = function () {
        for (var widget in this.widgets) {
            this.widgets[widget].removePreviewState();
        }
    };
    return MainWindow;
}());
//# sourceMappingURL=main_window.js.map