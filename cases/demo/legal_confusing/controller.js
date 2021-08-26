$(document).ready(function() {
    new LegalController();
});

function LegalController() {
    this.init($("#legal_confusing"));
    var widgets = this.lookAndFeels[0].getWidgets();
    var stateMachineReader = new StateMachineReader();

    this.stateMachine = stateMachineReader.read("cases/demo/legal_confusing/", this, widgets, false);
}

LegalController extends Controller();
LegalController.prototype.extendPrototype({
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
});