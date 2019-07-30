
import React from 'react';
import './update.css'
class Modifier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     titre: '',
     description:'',
      date:'',
      debut:'',
      dure:'',
      place_dispo:'',
      place_reserve:'',
      prix:'',
     image:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }




  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}
  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('image', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('description',this.state.description);
    data.append('date',this.state.date);
    data.append('debut',this.state.debut);
    data.append('dure',this.state.dure);
    data.append('place_dispo',this.state.place_dispo);
    data.append('place_reserve',this.state.place_reserve);
    data.append('prix',this.state.prix);
    fetch('https://lasalasa.herokuapp.com/profil/'+this.props.match.params._id, {
      method: 'PUT',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `https://lasalasa.herokuapp.com/profil/${body.image}` });
        console.log('ity ilay body.fil',body.image);
       
      });
    });
    this.setState({
      titre: '',
      description:'',
       date:'',
       debut:'',
       dure:'',
       place_dispo:'',
      place_reserve:'',
      prix:'',
       image:''
    })
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage }  id="formulaireAtelier"
       
      >
        <h2 id="legende">Completez les formulaire ci-dessous</h2>
       <div className="form-group">
        <label>titre:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="titre" required/><br></br></div>
          <div className="form-group">
          <label>Description:</label>
        <input type="textarea" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="description"  required/><br></br></div>
          <div className="form-group">
        <label>date:</label>
        <input type="date" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="date"  required/><br></br> </div>
          <div className="form-group">
          <label>Debut:</label>
        <input type="time" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="debut"  required/><br></br> </div>
          <div className="form-group">
          <label>Durée:</label>
        <input type="time" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="dure"  required/><br></br>  </div>
          <div className="form-group"></div> 
          <label>Nombre de place disponible:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="place_dispo" required/><br></br> 
          <div className="form-group">
          <label>Nombre de place reservée:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="place_reserve" required/><br></br> </div> 
          <div className="form-group"> 
          <label>Prix:</label>
        <input type="text"  id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="prix"  required/><br></br>   </div> 
      
          <input id='champ' ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" id="buttonUpload" />
       
          <input type="submit" class="fadeIn fourth" value="Ajouter" className='bou' id="bouttonAjouter"/>
      </form>
    );
  }
}

export default Modifier;