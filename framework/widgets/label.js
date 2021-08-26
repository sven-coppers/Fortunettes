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
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(identifier, controller, container, mode) {
        var _this = _super.call(this, identifier, Action.NONE, controller, container, mode) || this;
        _this.value = null;
        _this.initHTML(container);
        _this.initAcknowledgements();
        _this.initHelpButton();
        return _this;
    }
    Label.prototype.newState = function () {
        return new ButtonState();
    };
    Label.prototype.setState = function (labelState) {
        this.setValue(labelState.value);
        this.setAcknowledged(labelState.acknowledged);
    };
    Label.prototype.getState = function () {
        var result = new LabelState();
        result.value = this.getValue();
        result.acknowledged = this.isAcknowledged();
        return result;
    };
    Label.prototype.previewState = function (labelState, timeRatioLeft) {
        this.previewValue(labelState.value, timeRatioLeft);
    };
    Label.prototype.removePreviewState = function () {
        this.removePreviewValue();
    };
    return Label;
}(Widget));
//# sourceMappingURL=label.js.map