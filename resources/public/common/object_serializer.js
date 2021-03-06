function ObjectSerializer() {}

ObjectSerializer.prototype.serialize = function(objectToSerialize) {
  var parts = [];

  for (var p in objectToSerialize)
    if (objectToSerialize.hasOwnProperty(p)) {
      parts.push(encodeURIComponent(p) + "=" + encodeURIComponent(objectToSerialize[p]));
    }

  if (parts.length > 0) {
    return "?" + parts.join("&");
  }
  return '';
}
