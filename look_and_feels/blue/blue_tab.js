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
var BlueTab = /** @class */ (function (_super) {
    __extends(BlueTab, _super);
    function BlueTab(identifier, contents, container, controller, widgetFactory, tabGroup, mode) {
        return _super.call(this, identifier, contents, container, controller, widgetFactory, tabGroup, mode) || this;
    }
    BlueTab.prototype.initHTML = function (container) {
        this.identifier = container.attr("id");
        var name = container.find(".tab_header").html();
        var content = container.find(".tab_content").html();
        var tabHeader = '<div class="tab_header" id="' + this.identifier + '_header_blue">' + name + ' <div class="tab_changes hidden" id="' + this.identifier + '_changes">10</div><div class="tab_changes acknowledgements hidden" id="' + this.identifier + '_acknowledgements">10</div></div>';
        var tabContent = "";
        tabContent += '<div class="tab_changes_above hidden" id="' + this.identifier + '_changes_above">10</div>';
        tabContent += '<div class="tab_content" id="' + this.identifier + '_content_blue">';
        tabContent += content;
        tabContent += '     <div style="clear: both;"></div>';
        tabContent += '</div>';
        tabContent += '<div class="tab_changes_below hidden" id="' + this.identifier + '_changes_below">&nbsp;</div>';
        tabContent += '<div class="tab_changes_locations hidden" id="' + this.identifier + '_changes_locations"></div>';
        this.tabGroup.getTabHeaderContainer().append(tabHeader);
        this.tabGroup.getTabContentContainer().append(tabContent);
        container.remove();
        this.headerContainer = $('#' + this.identifier + '_header_blue');
        this.contentContainer = $('#' + this.identifier + '_content_blue');
    };
    BlueTab.prototype.initMinimap = function () {
        for (var childIdentifier in this.children) {
            var minimap = $('#' + this.identifier + '_changes_locations');
            this.children[childIdentifier].addLocationToMiniMap(minimap, this.contentContainer);
        }
    };
    /**
     * To be called after replacing the HTML and setting this.container
     * Overridden since only the header container is relevant
     */
    BlueTab.prototype.initBehavior = function () {
        var oThis = this;
        this.headerContainer.click(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE));
                oThis.headerContainer.trigger('mouseenter'); // Update feedforward
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
    BlueTab.prototype.setEnabled = function (enabled) {
        this.headerContainer.toggleClass("disabled", !enabled);
    };
    BlueTab.prototype.isEnabled = function () {
        return !this.headerContainer.hasClass("disabled");
    };
    BlueTab.prototype.previewEnabled = function (enabled) {
        if (enabled && this.headerContainer.hasClass("disabled")) {
            this.headerContainer.addClass("feedforward_enabled");
        }
        else if (!enabled && !this.headerContainer.hasClass("disabled")) {
            this.headerContainer.addClass("feedforward_disabled");
        }
    };
    BlueTab.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in all buttons");
    };
    BlueTab.prototype.previewVisible = function (visible) {
        console.log("TODO: implement previewVisible() in all buttons");
    };
    BlueTab.prototype.removeChildrenPreview = function () {
        $('#' + this.identifier + '_changes').addClass("hidden");
        $('#' + this.identifier + '_changes_above').addClass("hidden");
        $('#' + this.identifier + '_changes_below').addClass("hidden");
        $('#' + this.identifier + '_changes_locations').addClass("hidden");
    };
    BlueTab.prototype.setSelected = function (selected) {
        this.headerContainer.toggleClass("selected", selected);
        this.contentContainer.toggle(selected);
    };
    BlueTab.prototype.isSelected = function () {
        return this.headerContainer.hasClass("selected");
    };
    BlueTab.prototype.previewSelected = function (selected) {
        if (this.headerContainer.hasClass("selected") && !selected) {
            this.headerContainer.addClass("feedforward_deselected");
        }
        else if (!(this.headerContainer.hasClass("selected")) && selected) {
            this.headerContainer.addClass("feedforward_selected");
        }
    };
    BlueTab.prototype.removePreviewSelected = function () {
        this.headerContainer.removeClass("feedforward_enabled feedforward_disabled");
        this.headerContainer.removeClass("feedforward_selected feedforward_deselected");
    };
    BlueTab.prototype.previewChildren = function (tabState) {
        var numChanges = this.getNumChanges(tabState);
        if (numChanges > 0) {
            $('#' + this.identifier + '_changes').removeClass("hidden").text(numChanges);
        }
        if (this.isSelected()) {
            $('#' + this.identifier + '_changes_locations').removeClass("hidden");
            var countChildrenBelowViewPort = this.getNumChangesBelowViewPort(this.contentContainer, tabState);
            var countChildrenAboveViewPort = this.getNumChangesAboveViewPort(this.contentContainer, tabState);
            if (countChildrenAboveViewPort > 0)
                $('#' + this.identifier + '_changes_above').removeClass("hidden").text('+' + countChildrenAboveViewPort + ' changes above');
            if (countChildrenBelowViewPort > 0)
                $('#' + this.identifier + '_changes_below').removeClass("hidden").text('+' + countChildrenBelowViewPort + ' changes below');
            for (var childIdentifier in this.children) {
                this.children[childIdentifier].updateMiniMap(tabState.getChildState(childIdentifier));
            }
        }
    };
    BlueTab.prototype.removePreviewEnabled = function () {
    };
    BlueTab.prototype.removeAcknowledgementsRequired = function () {
    };
    BlueTab.prototype.setNumAcknowledgementsRequired = function (numAcknowledgementsRequired) {
    };
    return BlueTab;
}(Tab));
//# sourceMappingURL=blue_tab.js.map