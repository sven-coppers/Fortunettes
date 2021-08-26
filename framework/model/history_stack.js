var HistoryStack = /** @class */ (function () {
    function HistoryStack() {
        this.stateStack = [];
        this.eventStack = [];
    }
    /**
     *
     * @param event
     * @param mainWindowState
     */
    HistoryStack.prototype.push = function (event, mainWindowState) {
        this.stateStack.push(mainWindowState);
        this.eventStack.push(event);
    };
    return HistoryStack;
}());
//# sourceMappingURL=history_stack.js.map