var MainWindowState = /** @class */ (function () {
    function MainWindowState() {
        this.widgetStates = {};
    }
    MainWindowState.prototype.getCopy = function () {
        var result = new MainWindowState();
        for (var widgetIdentifier in this.widgetStates) {
            result.widgetStates[widgetIdentifier] = this.widgetStates[widgetIdentifier].getCopy();
        }
        return result;
    };
    MainWindowState.prototype.getWidgetStates = function () {
        return this.widgetStates;
    };
    MainWindowState.prototype.setWidgetState = function (identifier, widgetState) {
        this.widgetStates[identifier] = widgetState;
    };
    MainWindowState.prototype.getWidgetState = function (identifier) {
        for (var childIdentifier in this.widgetStates) {
            if (childIdentifier == identifier) {
                return this.widgetStates[identifier];
            }
            var childResult = this.widgetStates[childIdentifier].getWidgetState(identifier);
            if (childResult != null) {
                return childResult;
            }
        }
        return null;
    };
    MainWindowState.prototype.findUnacknowledgedChanges = function (oldState) {
        for (var widgetIdentifier in this.widgetStates) {
            this.widgetStates[widgetIdentifier].findUnacknowledgedChanges(oldState.widgetStates[widgetIdentifier]);
        }
    };
    return MainWindowState;
}());
//# sourceMappingURL=main_window_state.js.map