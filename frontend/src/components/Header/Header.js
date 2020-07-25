import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { logout } from '../../store/Actions/AuthActions';


class Header extends Component {
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLink = (
            <ul className="navbar-nav ml-auto">
                <span className='navbar-text mr-1'>
                    <strong>
                        { user ? `welcome ${user.username}`: ''}
                    </strong>
                </span>
                <li className="nav-item active">
                    <button className="btn btn-danger btn-md" onClick = {this.props.logout}>Logout</button>
                </li>
            </ul>
        );
        const guestLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to='/login' className="nav-link" href="#">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to='/register' className="nav-link" href="#">Register</Link>
                </li>
            </ul>
        );
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className='container'>
                        <a className="navbar-brand display-6" href="#">Lead Manager</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            {isAuthenticated ? authLink : guestLink}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header);