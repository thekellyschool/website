<script>
(function() {
  var stripe = Stripe('pk_live_Oo87SuZtCdoTr1K0dM5j0P64000lqVFPt2');

  var checkoutButton = document.getElementById('checkout-button-sku_GNn0CpLfe6sPzk');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{sku: 'sku_GNn0CpLfe6sPzk', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//thekellyschool.com/success',
      cancelUrl: window.location.protocol + '//thekellyschool.com/canceled',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    })}
  });
})();
(function() {
  var stripe = Stripe('pk_live_Oo87SuZtCdoTr1K0dM5j0P64000lqVFPt2');

  var checkoutButton = document.getElementById('checkout-button-sku_GNn19uy9ZUkAvQ');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{sku: 'sku_GNn19uy9ZUkAvQ', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//thekellyschool.com/success',
      cancelUrl: window.location.protocol + '//thekellyschool.com/canceled',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    })};
  });
})();
</script>