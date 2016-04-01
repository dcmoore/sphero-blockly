describe("Sphero.Commander", function() {

  var httpClient;
  var commander;

  beforeEach(function() {
    httpClient = new HttpClient();

    spyOn(httpClient, "get");

    commander = new Commander(httpClient);
  })

  describe("#forward", function() {
    it("sends a http request to the server with the forward command with the given speed and distance", function() {
      commander.forward( { speed: 10, distance: 20 } );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/forward?speed=10&distance=20");
    })
  })

  describe("#reverse", function() {
    it("sends a http request to the server with the reverse command with the given speed and distance", function() {
      commander.reverse( { speed: 10, distance: 20 } );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/reverse?speed=10&distance=20");
    })
  })

  describe("#left", function() {
    it("sends a http request to the server with the left command with the given speed and distance", function() {
      commander.left( { speed: 10, distance: 20 } );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/left?speed=10&distance=20");
    })
  })

  describe("#right", function() {
    it("sends a http request to the server with the right command with the given speed and distance", function() {
      commander.right( { speed: 10, distance: 20 } );

      expect( httpClient.get ).toHaveBeenCalledWith("/command/right?speed=10&distance=20");
    })
  })

  describe("#reset-heading", function() {
    it("sends a http request to the server with the reset-heading command", function() {
      commander.resetHeading();

      expect( httpClient.get ).toHaveBeenCalledWith("/command/reset-heading");
    })
  })

  describe("#sendCommand", function() {
    it("sends a http request to the server with the given command and given options", function() {
      commander.sendCommand("left", { speed: 10, distance: 20 });

      expect( httpClient.get ).toHaveBeenCalledWith("/command/left?speed=10&distance=20");
    })
  })
});
