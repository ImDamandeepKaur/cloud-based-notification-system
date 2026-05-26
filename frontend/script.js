// script.js


// Toggle Email / SMS Fields

document.getElementById("type").addEventListener("change", function () {

    const type = this.value;

    if(type === "email") {

        document.getElementById("emailGroup").style.display = "block";

        document.getElementById("phoneGroup").style.display = "none";

    } else {

        document.getElementById("emailGroup").style.display = "none";

        document.getElementById("phoneGroup").style.display = "block";
    }
});




// Send Notification

async function sendNotification() {

    const message = document.getElementById("message").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const type = document.getElementById("type").value;

    const resultBox = document.getElementById("result");

    const button = document.querySelector("button");



    // Validation

    if (!message) {

        resultBox.innerText = "Please enter a message";

        resultBox.style.color = "#ffcc00";

        return;
    }


    if(type === "email" && !email){

        resultBox.innerText = "Please enter email address";

        resultBox.style.color = "#ffcc00";

        return;
    }


    if(type === "sms" && !phone){

        resultBox.innerText = "Please enter phone number";

        resultBox.style.color = "#ffcc00";

        return;
    }



    // Loading State

    button.disabled = true;

    button.innerText = "Sending...";

    resultBox.innerText = "Sending notification...";

    resultBox.style.color = "#ffffff";



    const data = {

        message,
        email,
        phone,
        type
    };



    try {

        const response = await fetch(

            "https://gn2scoy3g7.execute-api.ap-south-1.amazonaws.com/notify",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }
        );



        const result = await response.json();



        // Success

        resultBox.innerText =

            result.message || "Notification Sent Successfully";

        resultBox.style.color = "#00ff99";



        // Clear Fields

        document.getElementById("message").value = "";

        document.getElementById("email").value = "";

        document.getElementById("phone").value = "";



    } catch (error) {

        console.log(error);



        resultBox.innerText =

            "Error sending notification";

        resultBox.style.color = "#ff4d4d";



    } finally {

        button.disabled = false;

        button.innerText = "Send Notification";
    }
}