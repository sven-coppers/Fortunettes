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
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(identifier, controller, mode) {
        return _super.call(this, identifier, Action.NONE, controller, null, mode) || this;
    }
    RadioGroup.prototype.newState = function () {
        return new RadioGroupState();
    };
    RadioGroup.prototype.setState = function (newRadioGroupState) {
        this.setChildrenStates(newRadioGroupState);
    };
    RadioGroup.prototype.getState = function () {
        var result = new RadioGroupState();
        result.childrenStates = this.getChildrenStates();
        return result;
    };
    RadioGroup.prototype.previewState = function (newRadioGroupState, timeRatioLeft) {
        this.previewChildrenStates(newRadioGroupState, timeRatioLeft);
    };
    RadioGroup.prototype.removePreviewState = function () {
        this.removePreviewChildrenStates();
    };
    return RadioGroup;
}(Widget));
//# sourceMappingURL=radio_group.js.map