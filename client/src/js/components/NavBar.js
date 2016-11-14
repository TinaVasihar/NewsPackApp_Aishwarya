var React = require('react');
var {Link} = require('react-router');


var NavBar = React.createClass({

   render:function()
   {
     return(
<div style={{marginBottom:'70'}}>
       <nav className="navbar navbar-fixed-top navbar-inverse" >
    <div className="container">


      <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

      <a className="navbar-brand" href="#">NewsInShorts</a>

      <div className="nav-collapse collapse navbar-responsive-collapse">
      <ul className="nav navbar-nav navbar-left">
      <li className="active">
      <Link to="/home">Home</Link>
      </li>

      <li>
      <Link to="/about">About Us</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>

      <li>
      <Link to="/search">Search</Link>
      </li>

      </ul>



    <ul className="nav navbar-nav pull-right">
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> My Account <strong className="caret"></strong></a>

        <ul className="dropdown-menu">
          <li>
            <a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a>
          </li>

          <li>
            <a href="#"><span className="glyphicon glyphicon-refresh"></span> Update Profile</a>
          </li>

          <li>
            <a href="#"><span className="glyphicon glyphicon-briefcase"></span> Billing</a>
          </li>

          <li className="divider"></li>

          <li>
            <a href="#"><span className="glyphicon glyphicon-off"></span> Sign out</a>
          </li>
        </ul>
      </li>
    </ul>

  </div>
</div>
</nav>
</div>

     );
   }
 });

module.exports = NavBar;
