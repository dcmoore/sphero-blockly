Blockly.Blocks['roll_forward'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Forward");
    this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setTooltip('');
  }
};

Blockly.Blocks['roll_reverse'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Reverse");
    this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setTooltip('');
  }
};

Blockly.Blocks['roll_left'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Left");
    this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setTooltip('');
  }
};

Blockly.Blocks['roll_right'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Right");
    this.setPreviousStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setNextStatement(true, ["roll_forward", "roll_reverse", "roll_left", "roll_right"]);
    this.setTooltip('');
  }
};

Blockly.Blocks['number_value'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "input_value");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};