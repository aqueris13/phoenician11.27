document.addEventListener('DOMContentLoaded', function () {
  var t = document.querySelector('.nav-toggle'), n = document.getElementById('nav');
  if (t && n) t.addEventListener('click', function () { n.classList.toggle('open'); });
  document.querySelectorAll('.ba-slider').forEach(function (slider) {
    var wrap = slider.querySelector('.ba-before-wrap'), handle = slider.querySelector('.ba-handle'), img = wrap.querySelector('img'), drag = false;
    function set(p) { p = Math.max(0, Math.min(100, p)); wrap.style.width = p + '%'; handle.style.left = p + '%'; img.style.width = slider.offsetWidth + 'px'; }
    function move(e) { var r = slider.getBoundingClientRect(), x = e.touches ? e.touches[0].clientX : e.clientX; set((x - r.left) / r.width * 100); }
    slider.addEventListener('mousedown', function (e) { drag = true; move(e); });
    window.addEventListener('mousemove', function (e) { if (drag) move(e); });
    window.addEventListener('mouseup', function () { drag = false; });
    slider.addEventListener('touchstart', function (e) { drag = true; move(e); }, { passive: true });
    window.addEventListener('touchmove', function (e) { if (drag) move(e); }, { passive: true });
    window.addEventListener('touchend', function () { drag = false; });
    window.addEventListener('resize', function () { set(50); });
    img.addEventListener('load', function () { set(50); }); set(50);
  });
});
