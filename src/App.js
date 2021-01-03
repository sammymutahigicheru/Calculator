import React, {Component} from "react";
import Button from './components/button'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: '0',
      previous: []
    }
  }
  reset = () =>{
    this.setState({result: '0'});
  }
  render(){
    const buttons = [
      {symbol: 'C',cols:1,action: this.reset}
    ];
    return (
      <div className="App">
        <input className = "result" type="test" value={this.state.current} />

      </div>
    );
  }
  
}

export default App;
