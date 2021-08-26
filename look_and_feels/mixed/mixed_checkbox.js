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
var MixedCheckbox = /** @class */ (function (_super) {
    __extends(MixedCheckbox, _super);
    function MixedCheckbox(label, controller, oldContainer, checkboxGroup, mode) {
        return _super.call(this, oldContainer.attr("value"), label, controller, oldContainer, checkboxGroup, mode) || this;
    }
    MixedCheckbox.prototype.initHTML = function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="check_option">';
        newHTML += '    <div class="layers">';
        newHTML += '        <div class="check_option_circle layer1">';
        newHTML += '            <div class="checkmark">&#10004;</div>';
        newHTML += '        </div>';
        newHTML += '        <div class="check_option_circle layer2 hidden"></div>';
        newHTML += '    </div>';
        newHTML += '    <div class="check_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    MixedCheckbox.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", enabled);
    };
    MixedCheckbox.prototype.previewEnabled = function (enabled) {
    };
    MixedCheckbox.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    MixedCheckbox.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in all radioButtons");
    };
    MixedCheckbox.prototype.previewVisible = function (visible) {
        // Default UI has no feedforward
    };
    MixedCheckbox.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    MixedCheckbox.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    MixedCheckbox.prototype.previewSelected = function (selected) {
        this.container.find(".layer2").toggleClass("selected", selected);
        this.container.find(".layer2").removeClass("hidden");
    };
    MixedCheckbox.prototype.removePreviewEnabled = function () {
        // TODO
    };
    MixedCheckbox.prototype.removePreviewSelected = function () {
        this.container.find(".layer2").addClass("hidden");
    };
    return MixedCheckbox;
}(Checkbox));
//# sourceMappingURL=mixed_checkbox.js.map