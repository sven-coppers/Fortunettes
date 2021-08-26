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
var MixedListbox = /** @class */ (function (_super) {
    __extends(MixedListbox, _super);
    function MixedListbox(identifier, container, controller, mode) {
        return _super.call(this, identifier, controller, container, mode) || this;
    }
    MixedListbox.prototype.initHTML = function (oldElement) {
        this.allowMultiple = oldElement.attr("multiple") == "multiple";
        var oThis = this;
        var counter = 0;
        var newHTML = '';
        newHTML += '<div class="listbox" id="' + this.identifier + '_mixed_' + this.mode + '">';
        newHTML += '</div>';
        this.container = $(newHTML);
        this.container.append(oldElement[0].outerHTML);
        this.container.append('<div class="layer layer1 hidden"></div>');
        oldElement.find("option").each(function () {
            oThis.container.find(".layer1").append('<div class="item">&nbsp;</div>');
            counter++;
        });
        oldElement.replaceWith(this.container);
        this.container.find(".item").css("height", (100.0 / counter) + "%");
    };
    MixedListbox.prototype.previewPreviousState = function (textboxState, timeRatioLeft) {
        if (textboxState.enabled != null) {
            this.previewPreviousEnabled(textboxState.enabled);
        }
        if (textboxState.visible != null) {
            this.previewPreviousVisible(textboxState.visible);
        }
        if (textboxState.selection != null) {
            this.previewPreviousSelection(textboxState.selection, timeRatioLeft);
        }
    };
    MixedListbox.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
        this.container.find("select").prop("disabled", !enabled);
    };
    MixedListbox.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    MixedListbox.prototype.previewNextEnabled = function (enabled) {
        console.log("TODO: implement previewNextEnabled()");
    };
    MixedListbox.prototype.removeNextEnabledPreview = function () {
        console.log("TODO: implement removeNextEnabledPreview()");
    };
    MixedListbox.prototype.previewPreviousEnabled = function (enabled) {
        console.log("TODO: implement previewPreviousEnabled()");
    };
    MixedListbox.prototype.removePreviousEnabledPreview = function () {
        console.log("TODO: implement removePreviousEnabledPreview()");
    };
    MixedListbox.prototype.setVisible = function (enabled) {
        console.log("TODO: implement setVisible()");
    };
    MixedListbox.prototype.isVisible = function () {
        console.log("TODO: implement isVisible()");
    };
    MixedListbox.prototype.previewNextVisible = function (visible) {
        console.log("TODO: implement previewNextVisible()");
    };
    MixedListbox.prototype.removeNextVisiblePreview = function () {
        console.log("TODO: implement removeNextVisiblePreview()");
    };
    MixedListbox.prototype.previewPreviousVisible = function (visible) {
        console.log("TODO: implement previewPreviousVisible()");
    };
    MixedListbox.prototype.removePreviousVisiblePreview = function () {
        console.log("TODO: implement removePreviousVisiblePreview()");
    };
    MixedListbox.prototype.setSelection = function (selection) {
        this.container.find("option").each(function (index) {
            if (selection[index]) {
                $(this).attr('selected', 'selected');
                $(this).prop('selected', 'selected');
            }
            else {
                $(this).removeAttr('selected').change();
                $(this).removeAttr('selected').change();
            }
        });
    };
    MixedListbox.prototype.getSelection = function () {
        var result = [];
        this.container.find("option").each(function (index) {
            result.push($(this).is(':selected'));
        });
        return result;
    };
    MixedListbox.prototype.previewSelection = function (selection, timeRatioLeft) {
        this.container.find(".layer1").removeClass("hidden");
        for (var i = 0; i < selection.length; i++) {
            this.container.find(".item:eq(" + i + ")").toggleClass("feedforward_selected", selection[i]);
        }
    };
    MixedListbox.prototype.removePreviewSelection = function () {
        this.container.find(".item").removeClass("feedforward_selected");
        this.container.find(".layer1").addClass("hidden");
    };
    MixedListbox.prototype.previewPreviousSelection = function (selection, timeRatioLeft) {
        console.log("TODO: implement previewPreviousSelection()");
    };
    MixedListbox.prototype.removePreviousSelectionPreview = function () {
        console.log("TODO: implement removePreviewPreviousSelection()");
    };
    /**
      * This function is called for the guidance feature, should be stackable (called multiple times in a row)
      * @param stepNumber the order of the step
      * @param event the event that must be completed
      */
    MixedListbox.prototype.showStep = function (stepNumber, event) {
        console.log("TODO: Implement showStep(stepNumber, event) in mixed_buttons");
    };
    /**
      * This function is called for the guidance feature
      */
    MixedListbox.prototype.hideSteps = function () {
        console.log("TODO: Implement hideSteps() in mixed_buttons");
    };
    return MixedListbox;
}(ListBox));
//# sourceMappingURL=mixed_listbox.js.map