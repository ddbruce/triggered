const trigger = (originalText) => {
  originalText = originalText.toLowerCase();
  let triggeredText = "";
  let end = [];
  for (let i = 0; i < originalText.length; i++) {
    if (/[^a-zA-Z0-9]/.test(originalText[i])) {
      triggeredText += originalText[i];
      continue
    }
    if (i === 0 || i === 1 || /[a-z]/.test(triggeredText[end[end.length - 1]]) !== /[a-z]/.test(triggeredText[end[end.length - 2]])) {
      triggeredText += Math.round(Math.random()) ? originalText[i].toUpperCase() : originalText[i];
    } else if (/[a-z]/.test(triggeredText[end[end.length - 1]])) {
      triggeredText += originalText[i].toUpperCase();
    } else {
      triggeredText += originalText[i];
    }
    end.push(i)
  }
  return triggeredText;
};

window.onload = () => {
  document.getElementById("triggeredText").placeholder = trigger("...and receive triggered snowflake text here");
  document.getElementById("triggered").addEventListener("click", () => {
    document.getElementById("triggeredText").value = trigger(document.getElementById("originalText").value);
    document.getElementById("triggeredText").select();
    document.getElementById("triggeredText").setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("alert").innerHTML = `
    <div class="alert alert-dark alert-dismissible fade show" role="alert">
    Your <strong>triggered text</strong> has been <strong>copied</strong>!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>`
  });
};
