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
var MixedLookAndFeel = /** @class */ (function (_super) {
    __extends(MixedLookAndFeel, _super);
    function MixedLookAndFeel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixedLookAndFeel.prototype.createButton = function (element, controller) {
        return new MixedButton(element, controller, this.mode);
    };
    MixedLookAndFeel.prototype.createCheckboxGroup = function (checkboxGroupName, checkboxElements, checkboxLabels, controller) {
        return new MixedCheckboxGroup(checkboxGroupName, checkboxElements, checkboxLabels, controller, this.mode);
    };
    MixedLookAndFeel.prototype.createLabel = function (element, controller) {
        //  return new MixedLabel(element, controller, this.mode);
    };
    MixedLookAndFeel.prototype.createPanel = function (identifier, contents, container, controller, widgetFactory, defaultAction) {
        //    return new MixedPanel(identifier, contents, container, controller, widgetFactory, defaultAction, this.mode);
    };
    MixedLookAndFeel.prototype.createRadioGroup = function (radioGroupName, radioElements, radioLabels, controller) {
        return new MixedRadioGroup(radioGroupName, radioElements, radioLabels, controller, this.mode);
    };
    MixedLookAndFeel.prototype.createSelectionHybrid = function (identifier, element, controller) {
        return new MixedSelectionHybrid(identifier, element, controller, this.mode);
    };
    MixedLookAndFeel.prototype.createTabGroup = function (identifier, container, controller, widgetFactory) {
        //  return new MixedTabGroup(identifier, container, controller, widgetFactory, this.mode);
    };
    MixedLookAndFeel.prototype.createTextbox = function (identifier, container, controller) {
        return new MixedTextbox(identifier, container, controller, this.mode);
    };
    MixedLookAndFeel.prototype.createListbox = function (identifier, container, controller) {
        return new MixedListbox(identifier, container, controller, this.mode);
    };
    return MixedLookAndFeel;
}(LookAndFeel));
//# sourceMappingURL=mixed_look_and_feel.js.map