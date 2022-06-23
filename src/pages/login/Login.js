import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className=''>
        <form className="border bg-dark w-25 p-4 offset-4 rounded">
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
        </form>
      </div>
    );
  }
}
