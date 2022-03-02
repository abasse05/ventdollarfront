import React, { Component } from 'react'
import '../../styles/LoginContent.css'
import Alerts from './Alerts'
import {Link} from 'react-router-dom'

export default class LoginContent extends Component {

    //constructor
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email:"",
            password:"",
            message:"",
            errors:false
        }

    }

    //change values
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    //usbmit function
    onSubmit = e => {
        e.preventDefault()

        if (this.state.password !== this.state.confirmpassword) {
            this.setState({errors:"Username or Password do not match"})
            this.setState({message:"Password do not match", errors:!this.state.errors}) //true
        }else{
            const userObject = {
                email:this.state.email,
                password:this.state.password
            }
            console.log(this.state.errors)
            //this.props.register(userObject)
            this.setState({
                email:"",
                password:"",
                message:"",
                errors:false,
            })
        }
        
    }

    render(){
        
            return (
                <div className="containers" style={{}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6 form-ext">
                                <form className="form-horizontal" onSubmit={this.onSubmit}>
                                    <span className="heading bg-dark text-white text-center" style={{borderRadius:15, height:100, opacity:0.9}}>Connectez vous</span>
                                        {this.state.errors && <Alerts values={this.state.message}/>}
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Email or Username"
                                            onChange={this.onChange} 
                                            value={this.state.email}
                                        />
                                        <i className="bi bi-person"></i>
                                    </div>
                                    <div className="form-group help">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="Password"
                                            onChange={this.onChange} 
                                            value={this.state.password}
                                        />
                                        <i className="bi bi-lock-fill"></i>
                                        <Link href="#" className="bi bi-question-circle"></Link>
                                    </div>

                                    <div className="form-groups">
                                        <div className="main-checkbox">
                                            <input
                                                type="checkbox"
                                                value="None"
                                                id="checkbox1"
                                                name="check"
                                            />
                                            <label for="checkbox1"></label>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<label for="checkbox1" className="souvenir">Se souvenir de moi ?</label>
                                    </div>
                                        
                                    <div className="form-groups">
                                        <button type="submit" className="btn btn-default btn-lg button">
                                            Connexion
                                        </button>
                                    </div>

                                    <div className="form-groups forget text-center">
                                        <Link to="/forgetpassword" className="text-bold text-center" >Mot de passe oublié ?</Link>
                                    </div>

                                    <div className="form-groups inscrit text-center">
                                        <p className="text-bold">Vous n’avez pas de compte ? &nbsp;<Link to="/inscription" >Inscrivez-vous</Link></p>
                                    </div>
                                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}