Blockly.Blocks['roll_forward'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Speed");
    this.setTooltip('');
  }
};
