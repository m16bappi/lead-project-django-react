import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../store/Actions/AuthActions';

class Register extends Component {

    constructor() {
        super(),
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    onChangerHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onClickHandler() {
        if(this.state.password !== this.state.password2) {
            console.log('password not matched');
        } else {
            this.props.register(this.state.username, this.state.email, this.state.password);
        }
    }
    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to='/' />
        }
        return (
            <div className="col-md-6 m-auto">
                <div className="card mt-5">
                    <p className="card-header display-4 text-center">Register</p>
                    <div className="card-body">
                        <form className='form-group'>
                            <div>
                                <label>Username</label>
                                <input type='text' name='username' onChange={(event) => this.onChangerHandler(event)} className="form-control" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type='text' name='email' onChange={(event) => this.onChangerHandler(event)} className="form-control" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type='text' name='password' onChange={(event) => this.onChangerHandler(event)} className="form-control" />
                            </div>
                            <div>
                                <label>Confirm password</label>
                                <input type='text' name='password2' onChange={(event) => this.onChangerHandler(event)} className="form-control" />
                            </div>
                        </form>
                        <div className='ml-0 w-25'>
                            <button className="btn btn-primary" onClick={() => this.onClickHandler()}>Submit</button>
                        </div>
                        <p className = 'mt-3'>
                            Have account ? <Link to='./login'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const setStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(setStateToProps, { register })(Register)