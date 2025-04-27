$(document).ready(function() {
    // Load existing notes
    if (localStorage.getItem("notes")) {
      $("#notesList").html(localStorage.getItem("notes"));
    }
  
    // Create Note
    $("#createNote").click(function() {
      const noteText = prompt("Enter your note:");
      if (noteText) {
        $("#notesList").append(`<div class="note">${noteText}</div>`);
        saveNotes();
      }
    });
  
    // Save Notes
    function saveNotes() {
      localStorage.setItem("notes", $("#notesList").html());
    }
  
    // Upgrade to Premium
    $("#upgradeBtn").click(function() {
      window.location.href = "premium.html";
    });
  });
  

  $("#upgradeBtn").click(function() {
    var options = {
      "key": "rzp_test_ABC123xyz456", // Replace with your Razorpay Test Key ID
      "amount": 19900, // Amount is in paise (19900 paise = ₹199)
      "currency": "INR",
      "name": "QuickNotes Premium",
      "description": "Unlock Premium Features",
      "image": "https://yourdomain.com/logo.png", // Optional
      "handler": function (response){
          alert("Payment Successful! 🎉");
          // Unlock Premium
          localStorage.setItem("isPremium", "true");
          window.location.href = "premium.html";
      },
      "prefill": {
          "name": "",
          "email": "",
          "contact": ""
      },
      "theme": {
          "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  });
  