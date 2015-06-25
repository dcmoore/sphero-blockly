Blockly.Blocks['number_value'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "input_value");
    this.setOutput(true, "Number");
  }
};
