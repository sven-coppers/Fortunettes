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
var MixedCheckboxGroup = /** @class */ (function (_super) {
    __extends(MixedCheckboxGroup, _super);
    function MixedCheckboxGroup(checkboxGroupName, checkboxElements, checkboxLabels, controller, mode) {
        var _this = _super.call(this, checkboxGroupName, controller, mode) || this;
        _this.initCheckboxes(checkboxElements, checkboxLabels);
        return _this;
    }
    MixedCheckboxGroup.prototype.initCheckboxes = function (oldElements, labels) {
        for (var i = 0; i < oldElements.length; i++) {
            var newCheckbox = new MixedCheckbox(labels[i], this.controller, oldElements[i], this, this.mode);
            this.children[newCheckbox.identifier] = newCheckbox;
        }
    };
    return MixedCheckboxGroup;
}(CheckboxGroup));
//# sourceMappingURL=mixed_checkbox_group.js.map