import React, { Component, Fragment } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { get_leads, delete_lead } from "../../store/Actions/LeadsActions";
import { connect } from 'react-redux'
import Forms from "./Forms";

class Leads extends Component {

    componentDidMount() {
        this.props.get_leads()
    }

    render() {
        let value = 1;
        return (
            <Fragment>
                <Forms />
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(items => (
                            <tr key={items.id}>
                                <td>{value++}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.message}</td>
                                <td><button className='btn btn-danger btn-sm'
                                    onClick={this.props.delete_lead.bind(this, items.id)}>Delete
                            </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

function setStateToProps(state) {
    return {
        leads: state.leads.leads
    }
}

export default connect(setStateToProps, { get_leads, delete_lead })(Leads);