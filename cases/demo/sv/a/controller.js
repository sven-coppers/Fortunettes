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
    new SVController();
});
var SVController = /** @class */ (function (_super) {
    __extends(SVController, _super);
    function SVController() {
        var _this = _super.call(this, $("#sv")) || this;
        _this.maxPriority1 = 1;
        _this.maxPriority2 = 1;
        _this.maxPriority3 = 1;
        $("#sv").find(".selection_hybrid").css("margin-bottom", "0px");
        return _this;
    }
    SVController.prototype.initState = function (newWindowState) {
        newWindowState.getWidgetState("bag_1").selected = true;
        newWindowState.getWidgetState("quick_2").selected = true;
        newWindowState.getWidgetState("reg_3").selected = true;
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.bag1Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.bag2Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.bag3Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.bagXSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("bag_1").selected = false;
        newWindowState.getWidgetState("bag_2").selected = false;
        newWindowState.getWidgetState("bag_3").selected = false;
        newWindowState.getWidgetState("bag_x").selected = false;
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.quick1Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.quick2Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.quick3Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.quickXSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("quick_1").selected = false;
        newWindowState.getWidgetState("quick_2").selected = false;
        newWindowState.getWidgetState("quick_3").selected = false;
        newWindowState.getWidgetState("quick_x").selected = false;
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.reg1Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.reg2Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.reg3Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.regXSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("reg_1").selected = false;
        newWindowState.getWidgetState("reg_2").selected = false;
        newWindowState.getWidgetState("reg_3").selected = false;
        newWindowState.getWidgetState("reg_x").selected = false;
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.video1Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.video2Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.video3Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.videoXSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("video_1").selected = false;
        newWindowState.getWidgetState("video_2").selected = false;
        newWindowState.getWidgetState("video_3").selected = false;
        newWindowState.getWidgetState("video_x").selected = false;
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.door1Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.door2Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.door3Selected = function (event, newWindowState) {
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.doorXSelected = function (event, newWindowState) {
        newWindowState.getWidgetState("door_1").selected = false;
        newWindowState.getWidgetState("door_2").selected = false;
        newWindowState.getWidgetState("door_3").selected = false;
        newWindowState.getWidgetState("door_x").selected = false;
        this.forceConstraints(newWindowState);
    };
    SVController.prototype.forceConstraints = function (newWindowState) {
        this.setPriorityEnabled(newWindowState, "1", this.countPriority(newWindowState, "1") < this.maxPriority1);
        this.setPriorityEnabled(newWindowState, "2", this.countPriority(newWindowState, "2") < this.maxPriority2);
        this.setPriorityEnabled(newWindowState, "3", this.countPriority(newWindowState, "3") < this.maxPriority3);
        this.removeButtons(newWindowState);
    };
    SVController.prototype.countPriority = function (newWindowState, priority) {
        var result = 0;
        if (newWindowState.getWidgetState("bag_" + priority).selected)
            result++;
        if (newWindowState.getWidgetState("quick_" + priority).selected)
            result++;
        if (newWindowState.getWidgetState("reg_" + priority).selected)
            result++;
        if (newWindowState.getWidgetState("video_" + priority).selected)
            result++;
        if (newWindowState.getWidgetState("door_" + priority).selected)
            result++;
        return result;
    };
    SVController.prototype.setPriorityEnabled = function (newWindowState, priority, enabled) {
        newWindowState.getWidgetState("bag_" + priority).enabled = enabled || newWindowState.getWidgetState("bag_" + priority).selected;
        newWindowState.getWidgetState("quick_" + priority).enabled = enabled || newWindowState.getWidgetState("quick_" + priority).selected;
        newWindowState.getWidgetState("reg_" + priority).enabled = enabled || newWindowState.getWidgetState("reg_" + priority).selected;
        newWindowState.getWidgetState("video_" + priority).enabled = enabled || newWindowState.getWidgetState("video_" + priority).selected;
        newWindowState.getWidgetState("door_" + priority).enabled = enabled || newWindowState.getWidgetState("door_" + priority).selected;
    };
    SVController.prototype.removeButtons = function (newWindowState) {
        newWindowState.getWidgetState("bag_x").enabled = newWindowState.getWidgetState("bag_1").selected || newWindowState.getWidgetState("bag_2").selected || newWindowState.getWidgetState("bag_3").selected;
        newWindowState.getWidgetState("quick_x").enabled = newWindowState.getWidgetState("quick_1").selected || newWindowState.getWidgetState("quick_2").selected || newWindowState.getWidgetState("quick_3").selected;
        newWindowState.getWidgetState("reg_x").enabled = newWindowState.getWidgetState("reg_1").selected || newWindowState.getWidgetState("reg_2").selected || newWindowState.getWidgetState("reg_3").selected;
        newWindowState.getWidgetState("video_x").enabled = newWindowState.getWidgetState("video_1").selected || newWindowState.getWidgetState("video_2").selected || newWindowState.getWidgetState("video_3").selected;
        newWindowState.getWidgetState("door_x").enabled = newWindowState.getWidgetState("door_1").selected || newWindowState.getWidgetState("door_2").selected || newWindowState.getWidgetState("door_3").selected;
    };
    return SVController;
}(Controller));
//# sourceMappingURL=controller.js.map