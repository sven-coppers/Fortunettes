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
var MixedRadioGroup = /** @class */ (function (_super) {
    __extends(MixedRadioGroup, _super);
    function MixedRadioGroup(radioGroupName, radioElements, radioLabels, controller, mode) {
        var _this = _super.call(this, radioGroupName, controller, mode) || this;
        _this.initRadioButtons(radioElements, radioLabels);
        return _this;
    }
    MixedRadioGroup.prototype.initRadioButtons = function (oldElements, labels) {
        for (var i = 0; i < oldElements.length; i++) {
            var newRadioButton = new MixedRadioButton(labels[i], this.controller, oldElements[i], this, this.mode);
            this.children[newRadioButton.identifier] = newRadioButton;
        }
    };
    MixedRadioGroup.prototype.isVisible = function () {
        return false;
    };
    return MixedRadioGroup;
}(RadioGroup));
//# sourceMappingURL=mixed_radio_group.js.map