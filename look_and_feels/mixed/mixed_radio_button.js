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
var MixedRadioButton = /** @class */ (function (_super) {
    __extends(MixedRadioButton, _super);
    function MixedRadioButton(label, controller, oldContainer, radioGroup, mode) {
        return _super.call(this, oldContainer.attr("value"), label, controller, oldContainer, radioGroup, mode) || this;
    }
    MixedRadioButton.prototype.initHTML = function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="radio_option">';
        newHTML += '    <div class="layers">';
        newHTML += '        <div class="radio_option_circle layer1">';
        newHTML += '            <div class="radio_option_inner_circle">&nbsp;</div>';
        newHTML += '        </div>';
        newHTML += '        <div class="radio_option_circle layer2"></div>';
        newHTML += '    </div>';
        newHTML += '    <div class="radio_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    MixedRadioButton.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    MixedRadioButton.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    MixedRadioButton.prototype.previewEnabled = function (enabled) {
        // Default UI has no feedforward
    };
    MixedRadioButton.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in all radioButtons");
    };
    MixedRadioButton.prototype.previewVisible = function (visible) {
        // Default UI has no feedforward
    };
    MixedRadioButton.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    MixedRadioButton.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    MixedRadioButton.prototype.previewSelected = function (selected) {
        this.container.removeClass("feedforward_deselected feedforward_selected");
        if (selected) {
            this.container.addClass("feedforward_selected");
        }
        else {
            this.container.addClass("feedforward_deselected");
        }
    };
    MixedRadioButton.prototype.removeNextStatePreview = function () {
        this.container.removeClass("feedforward_selected feedforward_deselected");
    };
    return MixedRadioButton;
}(RadioButton));
//# sourceMappingURL=mixed_radio_button.js.map