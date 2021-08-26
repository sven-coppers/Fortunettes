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
var MixedSelectionHybrid = /** @class */ (function (_super) {
    __extends(MixedSelectionHybrid, _super);
    function MixedSelectionHybrid(identifier, container, controller, mode) {
        return _super.call(this, identifier, container, controller, mode) || this;
    }
    MixedSelectionHybrid.prototype.initHTML = function (oldContainer) {
        var newHTML = '';
        var label = oldContainer.html();
        newHTML += '<div class="selection_hybrid" id="' + this.identifier + '_mixed">';
        newHTML += '    <div class="label">' + label + '</div>';
        newHTML += '    <div class="layer layer1">&nbsp;</div>';
        newHTML += '    <div class="layer layer2 hidden">&nbsp;</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldContainer.replaceWith(this.container);
    };
    MixedSelectionHybrid.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    MixedSelectionHybrid.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    MixedSelectionHybrid.prototype.previewEnabled = function (enabled) {
        this.container.find(".layer2").toggleClass("disabled", !enabled);
        this.container.find(".layer2").removeClass("hidden");
    };
    MixedSelectionHybrid.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in all buttons");
    };
    MixedSelectionHybrid.prototype.previewVisible = function (visible) {
        console.log("TODO: implement previewVisible() in all buttons");
    };
    MixedSelectionHybrid.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    MixedSelectionHybrid.prototype.previewSelected = function (selected) {
        this.container.find(".layer2").toggleClass("selected", selected);
        this.container.find(".layer2").removeClass("hidden");
    };
    MixedSelectionHybrid.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    MixedSelectionHybrid.prototype.removeNextStatePreview = function () {
        this.container.find(".layer2").addClass("hidden");
    };
    MixedSelectionHybrid.prototype.removePreviewSelected = function () {
        this.container.find(".layer2").addClass("hidden");
    };
    return MixedSelectionHybrid;
}(SelectionHybrid));
//# sourceMappingURL=mixed_selection_hybrid.js.map