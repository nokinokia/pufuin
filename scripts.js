document.getElementById("copy-button").addEventListener("click", function() {
    var copyText = document.getElementById("copy-text").textContent;
    navigator.clipboard.writeText(copyText).then(function() {
      alert("Text copied to clipboard");
    }, function() {
      alert("Failed to copy text");
    });
  });
  