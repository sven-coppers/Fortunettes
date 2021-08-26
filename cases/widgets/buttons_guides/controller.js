$(document).ready(function() {
    new ButtonsGuidesController(lookAndFeels);
});

function ButtonsGuidesController(lookAndFeels) {
    this.container = $("#buttons_guides");

    this.init(this.container, lookAndFeels);
    var widgets = this.lookAndFeels[0].getWidgets();
    var stateMachineReader = new StateMachineReader();

    this.stateMachine = stateMachineReader.read("cases/buttons_guides/", this, widgets, true);
}

ButtonsGuidesController extends Controller();
ButtonsGuidesController.prototype.extendPrototype({
    stateMachineLoaded: function () {
        this.applicationState = this.stateMachine.currentState;
        this.setWindowState(this.applicationState.getWindowState());
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        var nextApplicationState = this.stateMachine.getNextStateFrom(this.applicationState.name, identifier, event);

        // If the state machine knows something
        if(nextApplicationState != null) {
            newWindowState.copyFromWindowState(nextApplicationState.getWindowState());
        }

        if(!isPreview) {
            this.applicationState = nextApplicationState;
        }
    }

   howTo: function (identifier, event) {
        return this.stateMachine.getRequiredTransitions(this.applicationState.name, identifier, event);
    }
});