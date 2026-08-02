gsap.registerPlugin(ScrambleTextPlugin);

  const scrambleTargets = [
    { id: "#intro-head", text: "Hi, I am Nobel!", chars: "upperAndLowerCase",  },
    { id: "#intro-main", text: "A student from Chittagong, Bangladesh with an interest in drawing and coding.", chars: "upperAndLowerCase" },
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
