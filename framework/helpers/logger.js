var LOG_SAVE_URL = "api/save.php";
var Logger = /** @class */ (function () {
    function Logger() {
        this.cache = [];
        this.reached = false;
    }
    Logger.prototype.log = function (message) {
        message = new Date().toISOString() + " - " + message;
        // console.log(message);
        this.cache.push(message);
    };
    Logger.prototype.taskReached = function () {
        this.log("TASK REACHED");
        this.reached = true;
    };
    Logger.prototype.isTaskReached = function () {
        return this.reached;
    };
    Logger.prototype.save = function (fileName, doneCallback, failCallback) {
        if (this.cache.length > 0) {
            var thisObject = this;
            var message = this.combineLogMessages();
            var data = { "file": fileName, "log": message };
            $.post(LOG_SAVE_URL, JSON.stringify(data))
                .done(function (response) {
                // Logging succeded
                thisObject.cache = [];
                doneCallback(response);
            })
                .fail(function (response) {
                failCallback(response);
            });
        }
        else {
            failCallback("No interaction detected.");
        }
    };
    Logger.prototype.combineLogMessages = function () {
        var result = "";
        for (var i = 0; i < this.cache.length; i++) {
            result += this.cache[i] + "\n";
        }
        return result;
    };
    return Logger;
}());
//# sourceMappingURL=logger.js.map