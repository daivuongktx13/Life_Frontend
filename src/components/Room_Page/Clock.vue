<template>
  <div class="flex flex-row-reverse items-center">
    <div>
      <button
        id="trigger-clock"
        class="w-16 h-16 rounded-full"
        style="background-color: rgb(35, 41, 49)"
      >
        <i class="fa-solid fa-xl fa-stopwatch text-white" />
      </button>
    </div>
    <div id="pomodoro">
      <div id="clock">
        <div id="timer">
          <div id="title">Timer</div>
          <div id="countdown">
            <span id="minutes">30</span>
            <span id="seconds">00</span>
          </div>
          <div
            id="controls"
            clas
            s="reset"
          >
            <div
              id="start"
              class="scale-125 text-green-500"
            ><i class="fas fa-play" /> Start</div>
            <div
              id="pause"
              class="scale-125 text-yellow-500"
            ><i class="fas fa-pause" /> Pause</div>
            <div
              id="reset"
              class="scale-125 text-emerald-100"
            ><i class="fas fa-sync-alt" /> Reset</div>
          </div>
        </div>
      </div>
      <div id="options">
        <div id="session">
          <i
            id="incrSession"
            class="fas fa-angle-double-up"
          />
          <span class="option-title">Session</span>
          <input
            id="sessionInput"
            type="number"
            value="30"
            max="60"
            min="5"
          >
          <i
            id="decrSession"
            class="fas fa-angle-double-down"
          />
        </div>
        <div id="break">
          <i
            id="incrBreak"
            class="fas fa-angle-double-up"
          />
          <span class="option-title">Break</span>
          <input
            id="breakInput"
            type="number"
            value="5"
            max="10"
            min="1"
          >
          <i
            id="decrBreak"
            class="fas fa-angle-double-down"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  name: "Clock",
  data(){
    return {
    }
  },
  created() {
    this.setUpClock();
  },
  mounted() {
    $("#pomodoro").hide();
    $("#trigger-clock").click(function(){
          if($('#pomodoro').is(':hidden') == true){
            $("#pomodoro").show('slow');
            $("#volume-controller").hide("fast");
            $("#profileMenu").hide("fast");
            if ($(window).width() < 428) {
              $("#space-list").hide("fast");
            }
          } else {
            $("#pomodoro").hide("fast");
          }
        });
  },
  methods: {
    setUpClock() {
      $(() => {
        let $audio = $("audio"), // from https://tide.moreless.io/en/
          $theme = $(".theme"),
          $title = $("#title"),
          $controls = $("#controls"),
          $options = $("#options"),
          $minutes = $("#minutes"),
          $seconds = $("#seconds"),
          $start = $("#start"),
          $pause = $("#pause"),
          $reset = $("#reset"),
          $incrSession = $("#incrSession"),
          $sessionInput = $("#sessionInput"),
          $decrSession = $("#decrSession"),
          $incrBreak = $("#incrBreak"),
          $breakInput = $("#breakInput"),
          $decrBreak = $("#decrBreak"),
          breakLength = 5 * 60,
          breakMax = 10,
          breakMin = 1,
          sessionLength = 30 * 60,
          sessionMax = 60,
          sessionMin = 5,
          sessionNum = 0,
          countdown,
          countType,
          remainingTime = sessionLength;
        init();
        function init() {
          $audio.prop("volume", 0);
          $incrSession.click(() => incrSession());
          $decrSession.click(() => decrSession());
          $incrBreak.click(() => incrBreak());
          $decrBreak.click(() => decrBreak());
          $sessionInput.on("change", (e) => updateSession(e.target.value));
          $breakInput.on("change", (e) => updateBreak(e.target.value));
          $start.click(() => {
            if (countType === "break") {
              startBreak();
            } else {
              startSession();
            }
          });
          $pause.click(() => pause());
          $reset.click(() => reset());
          $theme.click((e) => audioSelect(e));
          $reset.hide();
          $pause.hide();
        }
        function startSession() {
          $start.hide();
          $pause.show();
          $reset.hide();
          sessionNum++;
          countType = "session";
          $options.slideUp(143);
          $controls.removeClass().addClass("started");
          $title.fadeOut(43, function () {
            $(this)
              .html("Session " + sessionNum)
              .fadeIn();
          });
          $audio.animate({ volume: 1 }, 1000);
          start(remainingTime || sessionLength);
        }
        function startBreak() {
          countType = "break";
          $title.fadeOut(43, function () {
            $(this)
              .html("Break " + sessionNum)
              .fadeIn();
          });
          $audio.animate({ volume: 0 }, 5000);
          start(remainingTime || breakLength);
        }
        function start(timeLeft) {
          clearInterval(countdown);
          countdown = setInterval(() => {
            timeLeft--;
            remainingTime = timeLeft;
            let minLeft = Math.floor(timeLeft / 60),
              secLeft = timeLeft - minLeft * 60;
            updateMinutes(minLeft);
            updateSeconds(secLeft < 10 ? "0" + secLeft : secLeft);
            if (timeLeft < 1) {
              if (countType === "session") {
                startBreak(breakLength);
              } else {
                startSession();
              }
            }
          }, 1000);
        }
        function pause() {
          sessionNum--;
          $start.show();
          $reset.show();
          $pause.hide();
          $audio.animate({ volume: 0 }, 1000);
          clearInterval(countdown);
          $options.slideDown(143);
          $controls.removeClass().addClass("paused");
          $title.fadeOut(43, function () {
            $(this).html("Paused").fadeIn();
          });
        }
        function reset() {
          clearInterval(countdown);
          updateMinutes(sessionLength / 60);
          updateSeconds("00");
          countType = undefined;
          $controls.removeClass().addClass("reset");
          $title.html("Ready?");
          remainingTime = sessionLength;
        }
        function incrSession() {
          let num = Number($sessionInput.val());
          num = num + (num === sessionMax ? 0 : 1);
          sessionLength = num * 60;
          updateSession(num);
          updateMinutes(num);
          updateSeconds("00");
          reset();
        }
        function decrSession() {
          let num = Number($sessionInput.val());
          num = num - (num === sessionMin ? 0 : 1);
          sessionLength = num * 60;
          updateSession(num);
          updateMinutes(num);
          updateSeconds("00");
          reset();
        }
        function incrBreak() {
          let num = Number($breakInput.val());
          num = num + (num === breakMax ? 0 : 1);
          breakLength = num * 60;
          updateBreak(num);
          reset();
        }
        function decrBreak() {
          let num = Number($breakInput.val());
          num = num - (num === breakMin ? 0 : 1);
          breakLength = num * 60;
          updateBreak(num);
          reset();
        }
        function updateMinutes(num) {
          $minutes.text(num);
        }
        function updateSeconds(num) {
          $seconds.text(num);
        }
        function updateSession(num) {
          num =
            num < sessionMin ? sessionMin : num > sessionMax ? sessionMax : num;
          $sessionInput.val(num).blur();
          updateMinutes(num);
          updateSeconds("00");
          sessionLength = num * 60;
          reset();
        }
        function updateBreak(num) {
          $breakInput
            .val(num < breakMin ? breakMin : num > breakMax ? breakMax : num)
            .blur();
          breakLength = num * 60;
          reset();
        }
        function audioSelect(e) {
          $theme.removeClass("selected");
          $(e.target).addClass("selected");
          switch (e.target.id) {
            case "forest":
              $audio.attr(
                "src",
                "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/forest.mp3"
              );
              break;
            case "ocean":
              $audio.attr(
                "src",
                "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/ocean.mp3"
              );
              break;
            case "rainy":
              $audio.attr(
                "src",
                "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/rain.mp3"
              );
              break;
            case "peace":
              $audio.attr(
                "src",
                "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/peace.mp3"
              );
              break;
            case "cafe":
              $audio.attr(
                "src",
                "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/cafe.mp3"
              );
              break;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#pomodoro {
  width: 25rem;
  border-radius: 2rem;
  transform: scale(0.7);
  position: fixed;
  bottom: 7rem;
  right: 2rem;
  background:  rgb(35, 41, 49);
  padding: 1rem;
  #clock {
    margin-bottom: 1rem;
    #timer {
      $hover: 5;
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      #title {
        color: white;
        font-size: 28px;
        line-height: 28px;
        margin: 3px 0 1px;
        @media all and (max-width: 512px) {
          font-size: 5.5vw;
          line-height: 5.5vw;
        }
        @media all and (max-width: 184px) {
          font-size: 10px;
          line-height: 10px;
        }
      }
      #countdown {
        color: white;
        display: flex;
        font-size: 43px;
        font-weight: 600;
        line-height: 43px;
        #minutes::after {
          content: ":";
        }
      }
      #controls {
        align-items: center;
        display: flex;
        color: white;
        flex-direction: column;
        font-size: 15px;
        font-weight: 700;
        line-height: 15px;
        margin-top: 5px;
        text-align: center;
        text-transform: uppercase;
        .fas,
        .svg-inline--fa {
          position: relative;
        }
        #start,
        #pause,
        #reset {
          white-space: nowrap;
        }
        #start {
          .fa-play {
            font-size: 77%;
            top: -1px;
          }
          &:hover {
            color: darken(white, $hover);
          }
        }
        #pause {
          .fa-pause {
            font-size: 90%;
            top: -1px;
            transform: scaleX(0.84);
          }
          &:hover {
            color: darken(white, $hover);
          }
        }
        #reset {
          position: absolute;
          margin-top: 17.56px;
          transition: margin-top 0.43s, opacity 0.43s;
          .fa-sync-alt {
            font-size: 84%;
          }
          &:hover {
            color: darken(white, $hover);
          }
        }
        &.reset {
          #pause {
            display: none;
          }
          #reset {
            margin-top: 0;
            opacity: 0;
            z-index: -1;
          }
        }
        &.started {
          #start {
            display: none;
          }
          #reset {
            opacity: 0;
          }
        }
        &.paused {
          #pause {
            display: none;
          }
        }
      }
    }
  }
  #options {
    color: white;
    display: flex;
    font-size: 28px;
    font-weight: normal;
    justify-content: center;
    text-align: center;
    .option-title {
      color: white;
      font-size: 14px;
      font-weight: bold;
      margin-top: 8px;
      margin-bottom: -6px;
      text-transform: uppercase;
    }
    .fa-angle-double-up {
      color: white;
      cursor: pointer;
    }
    .fa-angle-double-down {
      color: white;
      cursor: pointer;
    }
    #session,
    #break {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-left: 2px;
      margin-right: 2px;
    }
    input[type="number"] {
      background: linear-gradient(lighten(white, 20), lighten(white, 22));
      border: 0;
      border-bottom: calc(3px + 0.28vw) solid white;
      border-radius: 10px;
      color: black;
      font: bold calc(21px + 1.43vw) "Open Sans", sans-serif;
      margin: calc(5px + 0.43vw) calc(3px + 0.43vw);
      padding: calc(3px + 0.43vw) calc(5px + 0.43vw);
      text-align: center;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      @media all and (min-width: 512px) {
        border-bottom: 4.43px solid white;
        font: bold 28.43px "Open Sans", sans-serif;
        margin: 7.2px 5.2px;
        padding: 5.2px 7.2px;
      }
      @media all and (max-width: 184px) {
        border-bottom: 3.5px solid white;
        font: bold 23.6px "Open Sans", sans-serif;
        margin: 5.7px 3.7px;
        padding: 3.7px 5.7px;
      }
    }
  }
}
audio {
  display: none;
}
</style>
