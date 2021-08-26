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
var BlueTextbox = /** @class */ (function (_super) {
    __extends(BlueTextbox, _super);
    function BlueTextbox(identifier, container, controller, mode) {
        return _super.call(this, identifier, container, controller, mode) || this;
    }
    BlueTextbox.prototype.initHTML = function (container) {
        var newHTML = '';
        newHTML += '<div class="textbox">';
        newHTML += '    <input type="text" class="current_value" value="" id="' + this.identifier + '_blue">';
        newHTML += '    <input type="text" class="next_value" value="" id="' + this.identifier + '_blue_feedforward">';
        newHTML += '    <div class="changed">&nbsp;</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        container.replaceWith(this.container);
    };
    BlueTextbox.prototype.setEnabled = function (enabled) {
        _super.prototype.setEnabled.call(this, enabled);
        if (enabled) {
            this.container.find("input").removeAttr("disabled");
        }
        else {
            this.container.find("input").attr("disabled", "disabled");
        }
    };
    BlueTextbox.prototype.setValue = function (value) {
        $("#" + this.identifier + "_blue").val(value);
    };
    BlueTextbox.prototype.getValue = function () {
        return $("#" + this.identifier + "_blue").val();
    };
    BlueTextbox.prototype.previewPreviousValue = function (value, timeRatioLeft) {
        this.container.find(".feedforward").removeClass("hidden");
        this.container.find(".old_value").removeClass("hidden").text(value);
        this.updateTimeLeft(timeRatioLeft);
    };
    BlueTextbox.prototype.removePreviousValuePreview = function () {
        this.container.find(".old_value").addClass("hidden");
        this.container.find(".feedforward").addClass("hidden");
        this.container.find(".progress").addClass("hidden");
    };
    BlueTextbox.prototype.updateTimeLeft = function (timeRatioLeft) {
        var percentage = timeRatioLeft * 100.0;
        if (percentage > 0) {
            this.container.find(".feedforward").removeClass("hidden");
            this.container.find(".progress").removeClass("hidden");
            this.container.find(".progress").css({ "width": percentage + "%" });
        }
        else {
            this.container.find(".progress").addClass("hidden");
        }
    };
    BlueTextbox.prototype.previewValue = function (value, timeRatioLeft) {
        $("#" + this.identifier + "_blue_feedforward").val(value);
        this.container.addClass("feedforward_value");
    };
    BlueTextbox.prototype.removePreviewValue = function () {
        this.container.removeClass("feedforward_value");
    };
    return BlueTextbox;
}(TextBox));
//# sourceMappingURL=blue_textbox.js.map