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
    new WebShopController();
});
var WebShopController = /** @class */ (function (_super) {
    __extends(WebShopController, _super);
    function WebShopController() {
        return _super.call(this, $("#webshop")) || this;
    }
    WebShopController.prototype.initState = function (newWindowState) {
        this.discountTriggered = false;
        this.productsPrice = 549.90;
        this.validCoupon = "FREESHIPPING";
        newWindowState.getWidgetState("checkout_flow").selectTab("tab_cart");
        newWindowState.getWidgetState("billing_home").selected = true;
        newWindowState.getWidgetState("shipping_home").selected = true;
        newWindowState.getWidgetState("shipping_standard").selected = true;
        newWindowState.getWidgetState("payment_credit").selected = true;
        newWindowState.getWidgetState("coupon").value = this.validCoupon;
        this.updateDependencies(newWindowState, false);
    };
    WebShopController.prototype.proceedAddressClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("checkout_flow").selectTab("tab_address");
    };
    WebShopController.prototype.proceedShippingClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("checkout_flow").selectTab("tab_shipping");
    };
    WebShopController.prototype.proceedPaymentClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("checkout_flow").selectTab("tab_payment");
    };
    WebShopController.prototype.proceedOverviewClicked = function (event, newWindowState) {
        newWindowState.getWidgetState("checkout_flow").selectTab("tab_overview");
    };
    WebShopController.prototype.couponValueChanged = function (event, newWindowState) {
        var validCoupon = newWindowState.getWidgetState("coupon").value === this.validCoupon;
        newWindowState.getWidgetState("apply_coupon").enabled = validCoupon;
    };
    WebShopController.prototype.billingHomeSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.billingWorkSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.shippingHomeSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.shippingWorkSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.shippingExpressSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.shippingStandardSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.paymentCreditSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.paymentOnlineSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.paymentBankSelected = function (event, newWindowState) {
        this.updateDependencies(newWindowState, this.discountTriggered);
    };
    WebShopController.prototype.applyCouponClicked = function (event, newWindowState) {
        if (newWindowState.getWidgetState("coupon").value === this.validCoupon) {
            newWindowState.getWidgetState("shipping_standard").selected = true;
            newWindowState.getWidgetState("shipping_express").selected = false;
            this.discountTriggered = true;
            this.updateDependencies(newWindowState, this.discountTriggered);
        }
    };
    WebShopController.prototype.previewApplyCouponClicked = function (event, newWindowState) {
        if (newWindowState.getWidgetState("coupon").value === this.validCoupon) {
            newWindowState.getWidgetState("shipping_standard").selected = true;
            newWindowState.getWidgetState("shipping_express").selected = false;
            this.updateDependencies(newWindowState, true);
        }
    };
    WebShopController.prototype.updateDependencies = function (newWindowState, usingCoupon) {
        var estimatedDate = 0.0;
        var shippingCosts = 0.0;
        var paymentCosts = 0.0;
        var grandTotal = 0.0;
        var hawaii = newWindowState.getWidgetState("shipping_work").selected;
        var express = newWindowState.getWidgetState("shipping_express").selected;
        var bank = newWindowState.getWidgetState("payment_bank").selected;
        var credit = newWindowState.getWidgetState("payment_credit").selected;
        var online = newWindowState.getWidgetState("payment_online").selected;
        if (hawaii) {
            estimatedDate = express ? 5 : 14;
        }
        else {
            estimatedDate = express ? 3 : 10;
        }
        if (bank) {
            estimatedDate += 3;
        }
        if (usingCoupon) {
            shippingCosts = express ? 30 : 0;
        }
        else {
            shippingCosts = express ? 30 : 15;
        }
        if (bank) {
            paymentCosts = 5.00;
        }
        else if (credit) {
            paymentCosts = this.productsPrice * 0.05;
        }
        else if (online) {
            paymentCosts = this.productsPrice * 0.02;
        }
        grandTotal = this.productsPrice + paymentCosts + shippingCosts;
        newWindowState.getWidgetState("delivery_date").value = estimatedDate;
        newWindowState.getWidgetState("shipping_costs").value = shippingCosts.toFixed(2);
        newWindowState.getWidgetState("transaction_fee").value = paymentCosts.toFixed(2);
        newWindowState.getWidgetState("total_price").value = grandTotal.toFixed(2);
    };
    return WebShopController;
}(Controller));
//# sourceMappingURL=controller.js.map