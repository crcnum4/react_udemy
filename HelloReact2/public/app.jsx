//since no longer in the HTML file need to require these here.
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');



var firstName = 'Missa';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
