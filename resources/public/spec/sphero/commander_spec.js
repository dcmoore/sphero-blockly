describe("Sphero.Commander", function() {

  var httpClient;
  var commander;

  beforeEach(function() {
    httpClient = new HttpClient();

    spyOn(httpClient, "get");

    commander = new Commander(httpClient);
  })

  describe("#forward", function() {
    it("sends a http request to the server with the forward command an the given speed", function() {
      commander.forward( {speed: 10} );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/forward?speed=10");
    })
  })

  describe("#reverse", function() {
    it("sends a http request to the server with the reverse command an the given speed", function() {
      commander.reverse( {speed: 10} );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/reverse?speed=10");
    })
  })

  describe("#left", function() {
    it("sends a http request to the server with the left command an the given speed", function() {
      commander.left( {speed: 10} );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/left?speed=10");
    })
  })

  describe("#right", function() {
    it("sends a http request to the server with the right command an the given speed", function() {
      commander.right( {speed: 10} );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/right?speed=10");
    })
  })

  describe("#sendCommand", function() {
    it("sends a http request to the server with the given command and given options", function() {
      commander.sendCommand("left", { speed: 10 });

      expect( httpClient.get ).toHaveBeenCalledWith("/command/left?speed=10");
    })
  })
});
