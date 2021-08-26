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
var BlueCheckbox = /** @class */ (function (_super) {
    __extends(BlueCheckbox, _super);
    function BlueCheckbox(label, controller, oldContainer, checkboxGroup, mode) {
        return _super.call(this, oldContainer.attr("value"), label, controller, oldContainer, checkboxGroup, mode) || this;
    }
    BlueCheckbox.prototype.initHTML = function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="check_option">';
        newHTML += '    <div class="check_option_circle">&nbsp;</div>';
        newHTML += '    <div class="check_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    BlueCheckbox.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    BlueCheckbox.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    BlueCheckbox.prototype.previewEnabled = function (enabled) {
        if (enabled && this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_enabled");
        }
        else if (!enabled && !this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_disabled");
        }
    };
    BlueCheckbox.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    BlueCheckbox.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    BlueCheckbox.prototype.previewSelected = function (selected) {
        if (this.container.hasClass("selected") && !selected) {
            //   this.container.css({
            //       background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
            //   background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
            this.container.addClass("feedforward_deselected");
        }
        else if (!(this.container.hasClass("selected")) && selected) {
            this.container.addClass("feedforward_selected");
        }
    };
    BlueCheckbox.prototype.isVisible = function () {
        return false;
    };
    BlueCheckbox.prototype.previewVisible = function (visible, timeRatioLeft) {
    };
    BlueCheckbox.prototype.removePreviewEnabled = function () {
        // TODO
    };
    BlueCheckbox.prototype.removePreviewSelected = function () {
        this.container.removeClass("feedforward_selected feedforward_deselected");
    };
    return BlueCheckbox;
}(Checkbox));
//# sourceMappingURL=blue_checkbox.js.map