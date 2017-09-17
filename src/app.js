console.log('app.js is running!');

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
    title: 'decideMe',
    subTitle: 'Get stuff done',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
var template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Saad',
    age: 28,
    location: 'London, UK'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
