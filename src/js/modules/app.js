var React = require('react');
var Router = require('react-router');

var App = React.createClass({
    render: function(){
        return (<div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <ul className="nav nav-pills nav-stacked">
                        <li role="presentation">
                            <Router.Link to="index">Home</Router.Link>
                        </li>
                        <li role="presentation">
                            <Router.Link to="profile">Profile</Router.Link>
                        </li>
                        <li role="presentation">
                            <Router.Link to="messages">Messages</Router.Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9">
                    <Router.RouteHandler />
                </div>
            </div>
        </div>);
    }
});

module.exports = App;