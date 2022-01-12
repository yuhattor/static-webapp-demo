import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bulma.css';
import axios from 'axios';


const Users = ({user}) => {
	return (
	  <div className="box media">
	    <figure className="image is-96x96 media-left">
		<img src={user.image} alt={user.name} />
	    </figure>
	    <div className="media-content">
	      <p className="subtitle">{user.name}</p>
	      <p>{user.email}</p>
	    </div>
	  </div>
	)
      }
      
      class App extends React.Component {
	state = {
	  users: [],
	  isLoading: true,
	  errors: null
	};
      
	getUsers() {
	  axios
	    .get("/api/backend")
	    //.get("https://randomuser.me/api/?results=5")
	    .then(response =>
	      response.data.results.map(user => ({
		name: `${user.time} ${user.time}`,
		username: `${user.time}`,
		email: `${user.time}`,
		image: `${user.time}`
	      }))
	    )
	    .then(users => {
	      this.setState({
		users,
		isLoading: false
	      });
	    })
	    .catch(error => this.setState({ error, isLoading: false }));
	}
      
	componentDidMount() {
	  this.getUsers();
	}
      
	render() {
	  const { isLoading, users } = this.state;
	  return(
	  <section className="section">
	      <div className="container">
		{!isLoading ? (
		  users.map(user => {
		    return <Users key={user.username} user={user} />;
		  })
		) : (
		  <p>Loading...</p>
		)}
	      </div>
      
	  </section>
	);
	}
      }
      
      ReactDOM.render(<App />,
      document.getElementById("root"))