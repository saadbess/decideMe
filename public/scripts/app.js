'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'decideMe'
);
var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);
