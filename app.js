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
  