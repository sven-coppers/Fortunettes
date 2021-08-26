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
var BlueLabel = /** @class */ (function (_super) {
    __extends(BlueLabel, _super);
    function BlueLabel(oldContainer, controller, mode) {
        var _this = _super.call(this, oldContainer.attr("id"), controller, oldContainer, mode) || this;
        _this.currentValue = null;
        return _this;
    }
    BlueLabel.prototype.initHTML = function (oldElement) {
        this.currentValue = oldElement.html();
        this.container = oldElement;
        oldElement.attr("id", this.identifier + '_blue');
    };
    /* previewEnabled(enabled) {
         if (enabled && this.container.hasClass("disabled")) {
             this.container.addClass("feedforward_enabled");
         } else if (!enabled && !this.container.hasClass("disabled")) {
             this.container.addClass("feedforward_disabled");
         }
     } */
    BlueLabel.prototype.setValue = function (value) {
        this.currentValue = value;
        this.container.html(value);
    };
    BlueLabel.prototype.getValue = function () {
        return this.currentValue;
    };
    BlueLabel.prototype.previewValue = function (value, timeRatioLeft) {
        this.container.html(value);
        this.container.addClass("feedforward");
    };
    BlueLabel.prototype.removePreviewValue = function () {
        this.container.html(this.currentValue);
        this.container.removeClass("feedforward");
    };
    return BlueLabel;
}(Label));
//# sourceMappingURL=blue_label.js.map