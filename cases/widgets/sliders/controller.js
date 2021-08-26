$(document).ready(function() {
    new SliderController(lookAndFeels);
});

function SliderController(lookAndFeels) {
    this.init($("#sliders"), lookAndFeels);
}

SliderController extends Controller();
SliderController.prototype.extendPrototype({
    handleEvent: function (identifier, event, newWindowState) {
        // Already handled for sliders
    }
});

/** OLD WORKING VERSION: */
/*var sliderValue = 0;
var sliderValueFeedforward = 0;
var sliderMin = 0;
var sliderMax = 100;
var sliderStep = 10;

function initSliderBehavior() {
    var container = $(".slider");

    $(".slider_set_value").click(function () {
        setSliderState(container, $(this).text());
        hideSliderFeedforward(container);
    });

    $(".slider_set_value").hover(function () {
        showSliderFeedforward(container, $(this).text());
    }, function () {
        hideSliderFeedforward(container);
    });

    setSliderState(container, sliderValue);

    container.click(function () {
        setSliderState(container, sliderValueFeedforward);
        hideSliderFeedforward(container);
    });

    container.hover(function() {
        showSliderFeedforward(container, sliderValue);
    }, function() {
        hideSliderFeedforward(container);
    });

    container.mousemove(function(e) {
        var parentOffset = container.find(".slider_bar").offset();
        var maxWidth = container.find(".slider_bar").innerWidth();
        var x = e.pageX - parentOffset.left;
        var idealValue = x / maxWidth * 100;

        var correctedValue = sliderMin;

        for(var i = sliderMin; i <= sliderMax; i+= sliderStep) {
            var lowerBound = i - sliderStep / 2;
            var upperBound = i + sliderStep / 2;

            if(idealValue < upperBound && idealValue > lowerBound) {
                correctedValue = i;
                break;
            }
        }

        correctedValue = Math.min(correctedValue, sliderMax);
        correctedValue = Math.max(correctedValue, sliderMin);

        sliderValueFeedforward = correctedValue;

        showSliderFeedforward(container, sliderValueFeedforward);
    });
}

function showSliderFeedforward(slider, value) {
    if(value == sliderValue) {
        hideSliderFeedforward(slider);
        return;
    }

    slider.find(".slider_button").addClass("feedforward_hide");
    slider.find(".slider_button_feedforward").removeClass("hidden");

    var percentage = value / (sliderMax - sliderMin);
    var maxWidth = slider.find(".slider_bar").innerWidth();
    var buttonOffset = slider.find(".slider_button_feedforward").outerWidth() / 2;

    var left = percentage * maxWidth;
    var leftOffset = left + buttonOffset;

    slider.find(".slider_button_feedforward").css("left", leftOffset + "px");
    slider.parent().find(".slider_value").text(value).addClass("feedforward_value");
}

function hideSliderFeedforward(slider) {
    slider.find(".slider_button").removeClass("feedforward_hide");
    slider.find(".slider_button_feedforward").addClass("hidden");
    slider.parent().find(".slider_value").text(sliderValue).removeClass("feedforward_value");
}

function setSliderState(slider, value) {
    sliderValue = value;
    var percentage = sliderValue / (sliderMax - sliderMin);
    var maxWidth = slider.find(".slider_bar").innerWidth();
    var buttonOffset = slider.find(".slider_button").outerWidth() / 2;

    var left = percentage * maxWidth;
    var leftOffset = left + buttonOffset;

    slider.find(".slider_filler").css("width", left + "px");
    slider.find(".slider_button").css("left", leftOffset + "px");
    slider.parent().find(".slider_value").text(value);
}
*/