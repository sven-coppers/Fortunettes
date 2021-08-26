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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(identifier, controller, container, mode) {
        var _this = _super.call(this, identifier, Action.CLICKED, controller, container, mode) || this;
        _this.initHTML(container);
        _this.initHelpButton();
        _this.initAcknowledgements();
        _this.initBehavior();
        return _this;
    }
    /**
     * Add behavior to the newly generated HTML
     * @pre this.container needs to be updated to the new HTML container
     */
    Button.prototype.initBehavior = function () {
        var oThis = this;
        this.container.click(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.CLICKED, Effect.EXECUTE, true));
                //oThis.container.trigger('mouseenter'); // Update feedforward
            }
        });
        this.container.hover(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.CLICKED, Effect.START_PREVIEW, true));
            }
        }, function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.CLICKED, Effect.STOP_PREVIEW));
            }
        });
    };
    Button.prototype.newState = function () {
        return new ButtonState();
    };
    Button.prototype.setState = function (buttonState) {
        this.setEnabled(buttonState.enabled);
    };
    Button.prototype.getState = function () {
        var result = new ButtonState();
        result.enabled = this.isEnabled();
        return result;
    };
    Button.prototype.previewState = function (nextState, timeRatioLeft) {
        this.previewEnabled(nextState.enabled, timeRatioLeft);
    };
    Button.prototype.removePreviewState = function () {
        this.removePreviewEnabled();
    };
    return Button;
}(Widget));
//# sourceMappingURL=button.js.map