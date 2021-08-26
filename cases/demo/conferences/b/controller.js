$(document).ready(function() {
    new ChoiceHelperController();
});

function ChoiceHelperController() {
    this.init($("#conferences_case"));
}

ChoiceHelperController extends Controller();
ChoiceHelperController.prototype.extendPrototype({
    initState: function(newWindowState) {
        newWindowState.getWidgetState("conferences").enabled = false;
    }

   handleEvent: function (identifier, event, newWindowState, isPreview) {
        var keywords = newWindowState.getWidgetState("keywords");
        var conferences = newWindowState.getWidgetState("conferences");

        var toolkit = keywords.getCheckboxState("toolkit").selected;
        var hardware = keywords.getCheckboxState("hardware").selected;
        var software = keywords.getCheckboxState("software").selected;
        var ar = keywords.getCheckboxState("ar").selected;
        var vr = keywords.getCheckboxState("vr").selected;
        var sa = keywords.getCheckboxState("sa").selected;
        var usability = keywords.getCheckboxState("usability").selected;

        var uist = (toolkit || software);
        var chi = (usability || software);
        var dis = (vr || ar) ;
        var eics = (sa || hardware);

        conferences.selection = [uist, chi, dis, eics];

        if(!isPreview) {
            var correct = uist && !chi && dis && !eics;

            if(correct) logger.taskReached();
        }

        this.container.find("select").focus();
    }
});