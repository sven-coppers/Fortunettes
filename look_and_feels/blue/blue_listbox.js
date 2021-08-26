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
var BlueListbox = /** @class */ (function (_super) {
    __extends(BlueListbox, _super);
    function BlueListbox(identifier, container, controller, mode) {
        return _super.call(this, identifier, controller, container, mode) || this;
    }
    BlueListbox.prototype.initHTML = function (oldContainer) {
        this.allowMultiple = oldContainer.attr("multiple") == "multiple";
    };
    BlueListbox.prototype.setSelection = function (selection) {
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
    BlueListbox.prototype.getSelection = function () {
        var result = [];
        this.container.find("option").each(function (index) {
            result.push($(this).is(':selected'));
        });
        return result;
    };
    BlueListbox.prototype.previewSelection = function (selection, timeRatioLeft) {
        for (var i = 0; i < selection.length; i++) {
            var option = this.container.find("option:eq(" + i + ")");
            if (option.is(':selected') && !selection[i]) {
                option.addClass("feedforward_deselected");
            }
            else if (!option.is(':selected') && selection[i]) {
                option.addClass("feedforward_selected");
            }
        }
    };
    BlueListbox.prototype.removePreviewSelection = function () {
        this.container.find("option").removeClass("feedforward_selected");
        this.container.find("option").removeClass("feedforward_deselected");
    };
    return BlueListbox;
}(ListBox));
//# sourceMappingURL=blue_listbox.js.map