import axios from 'axios';
import {  CREATE_LEAGUE, SELECT_LEAGUE } from './types';
import { ROOT_URL } from '../../globals';

//Post createLeague form to the server
//Send the response object to a reducer that will append it to a list of user's leagues
//Redirect the user

export function createLeague(body, redirectCallback) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/league/create`, body)
			.then(({data}) => {
				return dispatch({type: CREATE_LEAGUE, newLeague: data});
			})
			.then(()=> redirectCallback());
	};
}


export function selectLeague(leagueData) {
	
	return { type: SELECT_LEAGUE, leagueData };
}
