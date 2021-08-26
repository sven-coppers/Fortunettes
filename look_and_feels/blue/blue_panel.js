var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BluePanel = /** @class */ (function (_super) {
    __extends(BluePanel, _super);
    function BluePanel(identifier, contents, container, controller, widgetFactory, defaultAction, mode) {
        var _this = _super.call(this, identifier, contents, container, controller, mode, Action.NONE) || this;
        _this.controller = controller;
        return _this;
    }
    BluePanel.prototype.initHTML = function (container, label) {
        var newHTML = '<div class="panel" id="' + this.identifier + '_blue">' + label + '</div>';
        this.container = $(newHTML);
        container.replaceWith(this.container);
    };
    BluePanel.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    BluePanel.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    BluePanel.prototype.previewEnabled = function (enabled) {
        if (enabled && this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_enabled");
        }
        else if (!enabled && !this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_disabled");
        }
    };
    BluePanel.prototype.setVisible = function (visible) {
        this.container.toggleClass("hidden", !visible);
    };
    BluePanel.prototype.previewVisible = function (visible) {
        console.log("TODO: implement previewVisible() in all buttons");
    };
    BluePanel.prototype.isVisible = function () {
        return !this.container.hasClass("hidden");
    };
    BluePanel.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    BluePanel.prototype.previewSelected = function (selected) {
        if (this.container.hasClass("selected") && !selected) {
            this.container.addClass("feedforward_deselected");
        }
        else if (!(this.container.hasClass("selected")) && selected) {
            this.container.addClass("feedforward_selected");
        }
    };
    BluePanel.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    BluePanel.prototype.removeNextStatePreview = function () {
        this.container.removeClass("feedforward_enabled feedforward_disabled");
        this.container.removeClass("feedforward_selected feedforward_deselected");
    };
    BluePanel.prototype.removePreviewEnabled = function () {
        // TODO
    };
    return BluePanel;
}(Panel));
//# sourceMappingURL=blue_panel.js.map