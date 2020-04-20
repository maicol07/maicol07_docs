const plans = {
    basic: 'P-1FN31054DU650140EL2HCVHA',
    medium: 'P-3ML46717470701928L2G6LQQ',
    advanced: 'P-3HG35635KA7576848L2HCVYQ'
}
forEach(plans, (id, name) => {
    paypal.Buttons({
        createSubscription: function(data, actions) {
            return actions.subscription.create({
                'plan_id': id
            });
        },

        onApprove: function(data, actions) {
            Swal.fire({
                title: "Success!",
                html: `You have successfully subscribed to the PRO ${name.toUpperCase()} PLAN.<br>You can enable PRO features by adding your subscription id: <b>${data.subscriptionID}</b>`,
                icon: "success"
            });
        }
    }).render('#paypal-button-pro-' + name);
})