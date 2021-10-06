function getUserName() {
    //e.preventDefault();       //?
    var querryStr = "https://devopskarl-rwdtppcoza-uc.a.run.app/admin";
    console.log(querryStr);

    $.getJSON(querryStr, function (response) {
        var email = response.e_mail;
        var u_id = response.user_id;
        // console.log(email);
        // console.log(u_id);


      var emailStr =  "https://devopskarl-rwdtppcoza-uc.a.run.app/user/by-email?email=" + email;
      //console.log(emailStr);
      $.getJSON(emailStr, function (response) {
          //console.log(response[0].first_name);

          $("#user").html(`<strong>`+ response[0].first_name + " " + response[0].last_name + `</strong>` + " (" + email + ")!");
      });
    });
  };


function logOut() {
  window.location.href = '/logout';
};

getUserName();