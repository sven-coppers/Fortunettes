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
var MixedButton = /** @class */ (function (_super) {
    __extends(MixedButton, _super);
    function MixedButton(oldContainer, controller, mode) {
        return _super.call(this, oldContainer.attr("id"), controller, oldContainer, mode) || this;
    }
    MixedButton.prototype.initHTML = function (oldElement) {
        var label = oldElement.text();
        var newHTML = '';
        newHTML += '<div class="button" id="' + this.identifier + '_mixed_' + this.mode + '">';
        newHTML += '    <div class="label">' + label + '</div>';
        newHTML += '    <div class="layer layer1">&nbsp;</div>';
        newHTML += '    <div class="layer layer2 disabled hidden">&nbsp;</div>';
        newHTML += '    <div class="layer step hidden"></div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    MixedButton.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    MixedButton.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    MixedButton.prototype.previewEnabled = function (enabled) {
        this.container.find(".layer2").toggleClass("disabled", !enabled);
        this.container.find(".layer2").removeClass("hidden");
    };
    MixedButton.prototype.removePreviewEnabled = function () {
        this.container.find(".layer2").addClass("hidden");
    };
    MixedButton.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in mixed buttons");
    };
    MixedButton.prototype.previewVisible = function (visible) {
    };
    MixedButton.prototype.removeNextStatePreview = function () {
        this.container.find(".layer2").addClass("hidden");
    };
    MixedButton.prototype.removePreviousStatePreview = function () {
        // TODO
    };
    /**
      * This function is called for the guidance feature, should be stackable (called multiple times in a row)
      * @param stepIndex the order of the step
      * @param event the event that must be completed
      */
    MixedButton.prototype.showTransition = function (stepIndex, event) {
        var element = this.container.find(".step");
        if (element.text().length > 0) {
            element.text(element.text() + "," + stepIndex);
        }
        else {
            element.text(stepIndex);
        }
        element.removeClass("hidden");
    };
    /**
      * This function is called for the guidance feature
      */
    MixedButton.prototype.hideTransition = function () {
        this.container.find(".step").addClass("hidden").empty();
    };
    return MixedButton;
}(Button));
//# sourceMappingURL=mixed_button.js.map