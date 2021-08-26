$(document).ready(function() {
    new LegalController();
});

class LegalController extends Controller {
    constructor() {
        super($("#legal"));
    }

    initState(newWindowState) {
        newWindowState.getWidgetState("next_step").enabled = false;
    }

    agreeSelected(event, newWindowState) {
        newWindowState.getWidgetState("agree").getChildState("agree").selected = !newWindowState.getWidgetState("agree").getChildState("agree").selected;
        newWindowState.getWidgetState("next_step").enabled = newWindowState.getWidgetState("agree").getChildState("agree").selected;
    }

    nextStepClicked(event, newWindowState) {
        newWindowState.getWidgetState("agree").getChildState("agree").selected = false;
        newWindowState.getWidgetState("next_step").enabled = false;
    }
}