var ApplicationState = /** @class */ (function () {
    function ApplicationState(applicationStateName) {
        this.name = applicationStateName;
        this.windowState = new MainWindowState();
    }
    ApplicationState.prototype.getWindowState = function () {
        return this.windowState;
    };
    return ApplicationState;
}());
//# sourceMappingURL=application_state.js.map