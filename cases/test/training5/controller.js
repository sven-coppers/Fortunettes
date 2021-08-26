$(document).ready(function() {
    new TrainingController();
});

function TrainingController() {
    this.init($("#training5"));
}

TrainingController extends Controller();
TrainingController.prototype.extendPrototype({
    initState: function(newWindowState) {
        newWindowState.getWidgetState("gender").getRadioButtonState("male").selected = true;
        newWindowState.getWidgetState("gender").getRadioButtonState("male").enabled = false;
        newWindowState.getWidgetState("gender").getRadioButtonState("female").enabled = false;
        newWindowState.getWidgetState("gender").getRadioButtonState("other").enabled = false;
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        if(identifier === "change") {
            newWindowState.getWidgetState("gender").getRadioButtonState("male").selected = false;
            newWindowState.getWidgetState("gender").getRadioButtonState("female").selected = false;
            newWindowState.getWidgetState("gender").getRadioButtonState("other").selected = true;
        }

        if(identifier === "change" && !isPreview) {
            logger.taskReached();
        }
    }
});
