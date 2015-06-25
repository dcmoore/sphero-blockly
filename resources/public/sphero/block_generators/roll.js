Blockly.JavaScript['roll_forward'] = function(block) {
  speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.forward( {speed: " + speed + "} );"
};

Blockly.JavaScript['roll_reverse'] = function(block) {
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.reverse( {speed: " + speed + "} );"
};

Blockly.JavaScript['roll_left'] = function(block) {
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.left( {speed: " + speed + "} );"
};

Blockly.JavaScript['roll_right'] = function(block) {
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.right( {speed: " + speed + "} );"
};