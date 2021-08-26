$(document).ready(function() {
    new SVController();
});

function SVController() {
    this.maxPriority1 = 1;
    this.maxPriority2 = 1;
    this.maxPriority3 = 1;

    this.init($("#sv"));

    $("#sv").find(".selection_hybrid").css("margin-bottom", "0px");
}

SVController extends Controller();
SVController.prototype.extendPrototype({
    initState: function(newWindowState) {
        newWindowState.getWidgetState("bag_1").selected = true;
        newWindowState.getWidgetState("quick_2").selected = true;
        newWindowState.getWidgetState("reg_3").selected = true;

        this.forceConstraints(newWindowState);
        this.removeButtons(newWindowState);
    }

   handleEvent(identifier, event, newWindowState, isPreview) {
        if(identifier.indexOf("_x") != -1) {
            this.removeItem(newWindowState, identifier);
        }

        this.forceConstraints(newWindowState);

        if(identifier.indexOf("_x") == -1) {
            newWindowState.getWidgetState(identifier).enabled = true;
        }

        this.removeButtons(newWindowState);

        if(!isPreview && newWindowState.getWidgetState("reg_2").selected && newWindowState.getWidgetState("reg_3").selected) {
            logger.taskReached();
        }
    }

   forceConstraints(newWindowState) {
        this.setPriorityEnabled(newWindowState, "1", this.countPriority(newWindowState, "1") < this.maxPriority1);
        this.setPriorityEnabled(newWindowState, "2", this.countPriority(newWindowState, "2") < this.maxPriority2);
        this.setPriorityEnabled(newWindowState, "3", this.countPriority(newWindowState, "3") < this.maxPriority3);
    }

   removeItem: function(newWindowState, identifier) {
        var prefix = identifier.slice(0, -1);

        newWindowState.getWidgetState(identifier).selected = false;
        newWindowState.getWidgetState(prefix + "1").selected = false;
        newWindowState.getWidgetState(prefix + "2").selected = false;
        newWindowState.getWidgetState(prefix + "3").selected = false;
    }

   countPriority(newWindowState, priority) {
        var result = 0;

        if(newWindowState.getWidgetState("bag_" + priority).selected) result++;
        if(newWindowState.getWidgetState("quick_" + priority).selected) result++;
        if(newWindowState.getWidgetState("reg_" + priority).selected) result++;
        if(newWindowState.getWidgetState("video_" + priority).selected) result++;
        if(newWindowState.getWidgetState("door_" + priority).selected) result++;

        return result;
    }

   setPriorityEnabled(newWindowState, priority, enabled) {
        newWindowState.getWidgetState("bag_" + priority).enabled = enabled ||  newWindowState.getWidgetState("bag_" + priority).selected;
        newWindowState.getWidgetState("quick_" + priority).enabled = enabled ||  newWindowState.getWidgetState("quick_" + priority).selected;
        newWindowState.getWidgetState("reg_" + priority).enabled = enabled ||  newWindowState.getWidgetState("reg_" + priority).selected;
        newWindowState.getWidgetState("video_" + priority).enabled = enabled ||  newWindowState.getWidgetState("video_" + priority).selected;
        newWindowState.getWidgetState("door_" + priority).enabled = enabled ||  newWindowState.getWidgetState("door_" + priority).selected;
    }

   removeButtons: function(newWindowState) {
        newWindowState.getWidgetState("bag_x").enabled = newWindowState.getWidgetState("bag_1").selected || newWindowState.getWidgetState("bag_2").selected || newWindowState.getWidgetState("bag_3").selected;
        newWindowState.getWidgetState("quick_x").enabled = newWindowState.getWidgetState("quick_1").selected || newWindowState.getWidgetState("quick_2").selected || newWindowState.getWidgetState("quick_3").selected;
        newWindowState.getWidgetState("reg_x").enabled = newWindowState.getWidgetState("reg_1").selected || newWindowState.getWidgetState("reg_2").selected || newWindowState.getWidgetState("reg_3").selected;
        newWindowState.getWidgetState("video_x").enabled = newWindowState.getWidgetState("video_1").selected || newWindowState.getWidgetState("video_2").selected || newWindowState.getWidgetState("video_3").selected;
        newWindowState.getWidgetState("door_x").enabled = newWindowState.getWidgetState("door_1").selected || newWindowState.getWidgetState("door_2").selected || newWindowState.getWidgetState("door_3").selected;
    }
});