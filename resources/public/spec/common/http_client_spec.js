describe("HttpClient", function() {

  var httpClient;

  describe("#get", function() {

    beforeEach(function() {
      spyOn($, "ajax");

      httpClient = new HttpClient();
    })

    it("sends a get request with the given path", function () {
      httpClient.get("/command/forward?speed=10");

      expect( $.ajax ).toHaveBeenCalledWith("/command/forward?speed=10", jasmine.any(Object));
    })
  })
});
