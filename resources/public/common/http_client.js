function HttpClient() {
  return this;
}

HttpClient.prototype.get = function(path) {
  $.ajax(path, {
    async: false,
    success: function(data, textStatus, _) {
      console.log("Request for " + path + " sent successfully");
      console.log("Data for " + path + " : " + data + " | " + textStatus);
    },
    error: function(_, textStatus, error) {
      console.log("Request for " + path + " failed");
      console.log("Data for " + path + " : " + textStatus + " | " + error);
    }
  });
};
