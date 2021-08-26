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
    new IDEController();
});
var IDEController = /** @class */ (function (_super) {
    __extends(IDEController, _super);
    function IDEController() {
        var _this = _super.call(this, $("#ide")) || this;
        _this.dependencies = {};
        return _this;
    }
    IDEController.prototype.initState = function (newWindowState) {
        this.dependencies["workload_net"] = ["net_4", "net_4.5", "net_4.5.1", "net_4.5.2", "net_4.6", "net_4.6.1", "net_4.6.1_sdk"];
        this.dependencies["workload_desktop"] = ["sql_server_db", "sql_server_client", "class_designer", "code_map", "nuget", "static_analysis", "roslyn_compiler", "ms_build", "vc_tools", "vc_redistributable", "vc_cmake", "profiling", "intellitrace", "vs_core", "graphical_tools", "windows_sdk_17763"];
        this.dependencies["workload_uwp"] = ["net_4.5", "net_4.6.1_sdk", "net_native", "net_portable", "data_sources", "nuget", "static_analysis", "roslyn_compiler", "profiling", "intellitrace", "js_diagnostics", "c_sharp", "windows_sdk_17763"];
        this.dependencies["workload_asp"] = ["net_4", "net_4.5", "net_4.5.1", "net_4.5.2", "net_4.6", "net_4.6.1", "net_4.6.1_sdk", "net_portable", "azure_authoring", "cloud_explorer", "sql_server_db", "sql_server_client", "nuget", "static_analysis", "roslyn_compiler", "ms_build", "net_profiling", "intellitrace", "js_diagnostics"];
        this.dependencies["workload_azure"] = ["net_core_runtime", "net_4", "net_4.5", "net_4.5.1", "net_4.5.2", "net_4.6", "net_4.6.1", "net_4.6.1_sdk", "net_portable", "azure_authoring", "azure_compute", "cloud_explorer", "sql_server_db", "sql_server_client", "static_analysis", "roslyn_compiler", "ms_build", "net_profiling", "intellitrace", "js_diagnostics", "c_sharp"];
        this.dependencies["workload_python"] = ["data_sources", "python_3"];
        this.dependencies["workload_node"] = ["web_deploy", "nuget"];
        this.dependencies["workload_unity"] = ["net_4.7.1", "roslyn_compiler", "c_sharp", "unity", "unity_tools"];
        this.dependencies["workload_mobile"] = ["js_diagnostics"];
        this.dependencies["workload_linux"] = ["static_analysis", "vc_tools", "vs_core", "windows_sdk_17763"];
        newWindowState.getWidgetState("tab_workloads").selected = true;
        newWindowState.getWidgetState("tab_components").selected = false;
    };
    return IDEController;
}(Controller));
//# sourceMappingURL=controller.js.map