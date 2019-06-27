import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {

	constructor(props){
		super(props);
		this.state = {
			pet: {
				name: "",
				species: "",
				breed: "",
				description: "",
				skillOne: "",
				skillTwo: "",
				skillThree: "",
				like: 0,
				liked: false
			},
			errors: {}
		};
		this.addLike = this.addLike.bind(this);
	}

	componentDidMount =() => {
		console.log(this.props.match.params._id);
		axios.get(`/api/pets/${this.props.match.params._id}`)
		.then( res => {
				this.setState({ pet: res.data.pet });
		})
		.catch( err => {
				console.log(err);
		});
	}

	addLike = e => {
		let like = this.state.pet.like + 1;
		this.state.pet.like ++;
		this.state.pet.liked = true;
		this.setState({ 
			pet: {...this.state.pet, like: like, liked: true}
		});
		axios.put(`/api/pets/${this.props.match.params._id}`, this.state.pet)
			.then( res =>{
				this.componentDidMount();
			})
			.catch( err => {
					console.log(err);
			});
	}

	delete = e => {
			axios.delete(`/api/pets/${this.props.match.params._id}`)
			.then(res =>{
					this.props.history.push("/");
			})
			.catch( err =>{
					console.log(err);

		});
	}
	render(){
		return(
			<div style={{ marginTop: "1%" }}>
    <fieldset style={{ width: "40%", margin: "0 auto", padding: "1%" }}>
     <fieldset style={{ width: "80%", margin: "0 auto" }}>
      <legend style={{ fontSize: "1.5rem", fontWeight: "600" }}>Detail:</legend>
      <div style={{ display: "flex", justifyContent: "center" }}>
       <div>
        <h3>Pet Name: {this.state.pet.name}</h3>
        <h3>Pet Species: {this.state.pet.species}</h3>
        <h3>Pet Breed: {this.state.pet.breed}</h3>
        <h3>Description: {this.state.pet.description}</h3>
       </div>
      </div>
     </fieldset>

     <fieldset style={{ width: "80%", margin: "0 auto" }}>
      <legend style={{ fontSize: "1.5rem", fontWeight: "600" }}>Skills:</legend>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
       <div>
        <h2>Skill One:  {this.state.pet.skillOne}</h2>
        <h2>Skill Two:  {this.state.pet.skillTwo}</h2>
        <h2>Skill Three:  {this.state.pet.skillThree}</h2>
        <h3>Likes: {this.state.pet.like} </h3>
       </div>
       <div>
        <br/><br/>
        <button disabled={this.state.pet.liked} onClick={this.addLike} style={{ padding: "10%" , minWidth: "10rem", borderRadius: "1rem" }}>Like this pet</button>
        <br/><br/><br/>&nbsp;
        <button onClick={this.delete} style={{ padding: "10%", minWidth: "10rem", borderRadius: "1rem" }}>Adopt this pet</button>
       </div>
      </div>
     </fieldset>
    </fieldset>
			</div>
		)
	}
}
export default Detail;