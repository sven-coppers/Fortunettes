$(document).ready(function() {
    new TrainingController();
});

function TrainingController() {
    this.init($("#training4"));
}

TrainingController extends Controller();
TrainingController.prototype.extendPrototype({
    initState: function(newWindowState) {

        newWindowState.getWidgetState("integer").value = "";
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        if(identifier === "round") {
            if(newWindowState.getWidgetState("integer").value.length > 1) {
                newWindowState.getWidgetState("integer").value.replace(",", ".");

                newWindowState.getWidgetState("integer").value = Math.round(parseFloat(newWindowState.getWidgetState("integer").value));

                if(!isPreview && newWindowState.getWidgetState("integer").value == 3) {
                    logger.taskReached();
                }
            }
        }
    }
});
