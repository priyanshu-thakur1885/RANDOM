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
  
    // ✅ Correct Upgrade to Premium
    $("#upgradeBtn").click(function() {
      var options = {
        "key": "rzp_test_8S8K6yWuIvyrZb", // Your Razorpay Test Key
        "amount": 19900, // 19900 paise = ₹199
        "currency": "INR",
        "name": "QuickNotes Premium",
        "description": "Unlock Premium Features",
        "image": "https://yourdomain.com/logo.png", // Optional logo
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
});
    
    
        // Delete Note
        $(document).on("click", ".note", function() {
        $(this).remove();
        saveNotes();
        });
    
        // Clear All Notes
        $("#clearAll").click(function() {
        $("#notesList").empty();
        saveNotes();
        });
