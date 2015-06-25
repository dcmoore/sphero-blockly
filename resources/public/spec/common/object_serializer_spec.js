describe("Common.ObjectSerializer", function() {

  describe("#serialize", function() {

    it("takes an object and converts it to query params", function() {
      var object = { speed: 10, distance: 20 };

      queryParams = new ObjectSerializer().serialize(object);

      expect( queryParams ).toEqual("?speed=10&distance=20");
    })
  })
})
