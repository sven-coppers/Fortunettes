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
var CheckboxGroupState = /** @class */ (function (_super) {
    __extends(CheckboxGroupState, _super);
    function CheckboxGroupState() {
        return _super.call(this) || this;
    }
    CheckboxGroupState.prototype.setCheckboxState = function (identifier, checkboxState) {
        this.childrenStates[identifier] = checkboxState;
    };
    CheckboxGroupState.prototype.getCheckboxState = function (identifier) {
        return this.childrenStates[identifier];
    };
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    CheckboxGroupState.prototype.equals = function (otherWidgetState) {
        if (this.enabled != null && otherWidgetState.enabled != null) {
            if (this.enabled != otherWidgetState.enabled)
                return false;
        }
        for (var checkboxIdentifier in otherWidgetState.checkboxStates) {
            var thisCheckBoxState = this.getChildState(checkboxIdentifier);
            var otherCheckBoxState = otherWidgetState.getChildState(checkboxIdentifier);
            if (!thisCheckBoxState.equals(otherCheckBoxState))
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
    CheckboxGroupState.prototype.getCopy = function () {
        var result = new CheckboxGroupState();
        result.enabled = this.enabled;
        result.copyChildrenStates(this);
        return result;
    };
    return CheckboxGroupState;
}(WidgetState));
//# sourceMappingURL=checkbox_group_state.js.map