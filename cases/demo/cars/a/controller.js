$(document).ready(function() {
    new CarsController();
});

class CarsController extends Controller {
    constructor() {
        super($("#cars"));;
    }

    initState(newWindowState) {
        newWindowState.getWidgetState("model_75d").selected = true;
        newWindowState.getWidgetState("suspension_basic").selected = true;
        newWindowState.getWidgetState("pilot_none").selected = true;

        this.forceConstraints(newWindowState);
    }

    model75dSelected(event, newWindowState) {
        this.chooseModel(newWindowState, "model_75d");
        this.forceConstraints(newWindowState);
    }

    model100dSelected(event, newWindowState) {
        this.chooseModel(newWindowState, "model_100d");
        this.forceConstraints(newWindowState);
    }

    modelP100dSelected(event, newWindowState) {
        this.chooseModel(newWindowState, "model_p100d");
        this.forceConstraints(newWindowState);
    }

    suspensionBasicSelected(event, newWindowState) {
        this.chooseSuspension(newWindowState, "suspension_basic");
        this.forceConstraints(newWindowState);
    }

    suspensionSmartSelected(event, newWindowState) {
        this.chooseSuspension(newWindowState, "suspension_smart");
        this.forceConstraints(newWindowState);
    }

    pilotNoneSelected(event, newWindowState) {
        this.choosePilot(newWindowState, "pilot_none");
        this.forceConstraints(newWindowState);
    }

    pilotAutoSelected(event, newWindowState) {
        this.choosePilot(newWindowState, "pilot_auto");
        this.forceConstraints(newWindowState);
    }

    pilotDrivingSelected(event, newWindowState) {
        this.choosePilot(newWindowState, "pilot_driving");
        this.forceConstraints(newWindowState);
    }

   forceConstraints(newWindowState) {
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

   chooseModel(newWindowState, model) {
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

   chooseSuspension(newWindowState, suspension) {
        newWindowState.getWidgetState("suspension_basic").selected = false;
        newWindowState.getWidgetState("suspension_smart").selected = false;
        newWindowState.getWidgetState(suspension).selected = true;
    }

   choosePilot(newWindowState, pilot) {
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
}