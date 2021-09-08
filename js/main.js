$(document).ready(function () {
    new Typed('.firstText', {
        strings: ["Hi, I'm Safa 👋"],
        typeSpeed: 20,
        startDelay: 900,
        showCursor: false
      });
    }),
    new Typed('.personalInfo', {
        strings: ["I'm a Frontend Developer (Well at least trying to be!).<br> I love to make web and mobile applications!👨‍💻"],
        typeSpeed: 20,
        startDelay: 1800,
        showCursor: false
    }),
    new Typed('.mediaInfoStart', {
        strings: ["You can check out my"],
        typeSpeed: 30,
        startDelay: 5500,
        showCursor: false
    }),
    new Typed('.mediaInfoEnd', {
        strings: ["By clicking the icon down below"],
        typeSpeed: 20,
        startDelay: 7000,
        showCursor: false
    }),
    new Typed('.mailInfo', {
        strings: ["Get in touch <a href='mailto:tsafaelmali@gmail.com'>tsafaelmali@gmail.com</a><span class='cursor'>_</span>"],
        typeSpeed: 20,
        startDelay: 8500,
        showCursor: false
    });

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-138208404-1");