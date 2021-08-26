$(document).ready(function() {
    new TimerController();
});

function TimerController() {
    this.timerDuration = 5; // seconds

    this.timer = new Timer();
    var oThis = this;

    this.timer.addEventListener("secondTenthsUpdated", function(e) { oThis.applicationTick(timerToTime(oThis.timer)); });
    this.timer.addEventListener("targetAchieved", function(e) { oThis.applicationTimeout(); });

    $("#button").click(function() {
        oThis.click($(this));
    });
}

TimerController.prototype = {
    click: function(clickedObject) {
        if(!(clickedObject.hasClass("disabled"))) {
            clickedObject.addClass("disabled");
            clickedObject.find(".label").text("Printing...");

            clickedObject.find(".current").addClass("disabled");
            clickedObject.find(".next").width(0).removeClass("hidden").addClass("ongoing");
        }

        this.timer.start({
            countdown: true,
            startValues: [0, this.timerDuration, 0, 0, 0],
            precision: 'secondTenths'
        });
    }

   applicationTick: function (timeLeft) {
        var timePassed = this.timerDuration - timeLeft;
        var width = timePassed / this.timerDuration * 100;

        $("#button").find(".next").width(width + '%');
    }

   applicationTimeout: function () {
        $("#button").removeClass("disabled");
        $("#button").find(".label").text("Print");
        $("#button").find(".next").addClass("hidden");
        $("#button").find(".current").removeClass("disabled");
        $("#button").find(".next").width(100 + '%');
    }
};