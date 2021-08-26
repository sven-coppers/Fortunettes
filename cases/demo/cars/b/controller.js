$(document).ready(function() {
    new CarsController();
});

function CarsController() {
    this.init($("#cars"));
}

CarsController extends Controller();
CarsController.prototype.extendPrototype({
    initState: function(newWindowState) {
        newWindowState.getWidgetState("model_75d").selected = true;
        newWindowState.getWidgetState("suspension_basic").selected = true;
        newWindowState.getWidgetState("pilot_none").selected = true;

        this.forceConstraints(newWindowState);
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        if(identifier.indexOf("model_") != -1) {
            this.chooseModel(newWindowState, identifier);
        }

        if(identifier.indexOf("suspension_") != -1) {
            this.chooseSuspension(newWindowState, identifier);
        }

        if(identifier.indexOf("pilot_") != -1) {
            this.choosePilot(newWindowState, identifier);
        }

        this.forceConstraints(newWindowState);

        if(!isPreview && newWindowState.getWidgetState("suspension_smart").selected && !(newWindowState.getWidgetState("pilot_driving").selected) && newWindowState.getWidgetState("pilot_auto").selected) {
            logger.taskReached();
        }
    }

   forceConstraints: function (newWindowState) {
        if (newWindowState.getWidgetState("model_75d").selected) {
            newWindowState.getWidgetState("suspension_basic").enabled = true;
            newWindowState.getWidgetState("suspension_smart").enabled = false;

            newWindowState.getWidgetState("pilot_none").enabled = true;
            newWindowState.getWidgetState("pilot_auto").enabled = true;
            newWindowState.getWidgetState("pilot_driving").enabled = false;
        }

        if (newWindowState.getWidgetState("model_100d").selected) {
            newWindowState.getWidgetState("suspension_basic").enabled = true;
            newWindowState.getWidgetState("suspension_smart").enabled = true;

            newWindowState.getWidgetState("pilot_none").enabled = true;
            newWindowState.getWidgetState("pilot_auto").enabled = true;
            newWindowState.getWidgetState("pilot_driving").enabled = true;
        }

        if (newWindowState.getWidgetState("model_p100d").selected) {
            newWindowState.getWidgetState("suspension_basic").enabled = false;
            newWindowState.getWidgetState("suspension_smart").enabled = true;

            newWindowState.getWidgetState("pilot_none").enabled = false;
            newWindowState.getWidgetState("pilot_auto").enabled = false;
            newWindowState.getWidgetState("pilot_driving").enabled = true;
        }
    }

   chooseModel: function(newWindowState, model) {
        newWindowState.getWidgetState("model_75d").selected = false;
        newWindowState.getWidgetState("model_100d").selected = false;
        newWindowState.getWidgetState("model_p100d").selected = false;
        newWindowState.getWidgetState(model).selected = true;

        if(model === "model_75d") {
            this.choosePilot(newWindowState, "pilot_none");
            this.chooseSuspension(newWindowState, "suspension_basic");
        } else if(model === "model_100d") {
            this.choosePilot(newWindowState, "pilot_auto");
        } else if(model === "model_p100d") {
            this.choosePilot(newWindowState, "pilot_driving");
            this.chooseSuspension(newWindowState, "suspension_smart");
            newWindowState.getWidgetState("pilot_driving").selected = true;
        }
    }

   chooseSuspension: function(newWindowState, suspension) {
        newWindowState.getWidgetState("suspension_basic").selected = false;
        newWindowState.getWidgetState("suspension_smart").selected = false;
        newWindowState.getWidgetState(suspension).selected = true;
    }

   choosePilot: function(newWindowState, pilot) {
        if(pilot === "pilot_driving") {
            newWindowState.getWidgetState("pilot_none").selected = false;
            newWindowState.getWidgetState("pilot_auto").selected = false;
        } else if(pilot === "pilot_auto") {
            newWindowState.getWidgetState("pilot_none").selected = false;
            newWindowState.getWidgetState("pilot_auto").selected = true;
            newWindowState.getWidgetState("pilot_driving").selected = false;
        } else if(pilot === "pilot_none") {
            newWindowState.getWidgetState("pilot_none").selected = true;
            newWindowState.getWidgetState("pilot_auto").selected = false;
            newWindowState.getWidgetState("pilot_driving").selected = false;
        }

      /*  newWindowState.getWidgetState("pilot_none").selected = false;
        newWindowState.getWidgetState("pilot_auto").selected = false;
        newWindowState.getWidgetState("pilot_driving").selected = false;
        newWindowState.getWidgetState(pilot).selected = true;

        if(newWindowState.getWidgetState("pilot_driving").selected) {
            newWindowState.getWidgetState("pilot_auto").selected = true;
        } */
    }
});