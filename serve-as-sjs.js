console.log('foo');
@ = require('sjs:std');
@integers() .. @each {
  |i|
  document.body.innerHTML = "<div style='font-size:50px'>#{i}</div>";
  hold(1000);
}
