Blockly.JavaScript['number_value'] = function(block) {
  var textInputValue = block.getFieldValue('input_value');

  var returnBlockValue = parseInt(textInputValue);

  return [returnBlockValue, Blockly.JavaScript.ORDER_NONE];
};
