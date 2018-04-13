import React, { Component } from 'react';

import Student from './student';

class StudentCollection extends Component {
  constructor() {
    super();

    this.state = { students: [] }
  }

  componentDidMount() {
    console.log('IN COMPONENT DID MOUNT');
    this.setState({students: fetchStudents() });
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

const fetchStudents = () =>
  ([
    { name: "A Student", email: "4321@ada.org" },
    { name: "B Student", email: "1234@ada.org" }
  ]);
