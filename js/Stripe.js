<script>
(function() {
  var stripe = Stripe('pk_test_M8uI0j5zibuWxv4vo1xZvv8d000wnsTF0c');

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
    });
  });
})();
(function() {
  var stripe = Stripe('pk_test_M8uI0j5zibuWxv4vo1xZvv8d000wnsTF0c');

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
    });
  });
})();
</script>