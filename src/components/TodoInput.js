import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-boy my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i class="fa fa-book" aria-hidden="true"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Enter a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className={
              editItem
                ? "btn btn-block btn-success mt-5 text-capitalize"
                : "btn btn-block btn-primary mt-5 text-capitalize"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
