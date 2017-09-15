'use strict';

console.log('app.js is running!');

var app = {
    title: 'decideMe',
    subTitle: 'Get stuff done'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Saad',
    age: 28,
    location: 'London, UK'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age ? user.age : 'Unknown'
    ),
    getLocation(user.location)
);

var appRoute = document.getElementById('app');

ReactDOM.render(templateTwo, appRoute);
