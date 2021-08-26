//var EFFECT_HOW_TO = "effect_how_to";
//var EFFECT_ACCEPT_LIMBO = "effect_accept_limbo";
//var EFFECT_REJECT_LIMBO = "effect_reject_limbo";
//var EFFECT_REVERT_LIMBO = "effect_revert_limbo";
var Effect;
(function (Effect) {
    Effect["START_PREVIEW"] = "effect_preview";
    Effect["STOP_PREVIEW"] = "effect_remove_preview";
    Effect["EXECUTE"] = "effect_execute";
    Effect["START_LIMBO"] = "effect_start_limbo";
    Effect["ACKNOWLEDGE"] = "effect_acknowledge";
})(Effect || (Effect = {}));
var Action;
(function (Action) {
    Action["NONE"] = "action_none";
    Action["CLICKED"] = "action_clicked";
    Action["SELECTED"] = "action_selected";
    Action["DESELECTED"] = "action_deselected";
    Action["VALUE_CHANGED"] = "action_valueChanged";
    Action["SCROLLED"] = "action_scrolled";
})(Action || (Action = {}));
var GUIEvent = /** @class */ (function () {
    /**
     * Create a new GUIEvent
     * @param identifier the identifier of the widget
     * @param action the action that has been performed on the widget
     * @param effect the desired effect after handling the action
     * @param handlerRequired should we throw an error when there is no eventhandler?
     */
    function GUIEvent(identifier, action, effect, handlerRequired) {
        if (handlerRequired === void 0) { handlerRequired = false; }
        this.identifier = identifier;
        this.action = action;
        this.effect = effect;
        this.handlerRequired = handlerRequired;
    }
    return GUIEvent;
}());
//# sourceMappingURL=gui_event.js.map