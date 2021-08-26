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
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(identifier, contents, container, controller, widgetFactory, tabGroup, mode) {
        var _this = _super.call(this, identifier, Action.SELECTED, controller, container, mode) || this;
        _this.tabGroup = tabGroup;
        _this.headerContainer = null;
        _this.contentContainer = null;
        _this.initHTML(container);
        _this.initChildren(_this.contentContainer, widgetFactory);
        //this.initMiniMap(); // TODO: FUTURE WORK
        _this.initBehavior();
        return _this;
    }
    //abstract initMiniMap();
    Tab.prototype.initChildren = function (container, widgetFactory) {
        this.children = widgetFactory.initialiseWidgets(container, this.controller);
    };
    /**
     * To be called after replacing the HTML and setting this.container
     */
    Tab.prototype.initBehavior = function () {
        var oThis = this;
        this.headerContainer.click(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE));
                //oThis.headerContainer.trigger('mouseenter'); // Update feedforward
            }
        });
        this.headerContainer.hover(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW));
            }
        }, function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.STOP_PREVIEW));
            }
        });
        this.contentContainer.scroll(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SCROLLED, Effect.EXECUTE));
            }
        });
    };
    /**
     * Redirect event down to the responsible widget
     * @param event
     * @param windowState
     * @post the windowState will be updated
     */
    Tab.prototype.handleEvent = function (event, windowState) {
        if (event.identifier === this.identifier && event.action === Action.SELECTED) {
            windowState.getWidgetState(this.tabGroup.identifier).selectTab(this.identifier);
        }
        for (var widgetName in this.children) {
            this.children[widgetName].handleEvent(event, windowState);
        }
    };
    Tab.prototype.newState = function () {
        return new TabState();
    };
    Tab.prototype.setState = function (tabState) {
        this.setEnabled(tabState.enabled);
        this.setSelected(tabState.selected);
        this.setChildrenStates(tabState);
        var numAcknowledgementsRequired = tabState.getNumRemainingAcknowledgements();
        if (numAcknowledgementsRequired > 0) {
            this.setNumAcknowledgementsRequired(numAcknowledgementsRequired);
        }
        else {
            this.removeAcknowledgementsRequired();
        }
    };
    Tab.prototype.getState = function () {
        var result = new TabState();
        result.enabled = this.isEnabled();
        result.selected = this.isSelected();
        result.childrenStates = this.getChildrenStates();
        return result;
    };
    Tab.prototype.previewState = function (tabState, timeRatioLeft) {
        this.previewEnabled(tabState.enabled, timeRatioLeft);
        this.previewSelected(tabState.selected, timeRatioLeft);
        this.previewChildrenStates(tabState, timeRatioLeft);
    };
    Tab.prototype.removePreviewState = function () {
        this.removePreviewEnabled();
        this.removePreviewSelected();
        this.removePreviewChildrenStates();
    };
    return Tab;
}(SelectableWidget));
//# sourceMappingURL=tab.js.map