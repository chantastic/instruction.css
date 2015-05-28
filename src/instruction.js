/*! hint.css v0.0.1 | MIT License | https://github.com/chantastic/hint.css */

// this is a sample implementation
function toggledHintState(node) {
  return (node.dataset.hint) ? "" : "open";
}

function toggleHintWithId(e) {
  "use strict";
  var id, node;

  if ((id = e.target.dataset.hintId)) {
    node = document.getElementById(id);
    node.dataset.hint = toggledHintState(node);
  }
}

document.addEventListener('click', toggleHintWithId);
