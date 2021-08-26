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
$(document).ready(function () {
    new LoginController();
});
var LoginController = /** @class */ (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        return _super.call(this, $("#login")) || this;
    }
    LoginController.prototype.initState = function (newWindowState) {
        newWindowState.getWidgetState("login_button").enabled = true;
        newWindowState.getWidgetState("logout_button").enabled = false;
        newWindowState.getWidgetState("send_and_reset").enabled = false;
        newWindowState.getWidgetState("message").enabled = false;
        newWindowState.getWidgetState("message").value = "";
    };
    LoginController.prototype.loginButtonClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("login_button").enabled = false;
        newWindowState.getWidgetState("logout_button").enabled = true;
        newWindowState.getWidgetState("message").enabled = true;
    };
    LoginController.prototype.logoutButtonClicked = function (event, newWindowState) {
        this.initState(newWindowState);
    };
    LoginController.prototype.messageValueChanged = function (event, newWindowState) {
        var value = "" + newWindowState.getWidgetState("message").value;
        newWindowState.getWidgetState("send_and_reset").enabled = value.length > 0;
    };
    LoginController.prototype.sendAndResetClicked = function (event, newWindowState) {
        //this.sendMessage(value);
        newWindowState.getWidgetState("message").value = "";
        newWindowState.getWidgetState("send_and_reset").enabled = false;
    };
    LoginController.prototype.previewSendAndResetClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("message").value = "";
        newWindowState.getWidgetState("send_and_reset").enabled = false;
    };
    return LoginController;
}(Controller));
//# sourceMappingURL=controller.js.map