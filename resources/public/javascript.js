Blockly.JavaScript['roll_forward'] = function(block) {
  value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'alert("forward '+value_speed+'");';
  return code;
};

Blockly.JavaScript['roll_reverse'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'alert("reverse '+value_speed+'");';
  return code;
};

Blockly.JavaScript['roll_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'alert("left '+value_speed+'");';
  return code;
};

Blockly.JavaScript['roll_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'alert("right '+value_speed+'");';
  return code;
};

Blockly.JavaScript['number_value'] = function(block) {
  var textInputValue = block.getFieldValue('input_value');

  var returnBlockValue = parseInt(textInputValue);

  return [returnBlockValue, Blockly.JavaScript.ORDER_NONE];
};
