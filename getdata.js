function getAccessToken() {
  var apiURL = "https://nlehub.kemenkeu.go.id/auth-amws/v1/user/login";
  var requestData = {
    username: "maccaferri",
    password: "Maccaferri2023",
  };
  $.ajax({
    type: "POST",
    url: apiURL,
    // crossDomain: false,
    // method:'post',
    data: JSON.stringify(requestData),
    headers: {
      "Access-Control-Allow-Origin": "*.*",
      "Access-Control-Allow-Methods": "*.*",
      "Content-Type": "application/json",
    },
    dataType: "json",
    success: function (response) {
      var token = response["item"]["access_token"];
      console.log("Token: " + token);
      localStorage.setItem("access_token", token);
    },
    error: function (xhr, status, error) {
      localStorage.setItem("access_token", "");
      // console.error('Error: ' + status + ' - ' + error);
    },
  });
}
