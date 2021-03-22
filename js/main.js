const source =
  '../audio/Rick and Morty - Evil Morty Theme Song (Feewet Trap Remix) (mp3cut.net).mp3';
const audio = new Audio();
// no event listener needed here
audio.src = source;
audio.autoplay = true;
audio.play();
setTimeout(() => {
  document.getElementById('levitate').style.animation =
    'do-levitation 1.2s alternate ease-in-out infinite';
}, 5000);

// Preloader
$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader')
      .delay(100)
      .fadeOut('slow', function () {
        $(this).remove();
      });
  }
});
