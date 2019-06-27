import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class List extends Component {

	constructor(props){
		super(props);
		this.state = {
				pets: []
		}
	}

	componentDidMount =() => {
		axios.get("http://localhost:8000/api/pets")
		.then( res => {
			this.setState({pets: res.data.pets});
		})
		.catch( err =>{
			console.log(err);
		})
	}
	
	render(){
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th> 
							<th>Species</th>
							<th>Breed</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.pets.sort(function(a,b){
								if(a.species < b.species){return -1;}
								if(a.species > b.species){return 1;}
								return 0;
							}).map( pet =>
							<tr key={pet._id}>
								<td>{pet.name}</td>
								<td>{pet.species}</td> 
								<td>{pet.breed}</td> 
								<td>
									<Link to={`/pets/${pet._id}`}><button style={{ padding: "1%" , minWidth: "6rem", borderRadius: "1rem" }}>Detail</button></Link>
									&nbsp;
									<Link to={`/edit/${pet._id}`}><button style={{ padding: "1%" , minWidth: "6rem", borderRadius: "1rem" }}>Edit</button></Link>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}
export default List;