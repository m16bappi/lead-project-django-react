import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../store/Actions/AuthActions'

class Login extends Component {

    constructor() {
        super(),
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangerHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onClickHandler() {
        this.props.login(this.state.username, this.state.password);
    }
    
    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to='/' />
        }
        return (
            <div className="col-md-6 m-auto">
                <div className="card mt-5">
                    <p className="card-header display-4 text-center">Login</p>
                    <div className="card-body">
                        <form className='form-group'>
                            <div>
                                <label>Username</label>
                                <input type='text' name='username' className="form-control" onChange = {(event)=>this.onChangerHandler(event)} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type='text' name='password' className="form-control" onChange = {(event) =>this.onChangerHandler(event)}  />
                            </div>
                        </form>
                        <div className='ml-0 w-25'>
                            <button className="btn btn-primary btn-sm" onClick = {()=>this.onClickHandler()}>Submit</button>
                        </div>
                        <p className = 'mt-3'>
                            Don't have account ? <Link to='./register'>Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)