import React, { Component } from 'react';
import styles from './new_student_form.css';
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
    console.log('submitting');
    const student = {
      name: this.state.name,
      email: this.state.email,
    };

    this.props.addStudent(student);
  }

  render() {
    return (
      <div>
        <form className="new-student-form" onSubmit={this.submitHandler}>
          <label htmlFor="name">Name:</label>
          <input className={ this.state.name.length > 1 ? "valid": "invalid" }
            name="name"
            value={this.state.name}
            onChange={this.nameChange} />
          <label htmlFor="email">Email:</label>
          <input className={ this.state.email.match(/.+(@).+/) ? "valid": "invalid" }
            name="email" value={this.state.email}
            onChange={this.emailChange} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }



}


export default NewStudentForm;
