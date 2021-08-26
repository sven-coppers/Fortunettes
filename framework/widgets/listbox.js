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
var ListBox = /** @class */ (function (_super) {
    __extends(ListBox, _super);
    function ListBox(identifier, controller, container, mode) {
        var _this = _super.call(this, identifier, Action.VALUE_CHANGED, controller, container, mode) || this;
        _this.allowMultiple = false;
        _this.startElementIndex = 0;
        _this.lastPreviewIndex = 0;
        _this.initHTML(container);
        _this.initBehavior();
        return _this;
    }
    /**
     * To be called after replacing the HTML and setting this.container
     */
    ListBox.prototype.initBehavior = function () {
        var oThis = this;
        this.container.find("option").hover(function (event) {
            if (oThis.isEnabled()) {
                oThis.lastPreviewIndex = $(this).index();
                oThis.controller.processEvent(new ListboxEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW, $(this).index(), event));
            }
        }, function () {
            oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.STOP_PREVIEW));
        });
        this.container.on('keyup keydown', function (event) {
            oThis.controller.processEvent(new ListboxEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW, oThis.lastPreviewIndex, event));
        });
        this.container.find("option").click(function (event) {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new ListboxEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE, $(this).index(), event));
                oThis.container.trigger('mouseenter'); // Update feedforward
            }
        });
    };
    /**
     * Redirect event down to the responsible widget
     * @param event
     * @param windowState
     * @post the windowState will be updated
     */
    ListBox.prototype.handleEvent = function (event, windowState) {
        if (event.identifier === this.identifier && event.action === Action.SELECTED) {
            var listboxEvent = event;
            var newListboxState = windowState.getWidgetState(this.identifier);
            if (event.effect == Effect.EXECUTE && !listboxEvent.event.shiftKey) {
                newListboxState.startElementIndex = listboxEvent.index;
            }
            if (this.allowMultiple) {
                if (listboxEvent.event.shiftKey && this.startElementIndex != null) {
                    // Shift + click = ...
                    this.selectMultipleExtended(newListboxState.selection, newListboxState.startElementIndex, listboxEvent.index);
                }
                else if (listboxEvent.event.ctrlKey || listboxEvent.event.metaKey) {
                    // ctrl + click = multiSimple
                    this.selectMultipleSimple(newListboxState.selection, listboxEvent.index);
                }
                else {
                    // Normal click = select 1
                    this.selectOne(newListboxState.selection, listboxEvent.index);
                }
            }
            else {
                this.selectOne(newListboxState.selection, listboxEvent.index);
            }
        }
    };
    ListBox.prototype.newState = function () {
        return new ListboxState();
    };
    ListBox.prototype.setState = function (listboxState) {
        if (listboxState.visible != null) {
            this.setEnabled(listboxState.enabled);
        }
        if (listboxState.selection != null) {
            this.setSelection(listboxState.selection);
        }
        if (listboxState.enabled != null) {
            this.setEnabled(listboxState.enabled);
        }
        if (listboxState.startElementIndex != null) {
            this.startElementIndex = listboxState.startElementIndex;
        }
    };
    ListBox.prototype.getState = function () {
        var result = new ListboxState();
        result.enabled = this.isEnabled();
        result.startElementIndex = this.startElementIndex;
        result.selection = this.getSelection();
        return result;
    };
    ListBox.prototype.previewState = function (listboxState, timeRatioLeft) {
        this.previewEnabled(listboxState.enabled, timeRatioLeft);
        this.previewSelection(listboxState.selection, timeRatioLeft);
    };
    ListBox.prototype.removePreviewState = function () {
        this.removePreviewEnabled();
        this.removePreviewSelection();
    };
    ListBox.prototype.selectOne = function (selection, newElementIndex) {
        for (var i = 0; i < selection.length; i++) {
            selection[i] = false;
        }
        selection[newElementIndex] = true;
    };
    ListBox.prototype.selectMultipleSimple = function (selection, newElementIndex) {
        selection[newElementIndex] = !selection[newElementIndex];
    };
    ListBox.prototype.selectMultipleExtended = function (selection, startElementIndex, newElementIndex) {
        for (var i = 0; i < selection.length; i++) {
            selection[i] = false;
        }
        var min = Math.min(startElementIndex, newElementIndex);
        var max = Math.max(startElementIndex, newElementIndex);
        for (var i = min; i <= max; i++) {
            selection[i] = true;
        }
    };
    return ListBox;
}(Widget));
//# sourceMappingURL=listbox.js.map