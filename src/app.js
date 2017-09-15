console.log('app.js is running!');

var app = {
    title: 'decideMe',
    subTitle: 'Get stuff done'
};

// JSX - JavaScript XML
var template = ( 
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
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
        <p>Age: {user.age ? user.age : 'Unknown'}</p>
        {getLocation(user.location)}
    </div>
);

var appRoute = document.getElementById('app');

ReactDOM.render(templateTwo, appRoute);
