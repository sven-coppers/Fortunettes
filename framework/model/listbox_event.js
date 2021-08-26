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
var ListboxEvent = /** @class */ (function (_super) {
    __extends(ListboxEvent, _super);
    function ListboxEvent(identifier, action, effect, index, event, handlerRequired) {
        if (handlerRequired === void 0) { handlerRequired = false; }
        var _this = _super.call(this, identifier, action, effect, handlerRequired) || this;
        _this.index = index;
        _this.event = event;
        return _this;
    }
    return ListboxEvent;
}(GUIEvent));
//# sourceMappingURL=listbox_event.js.map