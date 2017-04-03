$("#loginButton").click(function() {
    var login = $("[name='login']").val();
    var password = $("[name='password']").val();
    //if input value is empty do not submit
    if( !login || !password ) {
        $("[name='login']").addClass("empty-value");
        $("[name='password']").addClass("empty-value");
        return;
    } 
    $.ajax({
        url: "/login",
        method: "POST",
        data: {
            "login": login,
            "password": password
        },
    }).then(function(res) {
        var response = res.split(" "),
            alert = $('div[role="alert"]');

       if (response[0] === "200") {
           alert.removeClass('alert-danger show');
           alert.addClass('alert-success show')
           .text("Hello " + response[2] + "!\n" + "Authorization success.");
       } else if (response[0] === "401") {
           alert.removeClass('alert-success show');
           alert.addClass('alert-danger show')
           .text("Authorization failed. Please check your login and password.");
       }
    })
});