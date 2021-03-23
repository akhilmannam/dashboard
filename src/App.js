import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import ListUsers from './ListUsers';
import CreateUser from './CreateUser';
import EditUser from "./EditUser";
import Profile from './Profile';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

function App(){
	return(
		<Router>
			<div id='wrapper'>
				<Sidebar></Sidebar>
				<div id='content-wrapper' className='d-flex flex-column'>
					<div id="content">
						<div className="container-fluid">
							<Switch>
								<Route path="/dashboard">
									<Dashboard />
								</Route>
								<Route path="/create-user" exact>
									<CreateUser />
								</Route>
								<Route path="/users">
									<ListUsers />
								</Route>
								<Route path="/edit-user/:id" component={EditUser} exact/>
								<Route path="/profile/:id" component={Profile} exact/>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</Router>
	)
}

export default App;
