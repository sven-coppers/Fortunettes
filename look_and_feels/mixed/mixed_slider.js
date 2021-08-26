/*class MixedSlider extends Slider() {
    constructor(oldElement, controller) {
        this.container = null;
        this.controller = controller;
        this.identifier = oldElement.attr("id");
        this.value = null;
        this.initHTML(oldElement);
        this.initBehavior();
    }

    initHTML(oldElement) {
        var min = oldElement.attr("min");
        var max = oldElement.attr("max");
        var val = oldElement.attr("value");
        var step = oldElement.attr("step");

        var newHTML = '';

        newHTML += '<div class="slider" id="' + this.identifier + '_mixed">';
        newHTML += '    <input type="range" min="' + min + '" max="' + max + '" value="' + val + '" step="' + step + '">';
        newHTML += '</div>';

        this.container = $(newHTML);

        oldElement.replaceWith(this.container);
    }

   setEnabled (enabled) {
        this.container.toggleClass("disabled", !enabled);
    }

   isEnabled () {
        return !this.container.hasClass("disabled");
    }

   previewNextEnabled (enabled) {
        console.log("TODO: implement previewNextEnabled()");
    }

   removeNextEnabledPreview() {
        console.log("TODO: implement removeNextEnabledPreview()");
    }

   previewPreviousEnabled (enabled) {
        console.log("TODO: implement previewPreviousEnabled()");
    }

   removePreviousEnabledPreview() {
        console.log("TODO: implement removePreviousEnabledPreview()");
    }

   setVisible (enabled) {
        console.log("TODO: implement setVisible()");
    }

   isVisible () {
        console.log("TODO: implement isVisible()");
    }

   previewNextVisible (visible) {
        console.log("TODO: implement previewNextVisible()");
    }

   removeNextVisiblePreview() {
        console.log("TODO: implement removeNextVisiblePreview()");
    }

   previewPreviousVisible (visible) {
        console.log("TODO: implement previewPreviousVisible()");
    }

   removePreviousVisiblePreview() {
        console.log("TODO: implement removePreviousVisiblePreview()");
    }

   setValue (value) {
        this.container.attr("value", value);
    }

   getValue () {
        return this.container.attr("value");
    }

   previewNextValue(value, timeRatioLeft) {
        console.log("TODO: implement previewNextValue()");
    }

   removeNextValuePreview () {
        console.log("TODO: implement removePreviewNextValue()");
    }

   previewPreviousValue (value, timeRatioLeft) {
        console.log("TODO: implement previewPreviousValue()");
    }

   removePreviousValuePreview () {
        console.log("TODO: implement removePreviewPreviousValue()");
    }
}*/ 
//# sourceMappingURL=mixed_slider.js.map