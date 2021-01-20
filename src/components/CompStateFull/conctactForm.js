import React, { Component } from "react";
import {handleInputChangeNormal} from './NormalFunctions'
import axios from 'axios'
const api = axios.create({ baseURL: `http://localhost:3050` });

export default class ContactForm extends Component {
    constructor(args) {
        super(args);
    
        this.state = {
       name:"",
       UserEmail:"",
       subject:"",
       message:"",
       conctactME: this.props.conctactME
    
        };
    }
    sendEmail =(name,userEmail,subject,message,email,Username)=>{api.post(`emailed/email`,
    {
        name:name,
        email:userEmail,
        subject:subject,
        message:message,
        Username :Username,
        Email:email
    })}
    onSubmit = (e) =>{
        e.preventDefault()
        this.sendEmail(this.state.name,this.state.UserEmail,this.state.subject,this.state.message,this.props.email,this.props.Username1)
       
    }
    

  render() {
    return (
     
        <section className="mb-4" >

       
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
        
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Feel free to contact us directly. I will contact you at
            a matter of hours to help you.</p>
    
        <div className="row">
    
            <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" onSubmit={this.onSubmit}>
    
                   
                    <div className="row">
    
                       
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="name" name="name" value={this.state.name}  className="form-control" onChange={handleInputChangeNormal.bind(this)} />
                                <label htmlFor="name"  >your name</label>
                            </div>
                        </div>
                       
    
                       
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="email" name="email"  value={this.state.email} className="form-control"  onChange={handleInputChangeNormal.bind(this)}/>
                                <label htmlFor="email" className="">Your email</label>
                            </div>
                        </div>
                       
    
                    </div>
                   
    
                   
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <input type="text" id="subject" name="subject" value={this.state.subject} className="form-control" onChange={handleInputChangeNormal.bind(this)}/>
                                <label htmlFor="subject" className="">Subject</label>
                            </div>
                        </div>
                    </div>
                   
    
                   
                    <div className="row">
    
                       
                        <div className="col-md-12">
    
                            <div className="md-form">
                                <textarea type="text" id="message" name="message" value={this.state.message} rows="2" className="form-control md-textarea" onChange={handleInputChangeNormal.bind(this)}></textarea>
                                <label htmlFor="message">Your message</label>
                            </div>
    
                        </div>
                    </div>
                   
                <div className="text-center text-md-left">
                <button className="btn btn-primary" type="submit" required="required" >Send</button>
                </div>
                </form>
    
               
                <div className="status"></div>
            </div>
           
    
           
            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Rosario Argentina Cp 2000</p>
                    </li>
    
                </ul>
            </div>
           
    
        </div>
    
    </section>
    
    );
  }
}
