
document.getElementById("login-btn").addEventListener("click", function () {
     // 1- get the mobile number input
     const mobileNumberInput = document.getElementById("input-number");
     const contactNumber = mobileNumberInput.value;
     // console.log(contactNumber);

     // 2- get the pin number input
     const pinInput = document.getElementById("input-pin");
     const pinNumber = pinInput.value;
     // console.log(pinNumber);

     // 3- validate the mobile number and pin
     if (contactNumber == "0123456789" && pinNumber == "1234") {
          // 3-1 if the crroct pin and mobile number
          alert("Login successful");

          // redirect to the home page

          // window.location.replace("/home.html");
          window.location.assign("/home.html");
     }
     else {
          // 3-2 if the wrong pin or mobile number
          alert("Invalid mobile number or pin");
          return;
     }
});


