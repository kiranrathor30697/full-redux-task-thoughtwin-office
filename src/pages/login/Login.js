import React, { Component } from 'react';

export default class Login extends Component {

     handleChange = (e) => {
        console.log(e)
    }
    handleSubmit = (e) => {
        console.log(e)
    }
  render() {
    return (
      <div>
        {/* <form className="border bg-dark w-25 p-4 offset-4 rounded">
          <input
            type="text"
            name="userName"
            onChange={(e) => {
              this.handleChange(e);
            }}
            className="d-block form-control mb-3"
            placeholder="Enter user Name"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => {
              this.handleChange(e);
            }}
            className="d-block form-control mb-3"
            placeholder="Enter Password"
          />
          <button
            type="submit"
            name="submit"
            onClick={(e) => {
              this.handleSubmit(e);
            }}
            className="btn btn-success"
          >
            Register Form
          </button>
        </form> */}
        <form className="bg-secondary p-4 rounded">
        <h3 className="App mb-3">Register Form</h3>
        <input
          type="text"
          name="userName"
          className="d-block form-control mb-3"
          onChange={(e) => {this.handleChange(e)}}
          placeholder="Enter user Name"
        />
    
        <input
          type="password"
          name="password"
          className="d-block form-control mb-3"
          onChange={(e)=>{this.handleChange(e)}}
          placeholder="Enter Password"
        />
        
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            this.registerData(e);
          }}
        >
          Register Form
        </button>
      </form>
      </div>
    );
  }
}
