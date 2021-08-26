var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(identifier, content, container, controller, mode, defaultAction) {
        if (defaultAction === void 0) { defaultAction = Action.NONE; }
        return _super.call(this, identifier, defaultAction, controller, container, mode) || this;
    }
    Panel.prototype.newState = function () {
        return new PanelState();
    };
    Panel.prototype.setState = function (panelState) {
        this.setChildrenStates(panelState);
    };
    Panel.prototype.getState = function () {
        var result = new PanelState();
        result.childrenStates = this.getChildrenStates();
        return result;
    };
    Panel.prototype.previewState = function (nextState, timeRatioLeft) {
        this.previewChildrenStates(nextState, timeRatioLeft);
    };
    Panel.prototype.removePreviewState = function () {
        this.removePreviewChildrenStates();
    };
    return Panel;
}(Widget));
//# sourceMappingURL=panel.js.map