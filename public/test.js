'use strict'
navigator.geolocation.getCurrentPosition(function(position) {
  console.log('%s : %s',position.coords.latitude, position.coords.longitude);
});
