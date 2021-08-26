$(document).ready(function() {
    new WXRController();
});

function WXRController() {
    this.init($("#wxr"));
}

WXRController extends Controller();
WXRController.prototype.extendPrototype({
    initState: function(newWindowState) {
        this.lastConfirmedValue = "10";

        newWindowState.getWidgetState("mode").getRadioButtonState("mode_off").selected = true;
        newWindowState.getWidgetState("tilt").value = this.lastConfirmedValue;
        newWindowState.getWidgetState("tilt").enabled = false;
        newWindowState.getWidgetState("tilt_auto").enabled = false;
        newWindowState.getWidgetState("tilt_manual").enabled = false;
        newWindowState.getWidgetState("stabilization_on").enabled = false;
        newWindowState.getWidgetState("stabilization_off").enabled = false;
        newWindowState.getWidgetState("low").enabled = false;
        newWindowState.getWidgetState("mid").enabled = false;
        newWindowState.getWidgetState("high").enabled = false;
    }

   handleEvent(identifier, event, newWindowState, isPreview) {
        if(identifier === "mode_off" || identifier === "mode_stdby" || identifier === "mode_tst" ) {
            newWindowState.getWidgetState("tilt").enabled = false;
            newWindowState.getWidgetState("tilt_auto").enabled = false;
            newWindowState.getWidgetState("tilt_manual").enabled = false;
            newWindowState.getWidgetState("stabilization_on").enabled = false;
            newWindowState.getWidgetState("stabilization_off").enabled = false;
            newWindowState.getWidgetState("tilt_auto").selected = false;
            newWindowState.getWidgetState("tilt_manual").selected = false;
            newWindowState.getWidgetState("stabilization_on").selected = false;
            newWindowState.getWidgetState("stabilization_off").selected = false;
        } else if(identifier === "mode_wxon") {
            newWindowState.getWidgetState("tilt_auto").enabled = true;
            newWindowState.getWidgetState("tilt_manual").enabled = true;
            newWindowState.getWidgetState("tilt_auto").selected = true;
            newWindowState.getWidgetState("tilt_manual").selected = false;
            newWindowState.getWidgetState("stabilization_on").enabled = false;
            newWindowState.getWidgetState("stabilization_off").enabled = false;
            newWindowState.getWidgetState("stabilization_on").selected = false;
            newWindowState.getWidgetState("stabilization_off").selected = false;
        } else if(identifier === "mode_wxa") {
            newWindowState.getWidgetState("tilt_auto").enabled = true;
            newWindowState.getWidgetState("tilt_manual").enabled = true;
            newWindowState.getWidgetState("tilt_auto").selected = true;
            newWindowState.getWidgetState("tilt_manual").selected = false;
            newWindowState.getWidgetState("stabilization_on").enabled = true;
            newWindowState.getWidgetState("stabilization_off").enabled = true;
            newWindowState.getWidgetState("stabilization_on").selected = true;
            newWindowState.getWidgetState("stabilization_off").selected = false;
        }

        if(identifier === "tilt_manual") {
            newWindowState.getWidgetState("tilt_auto").selected = false;
        } else if(identifier === "tilt_auto") {
            newWindowState.getWidgetState("tilt_manual").selected = false;
        }

        if(identifier === "stabilization_on") {
            newWindowState.getWidgetState("stabilization_off").selected = false;
        } else if(identifier === "stabilization_off") {
            newWindowState.getWidgetState("stabilization_on").selected = false;
        }

        newWindowState.getWidgetState("low").enabled = newWindowState.getWidgetState("tilt_manual").selected;
        newWindowState.getWidgetState("mid").enabled = newWindowState.getWidgetState("tilt_manual").selected;
        newWindowState.getWidgetState("high").enabled = newWindowState.getWidgetState("tilt_manual").selected;

        if(identifier === "low") {
            newWindowState.getWidgetState("tilt").value = 5;
        } else if(identifier === "mid") {
            newWindowState.getWidgetState("tilt").value = 10;
        } else if(identifier === "high") {
            newWindowState.getWidgetState("tilt").value = 15;
        }

        if(!isPreview && newWindowState.getWidgetState("tilt").value == 15) {
            logger.taskReached();
        }
    }
});