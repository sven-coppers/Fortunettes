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
var LabelState = /** @class */ (function (_super) {
    __extends(LabelState, _super);
    function LabelState() {
        var _this = _super.call(this) || this;
        _this.value = null;
        return _this;
    }
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    LabelState.prototype.equals = function (otherWidgetState) {
        if (this.value != null && otherWidgetState.value != null) {
            if (("" + this.value) !== ("" + otherWidgetState.value))
                return false;
        }
        return true;
    };
    /**
      * Create a copy of this state
      */
    LabelState.prototype.getCopy = function () {
        var result = new LabelState();
        result.value = this.value;
        result.copyChildrenStates(this);
        return result;
    };
    return LabelState;
}(WidgetState));
//# sourceMappingURL=label_state.js.map