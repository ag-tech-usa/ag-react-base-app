import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    HashRouter
} from "react-router-dom";

import Layout from "./base/Layout";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Layout />
            </HashRouter>
      
        );
        
    }
}

export default Main;