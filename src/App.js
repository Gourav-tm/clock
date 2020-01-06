import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.showTime = this.showTime.bind(this);
    this.state = {
      time: ""
    }
  }
  componentDidMount() {
    this.showTime();
  }
  showTime() {
    const _this = this;
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h === 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    this.setState({
      time: time
    })
    setTimeout(_this.showTime, 1000);

  }
  render() {
    return (
      <div>
        <div className="clock" >{this.state.time}</div>
      </div>
    );
  }
}

export default App;

