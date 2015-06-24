describe("Commander", function() {

  var HttpClient = function() {};
  HttpClient.prototype.get = function(url) {};

  var httpClient;
  var commander;

  beforeEach(function() {
    httpClient = new HttpClient();

    spyOn(httpClient, "get");

    commander = new Commander(httpClient);
  })

  describe("#forward", function() {
    it("sends a http request to the server with the forward command an the given speed", function() {
      commander.forward(10);

      expect( httpClient.get ).toHaveBeenCalledWith("http://localhost:3000/command/forward?speed=10");
    })
  })

  describe("#reverse", function() {
    it("sends a http request to the server with the reverse command an the given speed", function() {
      commander.reverse(10);

      expect( httpClient.get ).toHaveBeenCalledWith("http://localhost:3000/command/reverse?speed=10");
    })
  })

  describe("#left", function() {
    it("sends a http request to the server with the left command an the given speed", function() {
      commander.left(10);

      expect( httpClient.get ).toHaveBeenCalledWith("http://localhost:3000/command/left?speed=10");
    })
  })

  describe("#right", function() {
    it("sends a http request to the server with the right command an the given speed", function() {
      commander.right(10);

      expect( httpClient.get ).toHaveBeenCalledWith("http://localhost:3000/command/right?speed=10");
    })
  })
});

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
