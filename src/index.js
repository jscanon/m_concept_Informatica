var $ = Bliss,
  $$ = Bliss.$;

$$("ul.tree").forEach((ul) => {
  $$("li", ul).forEach((li) => {
    if (li.childNodes[0].nodeType == 3) {
      $.create("span", {
        around: li.childNodes[0]
      });
    }
  });
  $$("li li > span", ul).forEach((span) => {
    var li = span.closest("ul").parentNode;
    var lineCS = getComputedStyle(span, "::before");
    var top = span.parentNode.offsetTop + span.parentNode.offsetHeight / 2;
    var parentTop = li.offsetHeight / 2;
    var dy = top - parentTop;
    var dx = parseInt(lineCS.width);
    var angle = Math.atan2(dy, dx);
    var θ = (angle * 180) / Math.PI;
    span.style.setProperty("--angle", θ);
    span.style.setProperty("--cos-angle", Math.abs(Math.cos(angle)));
  });
});
