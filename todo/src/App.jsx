import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    tasksToDo: [],
    completedTasks: [],
    newTask: ''
  };

  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState(prevState => ({
        tasksToDo: [...prevState.tasksToDo, this.state.newTask],
        newTask: ''
      }))
    }
  }

  completeTask = taskIndex => {
    const completedTask = this.state.tasksToDo[taskIndex];
    this.setState(prevState => ({
      tasksToDo: prevState.tasksToDo.filter((task, index) => index !== taskIndex),
      completedTasks: [...prevState.completedTasks, completedTask]
    }))
  }

  deleteTask = (taskList, taskIndex) => {
    this.setState(prevState => ({
      [taskList]: prevState[taskList].filter((task, index) => index !== taskIndex)
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="column">
          <h2>To Be Performed</h2>
          <input
            type="text"
            placeholder="Add a new task"
            value={this.state.newTask}
            onChange={e => this.setState({ newTask: e.target.value })}
          />
          <button onClick={this.addTask}>Add Task</button>
          <ul>
            {this.state.tasksToDo.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => this.completeTask(index)}>Finish</button>
                <button onClick={() => this.deleteTask('tasksToDo', index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Completed Works</h2>
          <ul>
            {this.state.completedTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => this.deleteTask('completedTasks', index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
