var WidgetState = /** @class */ (function () {
    function WidgetState() {
        // this.visible = false;
        this.enabled = false;
        this.childrenStates = [];
        this.acknowledged = true;
    }
    /**
     * Copy childrenStates
     */
    WidgetState.prototype.copyChildrenStates = function (otherWidgetState) {
        this.childrenStates = [];
        for (var childIdentifier in otherWidgetState.childrenStates) {
            this.childrenStates[childIdentifier] = otherWidgetState.getWidgetState(childIdentifier).getCopy();
        }
    };
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    WidgetState.prototype.equals = function (otherWidgetState) {
        if (this.enabled != otherWidgetState.enabled)
            return false;
        if (!this.equalChildren(otherWidgetState))
            return false;
        return true;
    };
    WidgetState.prototype.equalChildren = function (otherwidgetState) {
        for (var childIdentifier in this.childrenStates) {
            var ourChild = this.childrenStates[childIdentifier];
            var otherChild = otherwidgetState.getChildState(childIdentifier);
            if (typeof otherChild !== "undefined") {
                if (!ourChild.equals(otherChild))
                    return false;
            }
        }
        return true;
    };
    WidgetState.prototype.getChildState = function (childIdentifier) {
        return this.childrenStates[childIdentifier];
    };
    WidgetState.prototype.setChildState = function (childIdentifier, childState) {
        this.childrenStates[childIdentifier] = childState;
    };
    WidgetState.prototype.getWidgetState = function (identifier) {
        for (var childIdentifier in this.childrenStates) {
            if (childIdentifier == identifier) {
                return this.childrenStates[identifier];
            }
            var childResult = this.childrenStates[childIdentifier].getWidgetState(identifier);
            if (childResult != null) {
                return childResult;
            }
        }
        return null;
    };
    WidgetState.prototype.isAcknowledged = function () {
        return this.acknowledged;
    };
    WidgetState.prototype.setAcknowledged = function (acknowledged) {
        this.acknowledged = acknowledged;
    };
    /**
     * Find CHANGES BETWEEN THE NEW STATE AND THE PREVIOUS STATE, AND SET THEM TO UNACKNOWLEDGED
     * THE PREVIOUS STATE MIGHT ALSO HAVE UNACKNOWLEDGED CHANGES, WHICH SHOULD REMAIN UNACKNOWLEDGED
     * @param oldState
     */
    WidgetState.prototype.findUnacknowledgedChanges = function (oldState) {
        if (!oldState.acknowledged) {
            this.acknowledged = false;
        }
        if (!this.equals(oldState)) {
            this.acknowledged = false;
        }
        for (var widgetIdentifier in this.childrenStates) {
            this.childrenStates[widgetIdentifier].findUnacknowledgedChanges(oldState.childrenStates[widgetIdentifier]);
        }
    };
    WidgetState.prototype.getNumRemainingAcknowledgements = function () {
        if (jQuery.isEmptyObject(this.childrenStates)) {
            return this.acknowledged ? 0 : 1;
        }
        var result = 0;
        for (var childIdentifier in this.childrenStates) {
            result += this.childrenStates[childIdentifier].getNumRemainingAcknowledgements();
        }
        return result;
    };
    return WidgetState;
}());
//# sourceMappingURL=widget_state.js.map