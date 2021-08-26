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
var PanelState = /** @class */ (function (_super) {
    __extends(PanelState, _super);
    function PanelState() {
        var _this = _super.call(this) || this;
        _this.visible = null;
        return _this;
    }
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    PanelState.prototype.equals = function (otherWidgetState) {
        if (this.visible != null && otherWidgetState.visible != null) {
            if (this.visible != otherWidgetState.visible)
                return false;
        }
        return true;
    };
    /**
     * Create a copy of this state
     */
    PanelState.prototype.getCopy = function () {
        var result = new PanelState();
        result.visible = this.visible;
        result.copyChildrenStates(this);
        return result;
    };
    return PanelState;
}(WidgetState));
//# sourceMappingURL=panel_state.js.map