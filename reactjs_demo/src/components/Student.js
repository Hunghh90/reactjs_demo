import React from "react";

export default class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            age: 91
        }
        this.incrementAge = this.incrementAge.bind(this);
        this.Age = this.Age.bind(this);
    }
    incrementAge() {
        const age = this.state.age;
        this.setState({
            age: age+1
        })
    }
    Age() {
        const age = this.state.age;
        this.setState({
            age: age-1
        })
    }
    render() {
        const student_name = this.props.name;
        const student_mark = this.props.mark;
        const telephone = this.props.tel?this.props.tel:[];
        const age = this.state.age;
        return (
            <>
            <h2>{student_name}</h2>
            <h3>Mark: {student_mark}</h3>
            <h3>Age: <button onClick={this.Age}>-</button> {age} <button onClick={this.incrementAge}>+</button></h3>
            <h3>Danh Sach Telephone</h3>
            <ul>
                {
                    telephone.map((v,k)=> {
                        return (<li key = {k}>{v}</li>);
                    })
                }
            </ul>
            </>
        )
    }
}