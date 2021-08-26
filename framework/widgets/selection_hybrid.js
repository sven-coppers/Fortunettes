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
var SelectionHybrid = /** @class */ (function (_super) {
    __extends(SelectionHybrid, _super);
    function SelectionHybrid(identifier, container, controller, mode) {
        var _this = _super.call(this, identifier, Action.VALUE_CHANGED, controller, container, mode) || this;
        _this.initHTML(container);
        _this.initBehavior();
        return _this;
    }
    /**
     * To be called after replacing the HTML and setting this.cotainer
     */
    SelectionHybrid.prototype.initBehavior = function () {
        var oThis = this;
        this.container.click(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE, true));
                //  oThis.container.trigger('mouseenter'); // Update feedforward
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
    SelectionHybrid.prototype.handleEvent = function (event, windowState) {
        if (event.identifier === this.identifier && event.action === Action.SELECTED) {
            windowState.getWidgetState(this.identifier).selected = !windowState.getWidgetState(this.identifier).selected;
        }
    };
    SelectionHybrid.prototype.newState = function () {
        return new SelectionHybridState();
    };
    SelectionHybrid.prototype.setState = function (selectionHybridState) {
        this.setEnabled(selectionHybridState.enabled);
        this.setSelected(selectionHybridState.selected);
    };
    SelectionHybrid.prototype.getState = function () {
        var result = new SelectionHybridState();
        result.enabled = this.isEnabled();
        result.selected = this.isSelected();
        return result;
    };
    SelectionHybrid.prototype.previewState = function (selectionHybridState, timeRatioLeft) {
        this.previewEnabled(selectionHybridState.enabled, timeRatioLeft);
        this.previewSelected(selectionHybridState.selected, timeRatioLeft);
    };
    SelectionHybrid.prototype.removePreviewState = function () {
        this.removePreviewSelected();
        this.removePreviewEnabled();
    };
    return SelectionHybrid;
}(SelectableWidget));
//# sourceMappingURL=selection_hybrid.js.map