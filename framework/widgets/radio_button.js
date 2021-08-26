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
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(identifier, label, controller, container, radioGroup, mode) {
        var _this = _super.call(this, identifier, Action.SELECTED, controller, container, mode) || this;
        _this.radioGroup = radioGroup;
        _this.selected = false;
        _this.initHTML(container, label);
        _this.initHelpButton();
        _this.initAcknowledgements();
        _this.initBehavior();
        return _this;
    }
    /**
     * To be called after replacing the HTML and setting this.container
     */
    RadioButton.prototype.initBehavior = function () {
        var oThis = this;
        this.container.click(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE, true));
                //oThis.container.trigger('mouseenter'); // Update feedforward
            }
        });
        this.container.hover(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW, true));
            }
        }, function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.STOP_PREVIEW));
            }
        });
    };
    /**
     * Redirect event down to the responsible widget
     * @param event
     * @param windowState
     * @post the windowState will be updated
     */
    RadioButton.prototype.handleEvent = function (event, windowState) {
        if (event.identifier === this.identifier && event.action === Action.SELECTED) {
            windowState.getWidgetState(this.radioGroup.identifier).selectRadioButton(this.identifier);
        }
    };
    RadioButton.prototype.newState = function () {
        return new RadioButtonState();
    };
    RadioButton.prototype.setState = function (radioButtonState) {
        this.setSelected(radioButtonState.selected);
        this.setEnabled(radioButtonState.enabled);
    };
    RadioButton.prototype.previewState = function (radioButtonState, timeRatioLeft) {
        this.previewSelected(radioButtonState.selected, timeRatioLeft);
        this.previewEnabled(radioButtonState.enabled, timeRatioLeft);
    };
    RadioButton.prototype.removePreviewState = function () {
        this.removePreviewSelected();
        this.removePreviewEnabled();
    };
    RadioButton.prototype.getState = function () {
        var result = new RadioButtonState();
        result.enabled = this.isEnabled();
        result.selected = this.isSelected();
        return result;
    };
    return RadioButton;
}(SelectableWidget));
//# sourceMappingURL=radio_button.js.map