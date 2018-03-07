import React, { Component } from 'react';

import Student from './student';

class StudentCollection extends Component {
  constructor() {
    super();

    this.state = {
      students: [
        {
          name: "State Ada",
          email: "state-ada@ada.co"
        },
        {
          name: "Cool",
          email: "cool@ada.co"
        }
      ]
    };
  }
  render() {
    let studentComponents = this.state.students.map(function(student) {
      return <Student name={ student.name } email={ student.email }/>
    });

    return (
      <div>
        <h3>Students</h3>
        { studentComponents }
      </div>
    )
  }
}

export default StudentCollection;
