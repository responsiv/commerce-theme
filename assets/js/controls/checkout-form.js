;(function(){

    oc.registerControl('checkout-form', class extends oc.ControlBase {
        connect() {
            this.listen('change', '[name=city],[name=zip],[name=state_id],[name=country_id]', this.onChangeContactDetails);
            this.listen('change', '[name=shipping_method]', this.onChangeShippingMethod);
            this.listen('change', '[name=payment_method]', this.onChangePaymentMethod);
            this.listen('change', '[name=address_book_id]', this.onChangeAddressBook);
        }

        disconnect() {
        }

        onChangeAddressBook() {
            oc.request(this.element, 'onAction', {
                data: {
                    post_address_book_preset: true,
                    skip_validation: true
                },
                update: {
                    'shop/checkout-step-details': '#shopCheckoutStepDetails',
                    'shop/checkout-step-shipping': '#shopCheckoutStepShipping',
                    'shop/checkout-step-payment': '#shopCheckoutStepPayment',
                    'shop/order-summary': '#shopCheckoutOrderSummary'
                }
            });
        }

        onChangeContactDetails() {
            oc.request(this.element, 'onAction', {
                data: {
                    post_contact_details: true,
                    skip_validation: true
                },
                update: {
                    'shop/checkout-step-shipping': '#shopCheckoutStepShipping',
                    'shop/checkout-step-payment': '#shopCheckoutStepPayment',
                    'shop/order-summary': '#shopCheckoutOrderSummary'
                }
            });
        }

        onChangeShippingMethod() {
            oc.request(this.element, 'onAction', {
                data: {
                    post_shipping_method: true,
                    skip_validation: true
                },
                update: {
                    'shop/checkout-step-payment': '#shopCheckoutStepPayment',
                    'shop/order-summary': '#shopCheckoutOrderSummary'
                }
            });
        }

        onChangePaymentMethod() {
            oc.request(this.element, 'onAction', {
                data: {
                    post_payment_method: true,
                    skip_validation: true
                },
                update: {
                    'shop/payment-form': '#shopPaymentForm',
                    'shop/order-summary': '#shopCheckoutOrderSummary'
                }
            });
        }
    });

})();
