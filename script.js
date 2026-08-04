document.addEventListener('DOMContentLoaded', function () {
  var mail = 'gmail.com';
  mail = 'sdebnobel' + '@' + mail;

  var container = document.getElementById('emailContainer');
  if (container) {
    container.insertAdjacentHTML('beforeend',
      '<a href="mailto:' + mail + '">' + mail + '</a>' +
      '<button id="copyBtn" class="copy-btn" data-clipboard-text="' + mail + '" title="Copy email">' +
      '<i class="fa-regular fa-copy icon-copy"></i>' +
      '<i class="fa-solid fa-check icon-copied" style="display:none;"></i>' +
      '</button>'
    );

    var clipboard = new ClipboardJS('#copyBtn');
    clipboard.on('success', function (e) {
      var btn = e.trigger;
      btn.querySelector('.icon-copy').style.display = 'none';
      btn.querySelector('.icon-copied').style.display = 'inline';
      setTimeout(function () {
        btn.querySelector('.icon-copy').style.display = 'inline';
        btn.querySelector('.icon-copied').style.display = 'none';
      }, 1500);
      e.clearSelection();
    });
  }
});
