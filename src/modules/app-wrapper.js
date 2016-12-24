import React, { Component } from 'react';
import MainBoardModule from './main-board'
class AppWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container" >
        <MainBoardModule.wrapper />
      </div>
    );
  }
}
export default AppWrapper;