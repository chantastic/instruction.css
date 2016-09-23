/*! instruction.css v0.0.4 | MIT License | https://github.com/chantastic/instruction.css */

/* eslint-env browser */
/* global console */

// this is a sample implementation
(function () {
  "use strict";

  function toggleInstructionWithId(e) {
    var id, instructionNode;

    if (!e && !e.target && !e.target.dataset) { return; }

    id = e.target.dataset.instructionId;

    if (!id) { return; }

    instructionNode = document.getElementById(id);

    if (!instructionNode.style.height) {
      instructionNode.style.height = instructionNode.scrollHeight + "px";
    } else {
      instructionNode.style.height = "0px";
    }
  }

  document.addEventListener("click", toggleInstructionWithId);
}());
