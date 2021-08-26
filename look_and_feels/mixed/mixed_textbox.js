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
var MixedTextbox = /** @class */ (function (_super) {
    __extends(MixedTextbox, _super);
    function MixedTextbox(identifier, container, controller, mode) {
        return _super.call(this, identifier, container, controller, mode) || this;
    }
    MixedTextbox.prototype.initHTML = function (oldElement) {
        var value = oldElement.val();
        var newHTML = '';
        newHTML += '<div class="textbox">';
        newHTML += '    <div class="layer layer-1 hidden">';
        newHTML += '        <div class="feedforward_icon timer"><canvas width="16" height="16"></canvas></div>';
        newHTML += '        <div class="feedforward_value old_value">' + value + '</div>';
        newHTML += '    </div>';
        newHTML += '    <div class="layer layer0">';
        newHTML += '        <input type="text" value="' + value + '" id="' + this.identifier + '_mixed_' + this.mode + '">';
        newHTML += '    </div>';
        newHTML += '    <div class="layer layer1 hidden">';
        newHTML += '        <div class="feedforward_icon shortcut">ENTER</div>';
        newHTML += '        <div class="feedforward_value new_value">' + value + '</div>';
        newHTML += '    </div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    MixedTextbox.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
        if (enabled) {
            this.container.find("input").removeAttr("disabled");
        }
        else {
            this.container.find("input").attr("disabled", "disabled");
        }
    };
    MixedTextbox.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    MixedTextbox.prototype.previewNextEnabled = function (enabled) {
        this.container.find(".layer1").toggleClass("disabled", !enabled);
        this.container.find(".layer1").removeClass("hidden");
    };
    MixedTextbox.prototype.removeNextEnabledPreview = function () {
        this.container.find(".layer1").addClass("hidden");
    };
    MixedTextbox.prototype.previewPreviousEnabled = function (enabled) {
        console.log("TODO: implement previewPreviousEnabled()");
    };
    MixedTextbox.prototype.removePreviousEnabledPreview = function () {
        this.container.find(".layer-1").addClass("hidden");
    };
    MixedTextbox.prototype.setVisible = function (enabled) {
        console.log("TODO: implement setVisible()");
    };
    MixedTextbox.prototype.isVisible = function () {
        console.log("TODO: implement isVisible()");
    };
    MixedTextbox.prototype.previewNextVisible = function (visible) {
        console.log("TODO: implement previewNextVisible()");
    };
    MixedTextbox.prototype.removeNextVisiblePreview = function () {
        this.container.find(".layer1").addClass("hidden");
    };
    MixedTextbox.prototype.previewPreviousVisible = function (visible) {
        console.log("TODO: implement previewPreviousVisible()");
    };
    MixedTextbox.prototype.removePreviousVisiblePreview = function () {
        this.container.find(".layer-1").addClass("hidden");
    };
    MixedTextbox.prototype.setValue = function (value) {
        this.container.find("input[type=text]").val(value);
    };
    MixedTextbox.prototype.getValue = function () {
        return this.container.find("input[type=text]").val();
    };
    MixedTextbox.prototype.previewValue = function (value, timeRatioLeft) {
        this.container.find(".layer1").removeClass("hidden");
        this.container.find(".shortcut").toggleClass("hidden", true);
        this.container.find(".new_value").text(value);
    };
    MixedTextbox.prototype.removePreviewValue = function () {
        this.container.find(".layer1").addClass("hidden");
    };
    MixedTextbox.prototype.previewPreviousValue = function (value, timeRatioLeft) {
        this.container.find(".layer-1").removeClass("hidden");
        this.container.find(".old_value").text(value);
        this.updateTimeLeft(timeRatioLeft);
    };
    MixedTextbox.prototype.removePreviousValuePreview = function () {
        this.container.find(".layer-1").addClass("hidden");
    };
    MixedTextbox.prototype.updateTimeLeft = function (timeRatioLeft) {
        var canvas = this.container.find("canvas")[0]; // Get the htmlelement
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(8, 8, 5, 1.5 * Math.PI, 2.0 * Math.PI * timeRatioLeft - 0.5 * Math.PI);
        context.stroke();
    };
    return MixedTextbox;
}(TextBox));
//# sourceMappingURL=mixed_textbox.js.map