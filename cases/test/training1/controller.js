$(document).ready(function() {
    new LegalController();
});

function LegalController() {
    this.init($("#training1"));
}

LegalController extends Controller();
LegalController.prototype.extendPrototype({
    initState: function(newWindowState) {
        newWindowState.getWidgetState("next_step").enabled = false;
    }

   handleEvent: function (event, newWindowState) {
        newWindowState.getWidgetState("next_step").enabled = newWindowState.getWidgetState("agree").getCheckboxState("agree").selected;

      /*  if(!isPreview && newWindowState.getWidgetState("next_step").enabled) {
            logger.taskReached();
        } */
    }
});
