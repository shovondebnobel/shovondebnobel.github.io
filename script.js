document.addEventListener('DOMContentLoaded', function () {
gsap.registerPlugin(ScrambleTextPlugin);

  const scrambleTargets = [
    { id: "#intro-head", text: "I am Nobel!", chars: "upperAndLowerCase"},
    { id: "#intro-main", text: "A student from Chittagong, Bangladesh with an interest in drawing and coding.", chars: "upperAndLowerCase"},
    { id: "#title", text: "Shovon Deb Nobel", chars: "upperAndLowerCase"},
    { id: "#ipa", text: "/ʃobʱɔn d̪eb nobel/", chars: "upperAndLowerCase"},
    { id: "#desc-line1", text: "Student", chars: "upperAndLowerCase"},
    { id: "#desc-line2", text: "Bakalia Government College", chars: "upperAndLowerCase"}
  ];
  function playIntro(){
    const tl = gsap.timeline();

    scrambleTargets.forEach((t, i) => {
      tl.to(t.id, {
        duration: t.id.includes("tag") ? 0.6 : 1.1,
        scrambleText: {
          text: t.text,
          chars: t.chars,
          revealDelay: 0.2,
          speed: 0.2
        },
        ease: "none"
      }, t.id.includes("tag") ? "-=0.35" : i === 0 ? 0 : "-=0.4");
    });
    tl.from(".replay", { opacity: 0, y: 10, duration: .4 }, "-=0.2");
    return tl;
  }
playIntro();


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
