import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { add_lead } from '../../store/Actions/LeadsActions'

class Forms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='card mt-4 mb-2 bg-light'>
                <div>
                    <p className="card-header display-4">Add Leads</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name='name' onChange={(event) => this.onChangeHandler(event)} placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name='email' onChange={(event) => this.onChangeHandler(event)} placeholder="example@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name='message' className='form-control' onChange={(event) => this.onChangeHandler(event)} placeholder='Enter your message' />
                        </div>
                    </form>
                    <div className="ml-0 w-25">
                        <button className="btn btn-primary"
                            onClick={this.props.add_lead.bind(this, this.state)}>submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { add_lead })(Forms);