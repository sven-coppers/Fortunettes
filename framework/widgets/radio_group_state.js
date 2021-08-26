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
var RadioGroupState = /** @class */ (function (_super) {
    __extends(RadioGroupState, _super);
    function RadioGroupState() {
        return _super.call(this) || this;
    }
    RadioGroupState.prototype.selectRadioButton = function (selectedRadioButtonName) {
        for (var radioButtonState in this.childrenStates) {
            this.childrenStates[radioButtonState].selected = false;
        }
        this.childrenStates[selectedRadioButtonName].selected = true;
    };
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    RadioGroupState.prototype.equals = function (otherWidgetState) {
        if (this.enabled != null && otherWidgetState.enabled != null) {
            if (this.enabled != otherWidgetState.enabled)
                return false;
        }
        for (var radioIdentifier in otherWidgetState.checkboxStates) {
            var thisRadioButtonState = this.getChildState(radioIdentifier);
            var otherRadioButtonState = otherWidgetState.getChildState(radioIdentifier);
            if (!thisRadioButtonState.equals(otherRadioButtonState))
                return false;
        }
        if (!this.equalChildren(otherWidgetState)) {
            return false;
        }
        return true;
    };
    /**
     * Create a copy of this state
     */
    RadioGroupState.prototype.getCopy = function () {
        var result = new RadioGroupState();
        result.enabled = this.enabled;
        result.copyChildrenStates(this);
        return result;
    };
    return RadioGroupState;
}(WidgetState));
//# sourceMappingURL=radio_group_state.js.map