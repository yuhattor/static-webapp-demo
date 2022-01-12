import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bulma.css';
import axios from 'axios';


const Sessions = ({session}) => {
	return (
                <div class="card">
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-4">{session.session_name}</p>
                          <p class="subtitle is-6">{session.company}<br />{session.name}</p>
                        </div>
                      </div>
                    
                      <div class="content">
                {session.description}
                <br />
                <span class="tag is-info">#{session.session_id}</span>
                <br />
                      <time datetime="2016-1-1">{session.time}</time>
                    </div>
                  </div>
                <hr></hr>
                </div>
	)
      }
      
      class App extends React.Component {
	state = {
	  sessions: [],
	  isLoading: true,
	  errors: null
	};
      
	getSessions() {
	  axios
	    .get("/api/backend")
	    //.get("http://localhost:3000/api/")
	    .then(response =>
	      response.data.results.map(session => ({
		time: `${session.time}`,
		session_id: `${session.id}`,
		session_name: `${session.session_name}`,
		company: `${session.company}`,
		name: `${session.name}`,
		description: `${session.description}`
	      }))
	    )
	    .then(sessions => {
	      this.setState({
		sessions,
		isLoading: false
	      });
	    })
	    .catch(error => this.setState({ error, isLoading: false }));
	}
      
	componentDidMount() {
	  this.getSessions();
	}
      
	render() {
	  const { isLoading, sessions } = this.state;
	  return(
	  <section className="section">
	      <div className="container">
		{!isLoading ? (
		  sessions.map(session => {
		    return <div><Sessions key={session.test} session={session} /></div>;
		  })
		) : (
		  <p><center>ローディング...</center></p>
		)}
	      </div>
      
	  </section>
	);
	}
      }
      
      ReactDOM.render(<App />,
      document.getElementById("root"))