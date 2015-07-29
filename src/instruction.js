/*! instruction.css v0.0.4 | MIT License | https://github.com/chantastic/instruction.css */

/* eslint-env browser */
/* global console */

// this is a sample implementation
(function () {
  "use strict";

  function toggleInstructionWithId(e) {
    var id, instructionNode;

    id = e.target.dataset.instructionId;

    if (!id) { return; }

    instructionNode = document.getElementById(id);

    if (!instructionNode.style.maxHeight) {
      instructionNode.style.maxHeight = instructionNode.scrollHeight + "px";
    } else {
      instructionNode.style.maxHeight = "";
    }
  }

  document.addEventListener("click", toggleInstructionWithId);
}());
