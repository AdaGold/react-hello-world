import React, { Component } from 'react';

class Student extends Component {
  render() {
    return (
      <div className="student" >
        <strong>Name:</strong>{ this.props.name }
        <br />
        <strong>E-mail:</strong>{ this.props.email }
      </div>
    )
  }
}

export default Student;
