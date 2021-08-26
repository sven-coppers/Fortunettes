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
var BlueLookAndFeel = /** @class */ (function (_super) {
    __extends(BlueLookAndFeel, _super);
    function BlueLookAndFeel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlueLookAndFeel.prototype.createButton = function (element, controller) {
        return new BlueButton(element, controller, this.mode);
    };
    BlueLookAndFeel.prototype.createCheckboxGroup = function (checkboxGroupName, checkboxElements, checkboxLabels, controller) {
        return new BlueCheckboxGroup(checkboxGroupName, checkboxElements, checkboxLabels, controller, this.mode);
    };
    BlueLookAndFeel.prototype.createLabel = function (element, controller) {
        return new BlueLabel(element, controller, this.mode);
    };
    BlueLookAndFeel.prototype.createPanel = function (identifier, contents, container, controller, widgetFactory, defaultAction) {
        return new BluePanel(identifier, contents, container, controller, widgetFactory, defaultAction, this.mode);
    };
    BlueLookAndFeel.prototype.createRadioGroup = function (radioGroupName, radioElements, radioLabels, controller) {
        return new BlueRadioGroup(radioGroupName, radioElements, radioLabels, controller, this.mode);
    };
    BlueLookAndFeel.prototype.createSelectionHybrid = function (identifier, element, controller) {
        return new BlueSelectionHybrid(identifier, element, controller, this.mode);
    };
    BlueLookAndFeel.prototype.createTabGroup = function (identifier, container, controller, widgetFactory) {
        return new BlueTabGroup(identifier, container, controller, widgetFactory, this.mode);
    };
    BlueLookAndFeel.prototype.createTextbox = function (identifier, container, controller) {
        return new BlueTextbox(identifier, container, controller, this.mode);
    };
    BlueLookAndFeel.prototype.createListbox = function (identifier, container, controller) {
        return new BlueListbox(identifier, container, controller, this.mode);
    };
    return BlueLookAndFeel;
}(LookAndFeel));
//# sourceMappingURL=blue_look_and_feel.js.map