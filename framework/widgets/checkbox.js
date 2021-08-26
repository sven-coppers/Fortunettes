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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(identifier, label, controller, container, checkboxGroup, mode) {
        var _this = _super.call(this, identifier, Action.SELECTED, controller, container, mode) || this;
        _this.checkboxGroup = checkboxGroup;
        _this.selected = false;
        _this.initHTML(container, label);
        _this.initHelpButton();
        _this.initBehavior();
        return _this;
    }
    /**
     * To be called after replacing the HTML and setting this.container
     */
    Checkbox.prototype.initBehavior = function () {
        var oThis = this;
        this.container.click(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE));
                //      oThis.container.trigger('mouseenter'); // Update feedforward
            }
        });
        this.container.hover(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW));
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
    Checkbox.prototype.handleEvent = function (event, windowState) {
        if (event.identifier === this.identifier && event.action === Action.SELECTED) {
            windowState.getWidgetState(this.identifier).selected = !windowState.getWidgetState(this.identifier).selected;
        }
    };
    Checkbox.prototype.newState = function () {
        return new CheckBoxState();
    };
    Checkbox.prototype.getState = function () {
        var result = new CheckBoxState();
        result.enabled = this.isEnabled();
        result.selected = this.isSelected();
        return result;
    };
    Checkbox.prototype.setState = function (checkboxState) {
        this.setSelected(checkboxState.selected);
    };
    Checkbox.prototype.previewState = function (checkboxState, timeRatioLeft) {
        this.previewEnabled(checkboxState.enabled, timeRatioLeft);
        this.previewSelected(checkboxState.selected, timeRatioLeft);
    };
    Checkbox.prototype.removePreviewState = function () {
        this.removePreviewEnabled();
        this.removePreviewSelected();
    };
    return Checkbox;
}(SelectableWidget));
//# sourceMappingURL=checkbox.js.map