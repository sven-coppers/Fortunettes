$(document).ready(function() {
    new EmptyController(lookAndFeels);
});

function EmptyController(lookAndFeels) {
    this.init($("#empty"), lookAndFeels);
    logger.taskReached();
}

EmptyController extends Controller();
EmptyController.prototype.extendPrototype({
    handleEvent: function (identifier, event, newWindowState, isPreview) {
        // Do nothing
    }
});