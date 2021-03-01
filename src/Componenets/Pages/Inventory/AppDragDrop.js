import { rgbToHex } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import React, { Component } from "react";
import "./App.css";

export default class AppDragDrop extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" },
    ],
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: [],
      complete2: [],
      complete3: [],
      complete4: [],
      complete5: [],
     
     
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: "orange" }}
        >
          {}
        </div>
      );
    });

    return (
      <div>
        <div className="container-drag">
         


        <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">New item</span>
                    {tasks.wip}
                </div>
                


         
          <div className="first-row">
            <span>First Row</span>

            <div
              className="droppable1"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "complete")}
            >
              {tasks.complete}
            </div>

            <div
              className="droppable2"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "complete2")}
            >
              {tasks.complete2}
            </div>

            <div
              className="droppable3"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "complete3")}
            >
              {tasks.complete3}
            </div>

            <div
              className="droppable4"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "complete4")}
            >
              {tasks.complete4}
            </div>

            <div
              className="droppable5"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "complete5")}
            >
              {tasks.complete5}
            </div>
          </div>









     






        </div>
      </div>
    );
  }
}
