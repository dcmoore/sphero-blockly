describe("Blockly.Javascript", function() {
  describe("#number_value", function() {

    var numberValueBlock;
    var numberValueBlockEvaluator;

    beforeEach(function() {
      numberValueBlock = new MockValueBlock();

      numberValueBlockEvaluator = Blockly.JavaScript['number_value'];
    })

    it("pulls the input_value field from the block", function() {
      spyOn(numberValueBlock, "getFieldValue");

     numberValueBlockEvaluator(numberValueBlock);

      expect( numberValueBlock.getFieldValue ).toHaveBeenCalledWith('input_value');
    })

    it("converts the blocks input to an integer if its a string", function() {
      spyOn(numberValueBlock, "getFieldValue").and.returnValue('10');

      var returnedValue = numberValueBlockEvaluator(numberValueBlock);

      expect( returnedValue[0] ).toEqual(10);
    })

    it("does not have any order dependencies", function() {
      var returnedValue = numberValueBlockEvaluator(numberValueBlock);

      expect( returnedValue[1] ).toEqual(Blockly.JavaScript.ORDER_NONE);
    });
  });
});
