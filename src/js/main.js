var React = require('react');
var Router = require('react-router');

var App = require('./modules/app');
var Index = require('./modules/index');
var Profile = require('./modules/profile');
var Messages = require('./modules/messages');

var routes = (  
    <Router.Route handler={App}>
        <Router.Route name="index" handler={Index} />
        <Router.Route name="profile" handler={Profile} />
        <Router.Route name="messages" handler={Messages} />
        <Router.Redirect to="index" />
    </Router.Route>
);
Router.run(routes, Router.HashLocation, function(App){
    React.render(<App/>, document.body);
});