$(document).ready(function() {
    new CheckboxController();
});

class CheckboxController extends Controller {
    constructor() {
       super($("#checkboxes"));
    }

    initState(newWindowState) {
        newWindowState.getWidgetState("day").getChildState("monday").selected = true;
    }

   handleEvent(identifier, event, newWindowState) {
        // Already handled for checkboxes

        if(identifier === "wednesday") {
            logger.taskReached();
        }
    }
}