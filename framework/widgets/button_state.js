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
var ButtonState = /** @class */ (function (_super) {
    __extends(ButtonState, _super);
    function ButtonState() {
        return _super.call(this) || this;
    }
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    ButtonState.prototype.equals = function (otherWidgetState) {
        if (this.enabled != null && otherWidgetState.enabled != null) {
            if (this.enabled != otherWidgetState.enabled)
                return false;
        }
        return true;
    };
    ButtonState.prototype.getCopy = function () {
        var result = new ButtonState();
        result.enabled = this.enabled;
        result.copyChildrenStates(this);
        return result;
    };
    return ButtonState;
}(WidgetState));
//# sourceMappingURL=button_state.js.map