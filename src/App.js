import React,{Component} from 'react';
import BookBrowser from './modules/book-browser/book-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import logo from './logo.svg';
import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){

    return (
      //provides the material UI to child components
      <MuiThemeProvider>

        <BookBrowser/>

      </MuiThemeProvider>

    );
  }
}
export default App;
