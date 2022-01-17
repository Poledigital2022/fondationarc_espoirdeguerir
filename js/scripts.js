$(document).ready(function () {
  // var data = { "2013-01-21": 1, "2013-01-22": 7 };
  var nom = [];
  var montant = [];
  var size1 = 0;
  var startloop = 1;

  // for (var i in data)
  //   result.push([i, data[i]]);

  // console.log(JSON.stringify(result));
  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  readTextFile("./assets/liste2.json", function (text) {
    var data = JSON.parse(text);
    for (var i in data["prénom"]) {
      nom.push([i, data["prénom"][i]]);

      size1++;
    }
    for (var i in data["montant"]) {
      montant.push([i, data["montant"][i]]);
    }

    $("#prenom").text(nom[0][1]);
    $("#montant").text(montant[0][1]);
    setInterval(function () {
      if (startloop <= size1) {

        $("#prenom").text(nom[startloop - 1][1]);
        $("#montant").text(montant[startloop - 1][1]);
        startloop++;
      } else {
        startloop = 1;
      }
    }, 3000);
  });
  // const totalProps = montant);
  // size1 = totalProps;



  // *****************************************


  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $(".header_menu").toggleClass("active");
    $(".blue_border").toggleClass("active");
    $("header").toggleClass("active");
  });
  $(".header_menu a.acr").click(function () {
    $(".burger-menu").removeClass("menu-on");
    $(".header_menu").removeClass("active");
    $(".blue_border").removeClass("active");
    $("header").removeClass("active");
  });
  $(".btn-hide-menu").click(function () {
    $(".burger-menu").removeClass("menu-on");
    $(".header_menu").removeClass("active");
    $(".blue_border").removeClass("active");
  });
  $(".sec2_vod_play").click(function () {
    $(".sec2_vod").addClass("active");
    $('#videoId').get(0).play();
  });
  setInterval(function () { $(".player-time-duration").text("0:30"); }, 1000);
  document.getElementById('videoId').addEventListener('ended', myHandler, false);
  function myHandler(e) {
    // What you want to do after the event
    setTimeout(function () { $(".sec2_vod").removeClass("active"); }, 1000);
  }
  $('.section1_slider').slick({
    infinite: true,
    slidesToShow: 1,
    arrow: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true
  });
  $(".api_container button").click(function () {
    $(".api_holder").toggleClass("active");
  });
  //called when key is pressed in textbox
  $(".nbr").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

      return false;
    }
  });
  function changeUrl(target, url, amount, ratio) {
    const quotient = amount * ratio;
    $(target).attr('href', url + quotient);
  }
  $("#calc1").keyup(function (e) {
    const x = $(this).val();
    const y = x * 0.34;
    $("#calc2").val(y.toFixed(0));
    changeUrl("#calcurl", "https://donner.fondation-arc.org/espoirdeguerir/?amount=", x, 100);
  });
  var mnt = 0.34;
  var type2Mnt = false;
  $("#calc3").keyup(function (e) {
    const x = $(this).val();
    var y = x * mnt;
    if (type2Mnt == true && x > 66670) {
      // $("#calc3").val(50000);
      console.log(y);
      y = x - 50000;
      console.log(x);
      console.log(y);
      // return false;
    }
    if (type2Mnt == true) {
      changeUrl("#calcurl2", "https://donner.fondation-arc.org/espoirdeguerir2/?amount=", x, 100);
    } else {
      changeUrl("#calcurl2", "https://donner.fondation-arc.org/espoirdeguerir/?amount=", x, 100);
    }

    $("#calc4").val(y.toFixed(0));
  });
  $(".decline-button").click(function () {
    $("#cookie").fadeOut(800);
  });
  // calc-btn
  $(".calc-btn").click(function () {
    $(".calc_holder").toggleClass("active");
    $(".blue_border").toggleClass("active");
  });
  $(".close_calc").click(function () {
    $(".calc_holder").removeClass("active");
    $(".blue_border").removeClass("active");
  });

  $("#changer1").click(function () {
    mnt = 0.34;
    $("#changer1").addClass("active");
    $("#changer2").removeClass("active");
    $("#calc3").val("");
    $("#calc4").val("");
    $("#str").text("66 %");
    type2Mnt = false;
    $("#calcurl2").attr('href', 'https://donner.fondation-arc.org/espoirdeguerir/');

  });
  $("#changer2").click(function () {
    $("#changer2").addClass("active");
    $("#changer1").removeClass("active");
    mnt = 0.25;
    $("#calc3").val("");
    $("#calc4").val("");
    $("#str").text("75 %");
    type2Mnt = true;
    $("#calcurl2").attr('href', 'https://donner.fondation-arc.org/espoirdeguerir2/');
  });
  $("#content-9").mCustomScrollbar({
    scrollButtons: { enable: true, scrollType: "stepped" },
    keyboard: { scrollType: "stepped" },
    // mouseWheel: { scrollAmount: 188 },
    // theme: "rounded-dark",
    theme: "light-thick",
    // autoExpandScrollbar: true,
    // snapAmount: 188,
    // snapOffset: 65
  });
  $("#content-10").mCustomScrollbar({
    scrollButtons: { enable: true, scrollType: "stepped" },
    keyboard: { scrollType: "stepped" },
    // mouseWheel: { scrollAmount: 188 },
    // theme: "rounded-dark",
    theme: "light-thick",
    // autoExpandScrollbar: true,
    // snapAmount: 188,
    // snapOffset: 65
  });
  $(".content-2").mCustomScrollbar({

  });

  $('.sec7_content_box2 button').click(function () {
    const d = $(this).data("nmu");
    $(this).toggleClass("active");
    // $('.sec7_content_box2 button').not(this).removeClass("active")
    $('.sec7_content_box2 p[data-nmu=' + d + ']').slideToggle("slow");
    // $('.sec7_content_box2 p').not($('.sec7_content_box2 p[data-nmu=' + d + ']')).slideUp("slow");
  });



  var dx = false;
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  $(window).on("resize scroll", function () {
    //Code here
    if ($(".section5 h2 span").isInViewport() && dx == false) {
      dx = true;
      setTimeout(function () {
        function numberWithSpaces(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        $('.counter').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');

          $({ countNum: $this.text() }).animate({
            countNum: countTo
          },
            {
              duration: 3000,
              easing: 'linear',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(numberWithSpaces(this.countNum));
              }
            });
        });
      }, 500);
    }
  });
  // Possible improvements:
  // - Change timeline and volume slider into input sliders, reskinned
  // - Change into Vue or React component
  // - Be able to grab a custom title instead of "Music Song"
  // - Hover over sliders to see preview of timestamp/volume change

  const audioPlayer = document.querySelector(".audio-player");
  const audio = new Audio(
    "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
  );
  //credit for song: Adrian kreativaweb@gmail.com

  // console.dir(audio);

  audio.addEventListener(
    "loadeddata",
    () => {
      audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
        audio.duration
      );
      audio.volume = .75;
    },
    false
  );

  //click on timeline to skip around
  const timeline = audioPlayer.querySelector(".timeline");
  timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false);

  //click volume slider to change volume
  const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
  }, false)

  //check audio percentage and update time accordingly
  setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);

  //toggle between playing and pausing on button click
  const playBtn = audioPlayer.querySelector(".controls .toggle-play");
  playBtn.addEventListener(
    "click",
    () => {
      if (audio.paused) {
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
        audio.play();
      } else {
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        audio.pause();
      }
    },
    false
  );

  audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  });

  //turn 128 seconds into 2:08
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
  $(".quantity1").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      //display error message

      return false;
    }
  });

});