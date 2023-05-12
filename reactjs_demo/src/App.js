import React from 'react';
import './App.css';
import Student from './components/Student';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: "Ha Hoang Hung",
          mark: 8,
          tel: ["0123456789","987654321"]
        },
        {
          name: "Pham Duy Hung",
          mark: 9,
          tel: ["987654321","0123456789"]
        }
      ],
      className: "T2203E",
      new_students: {
        name: "",
        mark: 0,
        tel: ""
      }
    }
    this.changeClassName = this.changeClassName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitStudent = this.submitStudent.bind(this);
  }
  handleInput(event) {
    const input = event.target
    const new_student = this.state.new_students;
    new_student[input.name] = input.value;
    this.setState({
      new_students: new_student
    })
  }
  changeClassName(event) {
    const changeClassName = event.target.value;
    this.setState({
      className: changeClassName
    })
  }
  submitStudent(event) {
    event.preventDefault();
    const new_student = this.state.new_students;
    new_student.tel = [new_student.tel];
    const students = this.state.students;
    students.push(new_student);
    this.setState({students:students});
  }
  
   
  
  render() {
    const student = this.state.students;
    const classname = this.state.className;
    const new_student = this.state.new_students;
    return (
      <div className="App">
        <h1>Danh sách sinh viên lớp {classname} : </h1>
        {
          student.map((v,k)=>{
            return <Student key={k} name={v.name} mark={v.mark} tel={v.tel} />
          })
        }
        <hr/>
        <input type='text' onChange={this.changeClassName} value={classname} placeholder='class name...'/>
        <hr/>
        <h2>Thêm sinh viên</h2>
        <form method='post' onSubmit={this.submitStudent}>
          <input type='text' onChange={this.handleInput} value={new_student.name} name='name' placeholder='name...'/>
          <input type='number' onChange={this.handleInput} value={new_student.mark} name='mark' placeholder='mark...'/>
          <input type='text' onChange={this.handleInput} value={new_student.tel} name='tel' placeholder='tel...'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
