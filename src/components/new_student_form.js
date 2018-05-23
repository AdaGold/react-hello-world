import React, { Component } from 'react';
import  './new_student_form.css';
import PropTypes from 'prop-types';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    };
  }

  static propTypes = {
     addStudent: PropTypes.func.isRequired,
  }

  nameChange = (event) => {
    console.log('name changed');
    console.log(event);
    console.log(event.target);
    this.setState({
      name: event.target.value,
    });

  }

  emailChange = (event) => {
    console.log('name changed');
    console.log(event);
    console.log(event.target);
    this.setState({
      email: event.target.value,
    });

  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.formValid()) {
      console.log('submitting');
      const student = {
        name: this.state.name,
        email: this.state.email,
      };
      this.props.addStudent(student);
      this.setState({
        name: '',
        email: '',
      });
    }

  }

  nameValid = () => {
    return this.state.name.length > 1;
  }

  emailValid = () => {
    return this.state.email.match(/.+@+./);
  }

  formValid = () => {
    return this.nameValid() && this.emailValid();
  }

  render() {
    return (
      <div>
        <form className="new-student-form" onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input className={ this.nameValid() ? "valid": "invalid" }
              name="name"
              value={this.state.name}
              onChange={this.nameChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input className={ this.emailValid() ? "valid": "invalid" }
              name="email" value={this.state.email}
              onChange={this.emailChange} />
          </div>
          <input className="button success" type="submit" value="Submit"
            disabled={this.formValid() ? false: true } />
        </form>
      </div>
    );
  }
}


export default NewStudentForm;
