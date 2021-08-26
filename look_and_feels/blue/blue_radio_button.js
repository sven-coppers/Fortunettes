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
var BlueRadioButton = /** @class */ (function (_super) {
    __extends(BlueRadioButton, _super);
    function BlueRadioButton(label, controller, oldContainer, radioGroup, mode) {
        return _super.call(this, oldContainer.attr("value"), label, controller, oldContainer, radioGroup, mode) || this;
    }
    BlueRadioButton.prototype.initHTML = function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="radio_option">';
        newHTML += '    <div class="radio_option_circle">&nbsp;</div>';
        newHTML += '    <div class="radio_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    BlueRadioButton.prototype.setEnabled = function (enabled) {
        // TODO: implement setEnabled() in all radioButtons
    };
    BlueRadioButton.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    BlueRadioButton.prototype.previewEnabled = function (enabled) {
        // TODO: implement previewEnabled() in all radioButtons
    };
    BlueRadioButton.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    BlueRadioButton.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    BlueRadioButton.prototype.previewSelected = function (selected, timeRatioLeft) {
        if (this.container.hasClass("selected") && !selected) {
            this.container.addClass("feedforward_deselected");
        }
        else if (!(this.container.hasClass("selected")) && selected) {
            this.container.addClass("feedforward_selected");
        }
    };
    BlueRadioButton.prototype.removePreviewSelected = function () {
        this.container.removeClass("feedforward_selected feedforward_deselected");
    };
    BlueRadioButton.prototype.removePreviewEnabled = function () {
    };
    return BlueRadioButton;
}(RadioButton));
//# sourceMappingURL=blue_radio_button.js.map