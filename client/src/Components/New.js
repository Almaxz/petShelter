import React, { Component } from 'react';
import axios from 'axios';

class New extends Component {
  constructor(props) {
		super(props);
		this.state = {
			newPet: {
				name: "",
				type: "",
				description: "",
				skillOne: "",
				skillTwo: "",
				skillThree: "",
				// image: "default"
			},
			errors: {}
		}
	}
	
	change = (key, e) => {
		let p = {...this.state.newPet};
		p[key] = e.target.value;
		this.setState({newPet: p});
  }
  
	addPet = e => {
		e.preventDefault();
		axios.post("http://localhost:8000/api/pets", this.state.newPet)
			.then( res => {
        if(res.data.errors){
					this.setState({ errors: res.data.errors.errors })
				} else {
					this.props.history.push("/");
				}
			})
	}

	render() {
		return (
      <div style={{ width: "80%", margin: "0 auto" }}>
        <fieldset>
          <form onSubmit={this.addPet} style={{ fontSize: "1.2rem"}}>
            <fieldset>
              <legend>Detail: </legend>
              <div className="form-group">
                <label>Pet Name: </label>
                <input type="text" onChange={this.change.bind(this, "name")} />
              </div>

              <div className="form-group">
                <label>Pet Species: </label>
                <input type="text" onChange={this.change.bind(this, "species")} />
              </div>
              <div className="form-group">
                <label>Pet Breed: </label>
                <input type="text" onChange={this.change.bind(this, "breed")} />
              </div>

              <div className="form-group">
                <label>Pet Description: </label>
                <input type="text" onChange={this.change.bind(this, "description")} />
              </div>
            </fieldset>
            
            <fieldset>
              <legend>Skills: </legend>
              <div className="form-group">
                <label>Skill One: </label>
                <input type="text" onChange={this.change.bind(this, "skillOne")} />
              </div>
              <div className="form-group">
                <label>Skill Two: </label>
                <input type="text" onChange={this.change.bind(this, "skillTwo")} />
              </div>
              <div className="form-group">
                <label>Skill Three: </label>
                <input type="text" onChange={this.change.bind(this, "skillThree")} />
                
              </div>
            </fieldset><br/>

            <input type="submit" className="btn-submit" style={{ width: "50%", padding: ".5rem 1rem", marginLeft: "25.05%", backgroundColor: "#13144a", color: "white", fontWeight: "bold", fontSize: "1rem" }} />
            
          </form>
        </fieldset>
        <fieldset style={{ margin: "5% 0 0 24.95%", width: "50%", textAlign: "center" }}>
          <legend style={{ marginLeft: "45%", fontSize: "1rem", fontWeight: "bold" }}>Validations</legend>
          {
            this.state.errors.name ?
            <p>{this.state.errors.name.message}</p>:
            ""
          }
          {
            this.state.errors.species ?
            <p>{this.state.errors.species.message}</p>:
            ""
          }
          {
            this.state.errors.breed ?
            <p>{this.state.errors.breed.message}</p>:
            ""
          }
          {
            this.state.errors.description ?
            <p>{this.state.errors.description.message}</p>:
            ""
          }
        </fieldset>
      </div>
		)
	}
}


export default New;
