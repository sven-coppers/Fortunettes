var Widget = /** @class */ (function () {
    function Widget(identifier, defaultAction, controller, container, mode) {
        this.identifier = identifier;
        this.defaultAction = defaultAction;
        this.controller = controller;
        this.container = container;
        this.children = [];
        this.mode = mode;
    }
    Widget.prototype.setChildrenStates = function (widgetState) {
        for (var childName in widgetState.childrenStates) {
            this.children[childName].setState(widgetState.getChildState(childName));
        }
    };
    Widget.prototype.getChildrenStates = function () {
        var result = [];
        for (var childName in this.children) {
            result[childName] = this.children[childName].getState();
        }
        return result;
    };
    Widget.prototype.previewStateIfNeeded = function (nextState, timeRatioLeft) {
        if (this.mode == "all") {
            this.previewState(nextState, timeRatioLeft);
            this.previewChildrenStates(nextState, timeRatioLeft);
        }
        else if (!this.getState().equals(nextState) && this.mode == "some") {
            this.previewState(nextState, timeRatioLeft);
            this.previewChildrenStates(nextState, timeRatioLeft);
        }
        else {
            this.removePreviewState();
        }
    };
    Widget.prototype.previewChildrenStates = function (nextState, timeRatioLeft) {
        for (var childName in this.children) {
            this.children[childName].previewStateIfNeeded(nextState.getChildState(childName), timeRatioLeft);
        }
    };
    Widget.prototype.removePreviewChildrenStates = function () {
        for (var childName in this.children) {
            this.children[childName].removePreviewState();
        }
    };
    /******************************************************************************************************************
     * Support the enabled property                                                                                   *
     ******************************************************************************************************************/
    Widget.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    Widget.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    Widget.prototype.previewEnabled = function (enabled, timeRatioLeft) {
        if (enabled && this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_enabled");
        }
        else if (!enabled && !this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_disabled");
        }
    };
    Widget.prototype.removePreviewEnabled = function () {
        this.container.removeClass("feedforward_enabled feedforward_disabled");
    };
    /******************************************************************************************************************
     * Support acknowledging changes                                                                                  *
     ******************************************************************************************************************/
    Widget.prototype.isAcknowledged = function () {
        return this.container.find(".change_indicator").hasClass("acknowledged");
    };
    Widget.prototype.setAcknowledged = function (acknowledged) {
        this.container.find(".change_indicator").toggleClass("acknowledged", acknowledged);
    };
    Widget.prototype.initAcknowledgements = function () {
        var oThis = this;
        //  this.container.append('<div class="change_indicator acknowledged">&nbsp;</div>');
        this.container.hover(function () {
            if (!oThis.isAcknowledged()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.NONE, Effect.ACKNOWLEDGE));
            }
        });
    };
    /******************************************************************************************************************
     * Support the help button                                                                                        *
     ******************************************************************************************************************/
    Widget.prototype.showHelpButton = function (targetContainer) {
        // $("#" + this.identifier + "_help").removeClass("hidden");
        if (targetContainer === void 0) { targetContainer = this.container; }
        /* if(this.controller.isInLimbo()) return; // Don't start a new WhatIf
         if(this.container.find(".help_button").length > 0) return; // If there is already one
 
         var oThis = this;
 
 
         var newHTML = '';
 
         newHTML += '<div class="tooltip" id="' + this.identifier + '_tooltip">';
         newHTML += '    <p class="tooltip_legacy">Send the message to all receivers</p>';
         newHTML += '    <div class="tooltip_questions">';
         newHTML += '        <div class="question_type"><p class="question_name" id="' + this.identifier + '_what">What?</p><p class="question_open">&#9654;</p></div>';
         newHTML += '    </div>';
         newHTML += '</div>';
 
         targetContainer.append(newHTML);
 
         $("#" + this.identifier + "_help").hover(function() {
             $("#" + oThis.identifier + "_tooltip").removeClass("hidden");
         }, function () {
             $("#" + oThis.identifier + "_tooltip").addClass("hidden");
         });
 
         $("#" + this.identifier + "_help").click(function() {
             oThis.controller.processEvent(new GUIEvent(oThis.identifier, oThis.defaultAction, Effect.START_LIMBO));
             oThis.removeHelpButton();
             return false; // Prevent the widget itself from being clicked
         });
 
         $("#" + this.identifier + "_tooltip").hover(function() {
 
         }, function () {
             oThis.removeHelpButton();
         });*/
    };
    Widget.prototype.removeHelpButton = function () {
        $("#" + this.identifier + "_help").addClass("hidden");
        // $("#" + this.identifier + "_tooltip").remove();
    };
    Widget.prototype.initHelpButton = function () {
        /*    var oThis = this;
    
            this.container.append('<div class="help_button hidden" id="' + this.identifier + '_help">?</div>');
    
            $("#" + this.identifier + "_help").click(function (event) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, oThis.defaultAction, Effect.START_LIMBO));
                oThis.removeHelpButton();
                event.stopImmediatePropagation();
                return false;
            });
    
            this.container.hover(function() {
                if(oThis.isEnabled()) {
                    oThis.showHelpButton();
                }
            }, function () {
                oThis.removeHelpButton();
            }); */
    };
    /**
     * GOING DOWN THE TREE
     * Redirect event down to the responsible widget
     * @param event
     * @param windowState
     * @post the windowState will be updated
     */
    Widget.prototype.handleEvent = function (event, windowState) {
        for (var widgetName in this.children) {
            this.children[widgetName].handleEvent(event, windowState);
        }
    };
    Widget.prototype.getNumChangesBelowViewPort = function (viewportElement, otherWidgetState) {
        if (jQuery.isEmptyObject(this.children)) {
            if (this.getState().equals(otherWidgetState))
                return 0;
            return this.isBelowViewPort((viewportElement)) ? 1 : 0;
        }
        var result = 0;
        for (var childIdentifier in this.children) {
            result += this.children[childIdentifier].getNumChangesBelowViewPort(viewportElement, otherWidgetState.getChildState(childIdentifier));
        }
        return result;
    };
    Widget.prototype.getNumChangesAboveViewPort = function (viewportElement, otherWidgetState) {
        if (jQuery.isEmptyObject(this.children)) {
            if (this.getState().equals(otherWidgetState))
                return 0;
            return this.isAboveViewPort((viewportElement)) ? 1 : 0;
        }
        var result = 0;
        for (var childIdentifier in this.children) {
            result += this.children[childIdentifier].getNumChangesAboveViewPort(viewportElement, otherWidgetState.getChildState(childIdentifier));
        }
        return result;
    };
    Widget.prototype.isBelowViewPort = function (viewportElement) {
        var elementTop = this.container.position().top;
        var viewportBottom = viewportElement.height();
        return elementTop > viewportBottom;
    };
    Widget.prototype.isAboveViewPort = function (viewportElement) {
        return this.container.position().top + this.container.height() < 0;
    };
    Widget.prototype.getNumChanges = function (otherWidgetState) {
        if (jQuery.isEmptyObject(this.children)) {
            return this.getState().equals(otherWidgetState) ? 0 : 1;
        }
        var result = 0;
        for (var childIdentifier in this.children) {
            result += this.children[childIdentifier].getNumChanges(otherWidgetState.getChildState(childIdentifier));
        }
        return result;
    };
    Widget.prototype.addLocationToMiniMap = function (minimap, viewportElement) {
        if (jQuery.isEmptyObject(this.children)) {
            minimap.append('<div class="change_location" id="' + this.identifier + '_location">&nbsp;</div>');
            var maxScrollPosition = viewportElement.prop('scrollHeight');
            var mapHeight = viewportElement.height();
            $('#' + this.identifier + '_location').height(this.container.height() / maxScrollPosition * mapHeight);
            $('#' + this.identifier + '_location').css({ top: (this.container.position().top / maxScrollPosition * mapHeight) + 'px' });
            return;
        }
        for (var childIdentifier in this.children) {
            this.children[childIdentifier].addLocationToMiniMap(minimap, viewportElement);
        }
    };
    Widget.prototype.updateMiniMap = function (newState) {
        if (jQuery.isEmptyObject(this.children)) {
            var numChanges = this.getNumChanges(newState);
            $('#' + this.identifier + '_location').toggleClass("changes", numChanges > 0);
            return;
        }
        for (var childIdentifier in this.children) {
            this.children[childIdentifier].updateMiniMap(newState.getChildState(childIdentifier));
        }
    };
    return Widget;
}());
//# sourceMappingURL=widget.js.map