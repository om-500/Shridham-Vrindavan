 document.getElementById("form").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const response = document.getElementById("form-response");

      if (name && email && message) {
        response.style.color = "green";
        response.textContent = "Thank you for contacting us, " + name + "! We will get back to you soon.";
        document.getElementById("form").reset();
      } else {
        response.style.color = "red";
        response.textContent = "Please fill in all fields.";
      }
    });