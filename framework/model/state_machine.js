var StateMachine = /** @class */ (function () {
    function StateMachine() {
        this.states = {};
        this.currentState = null;
        this.transitions = [];
    }
    /**
     * Create a state if there is no name with this state
     */
    StateMachine.prototype.getApplicationStateByName = function (applicationStateName) {
        if (!(applicationStateName in this.states)) {
            this.states[applicationStateName] = new ApplicationState(applicationStateName);
        }
        return this.states[applicationStateName];
    };
    /**
      *
      * @param transition
      */
    StateMachine.prototype.addTransition = function (transition) {
        this.transitions.push(transition);
    };
    /**
      * Check if a widget is involved in any transition, starting from fromState
      * @param fromState
      * @param identifier
      */
    StateMachine.prototype.isWidgetUsefulInState = function (fromState, identifier) {
        for (var i = 0; i < this.transitions.length; i++) {
            var transition = this.transitions[i];
            if (transition["fromState"] === fromState && transition["identifier"] === identifier) {
                return true;
            }
        }
        return false;
    };
    /**
      *
      * @param identifier
      * @param event
      * @returns {*}
      */
    StateMachine.prototype.getNextState = function (identifier, event) {
        return this.getNextStateFrom(this.currentState.name, identifier, event);
    };
    /**
      *
      * @param fromState
      * @param identifier
      * @param event
      * @returns {*}
      */
    StateMachine.prototype.getNextStateFrom = function (fromState, identifier, event) {
        for (var i = 0; i < this.transitions.length; i++) {
            var transition = this.transitions[i];
            if (transition["fromState"] === fromState && transition["identifier"] === identifier && transition["event"] === event) {
                return this.states[transition["toState"]];
            }
        }
        return null;
    };
    StateMachine.prototype.setCurrentState = function (state) {
        this.currentState = state;
    };
    StateMachine.prototype.getOutgoingTransitions = function (fromState) {
        var result = [];
        for (var i = 0; i < this.transitions.length; i++) {
            var transition = this.transitions[i];
            if (transition["fromState"] === fromState) {
                result.push(transition);
            }
        }
        return result;
    };
    /**
      * Calculate the transitions needed to perform event on identifier in a state, starting from fromState
      * @param fromState
      * @param identifier
      * @param event
      * @returns {*}
      */
    StateMachine.prototype.getRequiredTransitions = function (fromState, identifier, event) {
        var queue = [];
        this.expandQueue(queue, [], fromState);
        while (queue.length > 0) {
            var transitions = queue.shift(); // Remove first item in queue
            var lastState = transitions[transitions.length - 1].toState;
            if (this.getNextStateFrom(lastState, identifier, event) != null) {
                return transitions;
            }
            else {
                this.expandQueue(queue, transitions, lastState);
            }
        }
        return []; // No solution
    };
    StateMachine.prototype.expandQueue = function (queue, currentTransitions, fromState) {
        var outgoingTransitions = this.getOutgoingTransitions(fromState);
        for (var i = 0; i < outgoingTransitions.length; i++) {
            // Only do this, if the new toState is not yet in the path
            if (!this.isVisited(currentTransitions, outgoingTransitions[i].toState)) {
                var newTransitions = JSON.parse(JSON.stringify(currentTransitions)); // Clone the array
                newTransitions.push(outgoingTransitions[i]);
                queue.push(newTransitions);
            }
        }
    };
    StateMachine.prototype.isVisited = function (transitions, state) {
        for (var i = 0; i < transitions.length; i++) {
            var transition = this.transitions[i];
            if (transition["fromState"] === state || transition["toState"] === state) {
                return true;
            }
        }
        return false;
    };
    return StateMachine;
}());
;
//# sourceMappingURL=state_machine.js.map