function Commander(httpClient) {
  this.objectSerializer = new ObjectSerializer();
  this.httpClient       = httpClient;

  return this;
}

Commander.prototype.forward = function(options) {
  this.sendCommand("forward", options);
}

Commander.prototype.reverse = function(options) {
  this.sendCommand("reverse", options);
}

Commander.prototype.left = function(options) {
  this.sendCommand("left", options);
}

Commander.prototype.right = function(options) {
  this.sendCommand("right", options);
}

Commander.prototype.resetHeading = function(options) {
  this.sendCommand("reset-heading", options);
}

Commander.prototype.sendCommand = function(commandName, options) {
  this.httpClient.get("/command/" + commandName + this.objectSerializer.serialize(options));
}
