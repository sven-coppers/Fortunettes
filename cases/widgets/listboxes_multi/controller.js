$(document).ready(function() {
    new ListBoxMultiController();
});

class ListBoxMultiController extends Controller {
    constructor() {
        super($("#listboxes_multi"));
    }

    initState(newWindowState) {
    }

    handleEvent(identifier, event, newWindowState, isPreview) {
        // Controlled by listboxes
    }
}