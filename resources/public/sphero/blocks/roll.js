Blockly.Blocks['roll_forward'] = {
  init: function() {
      this.setColour(210);
      this.appendDummyInput()
          .appendField("forward");
      this.appendValueInput("speed")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("speed");
      this.appendValueInput("distance")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("distance");
      this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
      this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    }
};

Blockly.Blocks['roll_reverse'] = {
  init: function() {
      this.setColour(210);
      this.appendDummyInput()
          .appendField("reverse");
      this.appendValueInput("speed")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("speed");
      this.appendValueInput("distance")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("distance");
      this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
      this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    }
};

Blockly.Blocks['roll_left'] = {
  init: function() {
      this.setColour(210);
      this.appendDummyInput()
          .appendField("left");
      this.appendValueInput("speed")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("speed");
      this.appendValueInput("distance")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("distance");
      this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
      this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    }
};

Blockly.Blocks['roll_right'] = {
  init: function() {
      this.setColour(210);
      this.appendDummyInput()
          .appendField("right");
      this.appendValueInput("speed")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("speed");
      this.appendValueInput("distance")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("distance");
      this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
      this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    }
};
