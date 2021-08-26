$(document).ready(function() {
    new TrainingController();
});

function TrainingController() {
    this.init($("#training3"));
}

TrainingController extends Controller();
TrainingController.prototype.extendPrototype({
    initState: function(newWindowState) {
        newWindowState.getWidgetState("shirt1").selected = true;
        newWindowState.getWidgetState("discount").getCheckboxState("discount").enabled = false;
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        var shirt1 = newWindowState.getWidgetState("shirt1").selected;
        var shirt2 = newWindowState.getWidgetState("shirt2").selected;
        var shirt3 = newWindowState.getWidgetState("shirt3").selected;

        newWindowState.getWidgetState("discount").getCheckboxState("discount").selected = shirt1 && shirt3;

        if(!isPreview && shirt1 && shirt3) {
            logger.taskReached();
        }
    }
});
