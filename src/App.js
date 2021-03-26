//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import HelloWorld from './components/HelloWorld'
import MyGreeting from './components/Greeting'
import WelcomeTopic from './components/WelcomeTopic'
import DestructuringFunctional from './components/DestructuringFunctional';
import DestructuringClass from './components/DestructuringClass';

class App extends Component{
  render(){
    return(
      <div className="App">
      <HelloWorld></HelloWorld>
      <MyGreeting name="Bhavya">
        <p>these are props</p>
      </MyGreeting>
      <DestructuringFunctional name="Mahi" topic="destructuringfunctional" greet="welcome"></DestructuringFunctional>
      <WelcomeTopic></WelcomeTopic>
      <DestructuringClass name="krishna" topic="destructuringClass" greet="Welcomedestructuring"></DestructuringClass>
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
