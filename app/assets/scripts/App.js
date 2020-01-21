import '../styles/main.css';
import 'lazysizes';
import React, {Component} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from "./view/index";


class Main extends Component {
    render() {
      return (
        <BrowserRouter>
        <div>
            <Route path="/" component={App} />
        </div>
        </BrowserRouter>
      );
    }
}


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
}