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
var BlueSelectionHybrid = /** @class */ (function (_super) {
    __extends(BlueSelectionHybrid, _super);
    function BlueSelectionHybrid(identifier, container, controller, mode) {
        return _super.call(this, identifier, container, controller, mode) || this;
    }
    BlueSelectionHybrid.prototype.initHTML = function (oldContainer) {
        var label = oldContainer.html();
        var classes = oldContainer.attr('class');
        var newHTML = '<div class="' + classes + '" id="' + this.identifier + '_blue">' + label + '</div>';
        this.container = $(newHTML);
        oldContainer.replaceWith(this.container);
    };
    BlueSelectionHybrid.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    BlueSelectionHybrid.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    BlueSelectionHybrid.prototype.previewEnabled = function (enabled) {
        if (enabled && this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_enabled");
        }
        else if (!enabled && !this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_disabled");
        }
    };
    BlueSelectionHybrid.prototype.removePreviewEnabled = function () {
        this.container.removeClass("feedforward_enabled feedforward_disabled");
    };
    BlueSelectionHybrid.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    BlueSelectionHybrid.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    BlueSelectionHybrid.prototype.previewSelected = function (selected) {
        if (this.container.hasClass("selected") && !selected) {
            this.container.addClass("feedforward_deselected");
        }
        else if (!(this.container.hasClass("selected")) && selected) {
            this.container.addClass("feedforward_selected");
        }
    };
    BlueSelectionHybrid.prototype.removePreviewSelected = function () {
        this.container.removeClass("feedforward_selected feedforward_deselected");
    };
    return BlueSelectionHybrid;
}(SelectionHybrid));
//# sourceMappingURL=blue_selection_hybrid.js.map