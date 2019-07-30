
import React, { Component } from 'react';
import axios from 'axios';

export default class Inscrire extends Component {
  constructor(props) {
    super(props);
    this.onChangenom = this.onChangenom.bind(this);
    this.onChangeprenom = this.onChangeprenom.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangetelephone = this.onChangetelephone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      prenom: '',
      email:'',
      telephone:''
    }
  }
  onChangenom(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangeprenom(e) {
    this.setState({
      prenom: e.target.value
    })  
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangetelephone(e) {
    this.setState({
      telephone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      telephone: this.state.telephone
    };
    axios.post('https://lasalasa.herokuapp.com/particulier/'+localStorage.getItem('ti'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nom: '',
      prenom: '',
      email: '',
      telephone:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nom:  </label>
                    <input  id='champ'
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangenom}
                      required/>
                </div>
                <div className="form-group">
                    <label>Prénom: </label>
                    <input type="text" id='champ'
                      className="form-control"
                      value={this.state.prenom}
                      onChange={this.onChangeprenom}
                      required/>
                </div>
                <div className="form-group">
                    <label>email: </label>
                    <input type="email"  id='champ'
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeemail}
                      required/>
                </div>
                <div className="form-group">
                    <label>Telephone: </label>
                    <input type="text"  id='champ'
                      className="form-control"
                      value={this.state.telephone}
                      onChange={this.onChangetelephone}
                      required/>
                </div>
                <div className="form-group">
                    <input id='champ' type="submit" value="S'incrire" className="btn btn-Secondary"/>
                </div>
            </form>
        </div>
    )
  }
}