import React, { Component } from 'react'
import '../../styles/InscriptionContent.css'
import {Link} from 'react-router-dom'
import Alerts from './Alerts'
export default class InscriptionContent extends Component {

    //constructor
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.errors = ""

        this.state = {
            username:"",
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            confirmpassword:"",
            userphone:"",
            userlocal:"",
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
            this.setState({message:"Password do not match", errors:!this.state.errors}) //true
        }else{
            const userObject = {
                username:this.state.username,
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                email:this.state.email,
                password:this.state.password,
                confirmpassword:this.state.confirmpassword,
                userphone:this.state.userphone,
                userlocal:this.state.userlocal
            }
            console.log(this.state.errors) //false
            //this.props.register(userObject)
            this.setState({
                username:"",
                first_name:"",
                last_name:"",
                email:"",
                password:"",
                confirmpassword:"",
                userphone:"",
                message:"",
                errors:false,
            })
        }
        
    }

    render(){
        
        return (
            <div className="containersinscritpions text-dark" style={{}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-9" style={{margin:"0 auto"}}>
                            <div className="form-container">
                                <h3 className="title text-left">Création de compte</h3>
                                <h6 className="text">
                                    {this.state.errors && <Alerts values={this.state.message}/>}
                                </h6>
                                <form className="form-horizontal" onSubmit={this.onSubmit}>
                                    
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            className="form-control"
                                            placeholder="Nom Utilisateur"
                                            onChange={this.onChange} 
                                            value={this.state.last_name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Prenom</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            className="form-control"
                                            placeholder="Prenom Utilisateur"
                                            onChange={this.onChange} 
                                            value={this.state.first_name}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            placeholder="Nom Utilisateur"
                                            onChange={this.onChange} 
                                            value={this.state.username}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email Utilisateur</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email Utilisateur"
                                            onChange={this.onChange} 
                                            value={this.state.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                            onChange={this.onChange} 
                                            value={this.state.password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirmation Password</label>
                                        <input
                                            type="password"
                                            name="confirmpassword"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            onChange={this.onChange} 
                                            value={this.state.confirmpassword}
                                        />
                                    </div>
                                    <h4 className="sub-title">Informations Personnelles</h4>
                                    <div className="form-group">
                                        <label>Num. Téléphone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="userphone"
                                            placeholder="Num. Téléphone"
                                            onChange={this.onChange} 
                                            value={this.state.userphone}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ville</label>
                                        <select className="form-control" name="userlocal" onChange={this.onChange} value={this.state.userlocal}>
                                            <option value="paris">Paris</option>
                                            <option value="new york">New York</option>
                                        </select>
                                    </div>
                                    <div className="check-terms">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="check-label">J'accepte les conditions</span>
                                    </div>
                                    <span className="signin-link">
                                            Vous avez un compte ? Cliquez ici pour <Link to="/login">vous connecter</Link>
                                    </span>
                                    <button className="btn signup" type="submit" >CREER MON COMPTE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}