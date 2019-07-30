
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
export default class Chacun extends Component {

    constructor(props) {
        super(props);
        
       
        this.state = { profil: [] };
    }


  

    componentDidMount() {
        axios.get('https://lasalasa.herokuapp.com/'+this.props.location.pathname)
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (
<div class="col-md-6 carde">
<div class="card">




<div class="card-body">

  
  <h4 class="card-title" id='titrebe'
  onClick={()=>{
      console.log(obj._id);
      localStorage.setItem('atelier',obj._id);
      
  }}><center>{obj.titre}</center> </h4>
  <img width="100%" height="300px" src={'https://lasalasa.herokuapp.com/user/'+obj.image} alt="pdp" />
  <p class="card-text">Description: {obj.description}</p>
  <p class="card-text">Date: {obj.date}</p>
  <p class="card-text">Horaire de debut: {obj.debut}</p>
  <p class="card-text">Durée: {obj.dure}</p>
  <p class="card-text">Nombre de place disponible: {obj.place_dispo}</p>
  <p class="card-text">Nombre de place reserve: {obj.place_reserve}</p>
  <p class="card-text" onClick={()=>{
console.log(obj.visibilite);

  }}>Prix: {obj.prix}$</p>
  <div className='row'>
      <div className='col-md-6'>
  <Link to={'/profil/'+obj._id} className="btn btn-primary" id="metykosa">Edit</Link></div>


  <div>
  <div className='col-md-6'>
     
  {obj.visibilite===true ?(<button onClick={(e)=>{
             e.preventDefault()
            axios.get("https://lasalasa.herokuapp.com/masquer/"+obj._id).then(res=>{
                 axios.get('https://lasalasa.herokuapp.com/register/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({profil:res.data})
        })
                console.log(res.data)})
           
          //"/masquer/:_id"/register/:_id   
         }} className="btn btn-danger">Desactiver</button>):(<button onClick={(e)=>{
            e.preventDefault()
            console.log(obj._id)
           axios.get("https://lasalasa.herokuapp.com/affichier/"+obj._id).then(res=>{
  axios.get('https://lasalasa.herokuapp.com/register/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({profil:res.data})
        })
                console.log(res.data)})
            
         }} className="btn btn-success">Activer</button>)}
      </div>
             </div>
             </div>
        

 

</div>
</div>
</div>)

                            })) : ('')
                        }
                
        </div>
        </div>
    }
    render() {
        return (
            <div >
                {this.liste()}
            </div>
        );
    }
}