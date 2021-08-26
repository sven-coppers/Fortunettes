$(document).ready(function() {
    new TextboxesController();
});

class TextboxesController extends Controller {
    constructor() {
        super($("#textboxes"));
    }

    initState(newWindowState) {
        this.lastConfirmedValue = newWindowState.getWidgetState("textbox").value;
    }

    textboxValueChanged(event, newWindowState) {
        var textboxState = newWindowState.getWidgetState("textbox");

        if(textboxState.value === "your") {
            textboxState.value = "you're!";
        }

        this.lastConfirmedValue = textboxState.value;
    }

    previewTextboxValueChanged(event, newWindowState) {
        var textboxState = newWindowState.getWidgetState("textbox");

        if(textboxState.value === "your handsome") {
            textboxState.value = "you're handsome!";
        }
    }
}