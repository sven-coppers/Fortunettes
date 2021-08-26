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
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox(identifier, container, controller, mode) {
        var _this = _super.call(this, identifier, Action.VALUE_CHANGED, controller, container, mode) || this;
        _this.initHTML(container);
        _this.initBehavior();
        _this.initHelpButton();
        _this.initAcknowledgements();
        return _this;
    }
    /**
     * To be called after replacing the HTML and setting this.container
     */
    TextBox.prototype.initBehavior = function () {
        var oThis = this;
        this.container.find("input[type=text]").on("keyup", function (event) {
            if (event.which == 13) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.VALUE_CHANGED, Effect.EXECUTE, true));
                oThis.container.trigger('mouseenter'); // Update feedforward
            }
            else {
                //oThis.controller.processEvent(new Event(oThis.identifier, this.defaultEvent, Effect.START_PREVIEW));
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.VALUE_CHANGED, Effect.START_PREVIEW, true));
            }
        });
        this.container.focusout(function () {
            if (!oThis.controller.isInLimbo()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.VALUE_CHANGED, Effect.EXECUTE, true));
            }
        });
    };
    TextBox.prototype.newState = function () {
        return new TextboxState();
    };
    TextBox.prototype.setState = function (textboxState) {
        this.setEnabled(textboxState.enabled);
        this.setValue(textboxState.value);
        this.setAcknowledged(textboxState.acknowledged); // TODO: Vindt een techniek uit om dit makkelijker te doen
    };
    TextBox.prototype.getState = function () {
        var result = new TextboxState();
        result.enabled = this.isEnabled();
        result.value = this.getValue();
        result.acknowledged = this.isAcknowledged();
        result.confirmed = true;
        return result;
    };
    TextBox.prototype.previewState = function (textboxState, timeRatioLeft) {
        this.previewEnabled(textboxState.enabled, timeRatioLeft);
        this.previewValue(textboxState.value, timeRatioLeft);
    };
    TextBox.prototype.removePreviewState = function () {
        this.removePreviewEnabled();
        this.removePreviewValue();
    };
    return TextBox;
}(Widget));
//# sourceMappingURL=textbox.js.map