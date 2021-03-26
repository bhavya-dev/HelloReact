//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import HelloWorld from './components/HelloWorld'
import MyGreeting from './components/Greeting'
import WelcomeTopic from './components/WelcomeTopic'

class App extends Component{
  render(){
    return(
      <div className="App">
      <HelloWorld></HelloWorld>
      <MyGreeting name="Bhavya">
        <p>these are props</p>
      </MyGreeting>
      <WelcomeTopic></WelcomeTopic>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div>
//     <HelloWorld/>
// </div>
//   );
// }

export default App;
