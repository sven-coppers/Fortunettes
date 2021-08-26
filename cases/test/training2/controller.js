$(document).ready(function() {
    new TrainingController();
});

function TrainingController() {
    this.init($("#training2"));
}

TrainingController extends Controller();
TrainingController.prototype.extendPrototype({
    initState: function(newWindowState) {
        newWindowState.getWidgetState("numbers").selection = [false, true, false, false, false];
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        var selection = newWindowState.getWidgetState("numbers").selection;

        var correct = arrayEquals(selection, [false, true, false, true, false]);

        if(!isPreview && correct) {
            logger.taskReached();
        }
    }
});
