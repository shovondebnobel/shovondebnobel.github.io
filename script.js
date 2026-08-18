document.addEventListener('DOMContentLoaded', function () {

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  gsap.registerPlugin(ScrambleTextPlugin);

  const scrambleTargets = [
    { id: "#intro-head", text: "Hi! I am Nobel", chars: "upperAndLowerCase" },
    { id: "#intro-main", text: "A student from Chittagong, Bangladesh with an interest in drawing and coding.", chars: "upperAndLowerCase" },
    { id: "#title", text: "Shovon Deb Nobel", chars: "upperAndLowerCase" },
    { id: "#ipa", text: "/ʃobʱɔn d̪eb nobel/", chars: "upperAndLowerCase" },
    { id: "#desc-line1", text: "Student", chars: "upperAndLowerCase" },
    { id: "#desc-line2", text: "Bakalia Government College", chars: "upperAndLowerCase" }
  ];

  function playIntro() {
    const tl = gsap.timeline();

    scrambleTargets.forEach((t, i) => {
      tl.to(t.id, {
        duration: t.id.includes("tag") ? 0.6 : 1.1,
        scrambleText: {
          text: t.text,
          chars: t.chars,
          revealDelay: 0.2,
          speed: 0.1
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
    container.classList.add('email-box');
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
      }, 2000);
      e.clearSelection();
    });
  }

  var contactToggle = document.getElementById('contactToggle');
  var contactPanel = document.getElementById('contactPanel');

  if (contactToggle && contactPanel) {
    contactToggle.addEventListener('click', function () {
      var isOpen = contactPanel.classList.toggle('open');
      contactToggle.classList.toggle('open');
      contactToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  var form = document.getElementById('contactForm');
  var submitBtn = document.getElementById('submitBtn');
  var responseMessage = document.getElementById('responseMessage');

  if (form) {
    StaticForms.attach(form, {
      onBeforeSubmit: function () {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        responseMessage.className = 'message';
      },
      onSuccess: function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send again';
        responseMessage.textContent = 'Your message has been sent.';
        responseMessage.className = 'message success show';
        form.reset();
      },
      onError: function (error) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send again';
        responseMessage.textContent = 'Something went wrong. Please try again.';
        responseMessage.className = 'message error show';
      }
    });
  }

});
