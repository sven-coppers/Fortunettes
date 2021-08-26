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
$(document).ready(function () {
    new ChoiceHelperController();
});
var ChoiceHelperController = /** @class */ (function (_super) {
    __extends(ChoiceHelperController, _super);
    function ChoiceHelperController() {
        return _super.call(this, $("#conferences_case")) || this;
    }
    ChoiceHelperController.prototype.initState = function (newWindowState) {
        newWindowState.getWidgetState("conferences").enabled = false;
    };
    ChoiceHelperController.prototype.toolkitSelected = function (event, newWindowState) {
        this.updateRecommendations(event, newWindowState);
    };
    ChoiceHelperController.prototype.hardwareSelected = function (event, newWindowState) {
        this.updateRecommendations(event, newWindowState);
    };
    ChoiceHelperController.prototype.softwareSelected = function (event, newWindowState) {
        this.updateRecommendations(event, newWindowState);
    };
    ChoiceHelperController.prototype.arSelected = function (event, newWindowState) {
        this.updateRecommendations(event, newWindowState);
    };
    ChoiceHelperController.prototype.vrSelected = function (event, newWindowState) {
        this.updateRecommendations(event, newWindowState);
    };
    ChoiceHelperController.prototype.saSelected = function (event, newWindowState) {
        this.updateRecommendations(event, newWindowState);
    };
    ChoiceHelperController.prototype.usabilitySelected = function (event, newWindowState) {
        this.updateRecommendations(event, newWindowState);
    };
    ChoiceHelperController.prototype.updateRecommendations = function (event, newWindowState) {
        var keywords = newWindowState.getWidgetState("keywords");
        var conferences = newWindowState.getWidgetState("conferences");
        var toolkit = keywords.getCheckboxState("toolkit").selected;
        var hardware = keywords.getCheckboxState("hardware").selected;
        var software = keywords.getCheckboxState("software").selected;
        var ar = keywords.getCheckboxState("ar").selected;
        var vr = keywords.getCheckboxState("vr").selected;
        var sa = keywords.getCheckboxState("sa").selected;
        var usability = keywords.getCheckboxState("usability").selected;
        var uist = (toolkit || software);
        var chi = (usability || software);
        var dis = (vr || ar);
        var eics = (sa || hardware);
        conferences.selection = [uist, chi, dis, eics];
        this.container.find("select").focus();
    };
    return ChoiceHelperController;
}(Controller));
//# sourceMappingURL=controller.js.map