function StateMachineReader() {

}

StateMachineReader.prototype = {
    read: function(filePath, callback, widgets, resolveAvailability) {
        var stateMachine = new StateMachine();

        // reading needs to be executed sequentially:
        // 1. read transitions (creates states)
        // 2. resolveAvailability (assumes empty widget states)
        // 3. loadStateModifiers (allow the user to perform extra changes on the UI, based on states.csv
        this.readStatesAndTransitions(stateMachine, root + filePath + "data/", callback, widgets, resolveAvailability);

        return stateMachine;
    },

   readStatesAndTransitions: function(stateMachine, filePath, callback, widgets, resolveAvailability) {
        var oThis = this;

        d3.csv(filePath + "transitions.csv", function(data) {
            for(var i = 0; i < data.length; i++) {
                oThis.readStates(stateMachine, data[i]);
                oThis.readTransition(stateMachine, data[i]);
            }

            if(resolveAvailability) {
                oThis.resolveAvailability(stateMachine, widgets);
            }

            // Allow for more modifications to the widgets, based on the states
            oThis.readStateModifiers(stateMachine, filePath, callback, widgets);
        });
    },

   readTransition: function(stateMachine, transitionInformation) {
        var newTransition = new Transition(
            transitionInformation["state_old"],
            transitionInformation["state_new"],
            transitionInformation["id"],
            transitionInformation["event"]
        );

        stateMachine.addTransition(newTransition);
    },

   readStates: function(stateMachine, transitionInformation) {
        // Create new states if needed
        var fromState = stateMachine.getApplicationStateByName(transitionInformation["state_old"]);
        var toState = stateMachine.getApplicationStateByName(transitionInformation["state_new"]);

        // Initialise start state
        if(stateMachine.currentState == null) {
            stateMachine.currentState = fromState;
        }
    },

   /**
     * Assumes there are no widget states yet
     * @param stateMachine
     * @param widgets
     */
    resolveAvailability: function(stateMachine, widgets) {
        var transitions = stateMachine.transitions;
        var states = stateMachine.states;

        // Disable everything
        for(var state in states) {
            var applicationState = states[state];
            var windowState = applicationState.getWindowState();

            for(var widget in widgets) {
                var widgetState = widgets[widget].newState();

                widgetState.enabled = stateMachine.isWidgetUsefulInState(state, widget);

                windowState.setWidgetState(widget, widgetState);
            }
        }
    },

   readStateModifiers: function(stateMachine, filePath, callback, widgets) {
        var oThis = this;

        d3.csv(filePath + "states.csv", function(data) {
            for(var i = 0; i < data.length; i++) {
                var stateInformation = data[i];
                var applicationState = stateMachine.getApplicationStateByName(stateInformation["state"]);
                var windowState = applicationState.getWindowState();

                var widgetState = windowState.getWidgetState(stateInformation["id"]);

                // Initialise first state
                if(i == 0) {
                    stateMachine.currentState = applicationState;
                }

                if(widgetState == null) {
                    widgetState = widgets[stateInformation["id"]].newState();
                    windowState.setWidgetState(stateInformation["id"], widgetState);
                }

                oThis.readWidgetState(applicationState, widgetState, stateInformation);
            }

            callback.stateMachineLoaded();
        });
    },

   readWidgetState: function(applicationState, widgetState, stateInformation) {
        if(stateInformation["property"] === "enabled") {
            widgetState.enabled = (stateInformation["value"] == 'true');
        }

        if(stateInformation["property"] === "visible") {
            widgetState.visible = (stateInformation["value"] == 'true');
        }
    }
};