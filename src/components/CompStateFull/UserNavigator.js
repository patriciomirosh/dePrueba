

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import icon from '../sample/icon1.png'
 
export default class Nav extends Component {
      
    constructor(args) {
        super(args);
        this.state={

        menu:true
        };}
    onClick = () => {
        this.setState({menu:!this.state.menu})
    }
      render() {
        return(<header className="header">
        <div className="container logo-nav-containter">
            <div className="LOGO">
                <img src={icon} className="logo2" alt="Logo Go Adiestramiento"/>
            </div>
        <div className="navbar-menu">            
           
            <nav className="access">
                <ul>
                    <li><NavLink to="/admin/home" exact >HOME</NavLink></li>
                    <li><NavLink to="/admin/balance" >BALANCE</NavLink></li>
                    <li><NavLink to="/admin/last10" >LAST 10 LOGS</NavLink></li>
                    <li><NavLink to="/admin/newlog" >NEW LOG</NavLink></li>
                    <li><NavLink to="/admin/allLogs" >ALL THE LOGS</NavLink></li>
                </ul>
            </nav>
        </div>
        </div>
      
    </header> );
    
      }
    }