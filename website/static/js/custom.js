const plans = {
    basic: 'P-54M52379YS4428036L2G6KII',
    medium: 'P-3ML46717470701928L2G6LQQ',
    advanced: 'P-7DB01938NB262832FL2G6L6Y'
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