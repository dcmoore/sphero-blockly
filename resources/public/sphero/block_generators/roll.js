Blockly.JavaScript['roll_forward'] = function(block) {
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.forward( {speed: " + speed + ", " + "distance: " + distance + "} );"
};

Blockly.JavaScript['roll_reverse'] = function(block) {
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.reverse( {speed: " + speed + ", " + "distance: " + distance + "} );"
};

Blockly.JavaScript['roll_left'] = function(block) {
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.left( {speed: " + speed + ", " + "distance: " + distance + "} );"
};

Blockly.JavaScript['roll_right'] = function(block) {
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);

  return "window.commander.right( {speed: " + speed + ", " + "distance: " + distance + "} );"
};
