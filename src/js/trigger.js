const trigger = (originalText) => {
  originalText = originalText.toLowerCase();
  let triggeredText = "";
  let upCount = 0;
  let downCount = 0;
  const maxSameCase = 2;
  for (let i = 0; i < originalText.length; i++) {
    if (downCount === maxSameCase) {
      triggeredText = triggeredText.concat(originalText.charAt(i).toUpperCase());
      upCount++;
      downCount = 0;
    } else if (upCount === maxSameCase){
      triggeredText = triggeredText.concat(originalText.charAt(i));
      downCount++;
      upCount = 0;
    } else {
      if (Math.round(Math.random())) {
        triggeredText = triggeredText.concat(originalText.charAt(i).toUpperCase());
        upCount++;
        downCount = 0
      } else {
        triggeredText = triggeredText.concat(originalText.charAt(i));
        downCount++;
        upCount = 0;
      }
    }
  }
  return triggeredText;
}

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
}
