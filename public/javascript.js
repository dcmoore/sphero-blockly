Blockly.JavaScript['roll_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("forward '+value_speed+'");';
  return code;
};

Blockly.JavaScript['roll_reverse'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("reverse '+value_speed+'");';
  return code;
};

Blockly.JavaScript['roll_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("left '+value_speed+'");';
  return code;
};

Blockly.JavaScript['roll_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("right '+value_speed+'");';
  return code;
};

Blockly.JavaScript['number_value'] = function(block) {
  var text_input_value = block.getFieldValue('input_value');
  // TODO: Assemble JavaScript into code variable.
  var code = text_input_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
