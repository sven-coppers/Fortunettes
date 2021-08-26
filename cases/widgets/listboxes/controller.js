$(document).ready(function() {
    new ListBoxController();
});

class ListBoxController extends Controller {
    constructor() {
        super($("#listboxes"));
    }

    initState(newWindowState) {
    }

    handleEvent(identifier, event, newWindowState, isPreview) {
        // Controlled by listboxes
    }
}