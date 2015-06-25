window.mock = function( constr, name ) {
  var keys = [];
  for( var key in constr.prototype ) {
      keys.push( key );
    }
  return keys.length > 0 ? jasmine.createSpyObj( name || "mock", keys ) : {};
};

var MockValueBlock = function() {
  this.value = null;
};

var MockValueBlock = function(value) {
  this.value = value;
};

MockValueBlock.prototype.getFieldValue = function(fieldName) {
  return this.value;
};
