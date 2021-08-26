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
var BlueButton = /** @class */ (function (_super) {
    __extends(BlueButton, _super);
    function BlueButton(oldContainer, controller, mode) {
        return _super.call(this, oldContainer.attr("id"), controller, oldContainer, mode) || this;
    }
    BlueButton.prototype.initHTML = function (oldContainer) {
        var label = oldContainer.html();
        var classes = oldContainer.attr("class");
        var newHTML = '<div class="button ' + classes + '" id="' + this.identifier + '_blue">' + label + '</div>';
        this.container = $(newHTML);
        oldContainer.replaceWith(this.container);
    };
    BlueButton.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    BlueButton.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    BlueButton.prototype.previewEnabled = function (enabled) {
        if (enabled && this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_enabled");
        }
        else if (!enabled && !this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_disabled");
        }
    };
    BlueButton.prototype.removePreviewState = function () {
        this.container.removeClass("feedforward_enabled feedforward_disabled");
    };
    BlueButton.prototype.removePreviewEnabled = function () {
    };
    return BlueButton;
}(Button));
//# sourceMappingURL=blue_button.js.map