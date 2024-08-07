if (!navigator.clipboard) {
    document.getElementById('invite-text').select();
    document.execCommand("copy"); // fallback
  } else {
    navigator.clipboard.writeText(copy_text);
  }
  alert('Copied to Clipboard!');


