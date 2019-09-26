import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

class UserModal extends React.Component{
  render(){
    const { handleSubmit } = this.props;
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Editing User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>Name</label>
              <Field name="name" component="input" type="text" className="form-control" placeholder="Enter name"/>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <Field name="email" component="input" type="email" className="form-control" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label>City</label>
              <Field name="address.city" component="input" type="text" className="form-control" placeholder="Enter City"/>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <Field name="phone" component="input" type="text" className="form-control" placeholder="Enter Phone"/>
            </div>

            <div className="form-group">
              <label>Website</label>
              <Field name="website" component="input" type="text" className="form-control" placeholder="Enter Website"/>
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <Field name="company.name" component="input" type="text" className="form-control" placeholder="Enter company name"/>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.props.onHide} className={'btn btn-default'}>Close</button>
            <Button type="submit" className="btn btn-primary">Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    )
  }
}

UserModal = reduxForm({
  form: 'EditUser',
  enableReinitialize: true
})(UserModal);

export default UserModal
