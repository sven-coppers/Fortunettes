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
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup(identifier, controller, mode) {
        return _super.call(this, identifier, Action.NONE, controller, null, mode) || this;
    }
    CheckboxGroup.prototype.newState = function () {
        return new CheckboxGroupState();
    };
    CheckboxGroup.prototype.setState = function (newCheckboxGroupState) {
        for (var checkbox in this.children) {
            this.children[checkbox].setState(newCheckboxGroupState.getCheckboxState(checkbox));
        }
    };
    CheckboxGroup.prototype.getState = function () {
        var result = new CheckboxGroupState();
        for (var checkbox in this.children) {
            result.setCheckboxState(checkbox, this.children[checkbox].getState());
        }
        return result;
    };
    CheckboxGroup.prototype.previewState = function (newCheckboxGroupState, timeRatioLeft) {
        for (var checkbox in this.children) {
            this.children[checkbox].previewState(newCheckboxGroupState.getCheckboxState(checkbox), timeRatioLeft);
        }
    };
    CheckboxGroup.prototype.removePreviewState = function () {
        for (var checkbox in this.children) {
            this.children[checkbox].removePreviewState();
        }
    };
    return CheckboxGroup;
}(Widget));
//# sourceMappingURL=checkbox_group.js.map