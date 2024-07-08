document.querySelectorAll('input[name="payment-method"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        let paymentMethod = event.target.value;
        document.querySelectorAll('.payment-details').forEach((div) => {
            div.style.display = 'none';
        });
        if (paymentMethod === 'visa') {
            document.getElementById('visa-details').style.display = 'block';
        } else if (paymentMethod === 'mpesa') {
            document.getElementById('mpesa-details').style.display = 'block';
        } else if (paymentMethod === 'paypal') {
            document.getElementById('paypal-details').style.display = 'block';
        }
    });
});