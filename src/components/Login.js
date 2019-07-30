import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import logo from "./logobe.png"
import './Login.css'
class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/admin');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/admin')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(

<div class="container h-100 log"  id="fondLogin">
<div class="d-flex justify-content-center h-100">
    <div class="user_card">
        <div class="d-flex justify-content-center" > 
            <div class="brand_logo_container"  id="fondLogin">
                <img src={logo} class="brand_logo" alt="Logo" />
            </div>
        </div>
        <div class="d-flex justify-content-center form_container" >
            <form onSubmit={ this.handleSubmit } >
                <div class="input-group mb-3"  id="fondLogin">
                    <div class="input-group-append">
                        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    </div>
                    <input  class="form-control input_user" 
                      type="email"
                                  placeholder="Email"
                                  className={classnames('form-control form-control-lg', {
                                      'is-invalid': errors.email
                                  })}
                                  name="email"
                                  onChange={ this.handleInputChange }
                                  value={ this.state.email }/>
                </div>
                <div class="input-group mb-2"  id="fondLogin">
                    <div class="input-group-append">
                        <i class="fa fa-cog fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                    </div>
                    <input  class="form-control input_pass"
                     type="password"
                                 placeholder="Password"
                                 className={classnames('form-control form-control-lg', {
                                     'is-invalid': errors.password
                                 })} 
                                 name="password"
                                 onChange={ this.handleInputChange }
                                 value={ this.state.password } />
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" class="btn login_btn">Enregistre</button>
            
        </div>
            </form>
        </div>
        
      
    </div>
</div>
</div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)
