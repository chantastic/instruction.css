/*! instruction.css v0.0.1 | MIT License | https://github.com/chantastic/instruction.css */

// this is a sample implementation
function toggledInstructionState(node) {
  return (node.dataset.instruction) ? "" : "open";
}

function toggleInstructionWithId(e) {
  "use strict";
  var id, node;

  if ((id = e.target.dataset.instructionId)) {
    node = document.getElementById(id);
    node.dataset.instruction = toggledInstructionState(node);
  }
}

document.addEventListener('click', toggleInstructionWithId);
