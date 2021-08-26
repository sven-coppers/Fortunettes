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
var SelectableWidgetState = /** @class */ (function (_super) {
    __extends(SelectableWidgetState, _super);
    function SelectableWidgetState() {
        var _this = _super.call(this) || this;
        _this.selected = null;
        return _this;
    }
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    SelectableWidgetState.prototype.equals = function (otherWidgetState) {
        if (!_super.prototype.equals.call(this, otherWidgetState))
            return false;
        if (this.selected != null && otherWidgetState.selected != null) {
            if (this.selected != otherWidgetState.selected)
                return false;
        }
        return true;
    };
    /**
     * Create a copy of this state
     */
    SelectableWidgetState.prototype.getCopy = function () {
        var result = new CheckBoxState();
        result.enabled = this.enabled;
        result.selected = this.selected;
        result.copyChildrenStates(this);
        return result;
    };
    return SelectableWidgetState;
}(WidgetState));
//# sourceMappingURL=selectable_widget_state.js.map