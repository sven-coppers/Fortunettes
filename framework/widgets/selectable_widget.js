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
var SelectableWidget = /** @class */ (function (_super) {
    __extends(SelectableWidget, _super);
    function SelectableWidget(identifier, defaultAction, controller, container, mode) {
        return _super.call(this, identifier, defaultAction, controller, container, mode) || this;
    }
    /******************************************************************************************************************
     * Support the selected property                                                                                  *
     ******************************************************************************************************************/
    SelectableWidget.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    SelectableWidget.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    SelectableWidget.prototype.previewSelected = function (selected, timeRatioLeft) {
        if (this.container.hasClass("selected") && !selected) {
            this.container.addClass("feedforward_deselected");
        }
        else if (!(this.container.hasClass("selected")) && selected) {
            this.container.addClass("feedforward_selected");
        }
    };
    SelectableWidget.prototype.removePreviewSelected = function () {
        this.container.removeClass("feedforward_selected feedforward_deselected");
    };
    return SelectableWidget;
}(Widget));
//# sourceMappingURL=selectable_widget.js.map