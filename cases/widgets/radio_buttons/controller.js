$(document).ready(function() {
    new RadioButtonController();
});

class RadioButtonController extends Controller {
    constructor() {
        super($("#radio_buttons"));
    }

    initState(newWindowState) {
        //newWindowState.getWidgetState("knowledge").getRadioButtonState("passing").selected = true;
    }

    expertSelected(event, newWindowState) {

    }

    knowledgeableSelected(event, newWindowState) {

    }

    passingSelected(event, newWindowState) {

    }

    noKnowledgeSelected(event, newWindowState) {

    }
}