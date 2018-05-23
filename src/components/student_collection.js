import React, { Component } from 'react';

import Student from './student';
import NewStudentForm from './new_student_form';

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
      return <Student key={ student.name } name={ student.name } email={ student.email }/>
    });

    return (
      <div>
        <h3>Students</h3>
        { studentComponents }
        <NewStudentForm addStudent={this.addStudent} />
      </div>
    )
  }

  addStudent = (student) => {
    const students = this.state.students;

    students.push(student);
    this.setState({
      students
    });
  }
}
export default StudentCollection;

const fetchStudents = () =>
  ([
    { name: "A Student", email: "4321@ada.org" },
    { name: "B Student", email: "1234@ada.org" }
  ]);
