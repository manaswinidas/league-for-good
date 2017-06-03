// Store all the information for the links for each tab
import React from 'react';
import AddIcon from 'material-ui/svg-icons/content/add';
import AddPersonIcon from 'material-ui/svg-icons/social/person-add';
import EditIcon from 'material-ui/svg-icons/image/edit';
import ArchiveIcon from 'material-ui/svg-icons/content/archive';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import UpdateIcon from 'material-ui/svg-icons/action/update';
import ListIcon from 'material-ui/svg-icons/action/view-list';

import * as LINK from '../../routes';

// Links that the user can access to modify teams
const teamLinks = [
	{
		description: 'View your current teams.',
		label: 'ViewTeams',
		icon: <ListIcon />,
		url: LINK.TEAM_LIST,
	},
	{
		description: 'Add new teams to your league.',
		label: 'AddTeam',
		icon: <AddIcon />,
		url: LINK.TEAM_ADD_FORM,
	},
];

// Links that the user can access to modify players
const playerLinks = [
	{
		description: 'View a list of all players',
		label: 'ViewPlayers',
		icon: <ListIcon />,
		url : LINK.PLAYER_LIST,
	},
	{
		description: 'Manually add a new player to your league.',
		label: 'AddPlayer',
		icon: <AddPersonIcon />,
		url: LINK.PLAYER_ADD_FORM,
	},
	{
		description: 'Email a form to allow players to register for your league.',
		label: 'EmailPlayer',
		icon: <EmailIcon />,
	},
	{
		description: 'Assign a player to a team.',
		label: 'AssignPlayer',
		icon: <AssignmentIcon />,
	},
	{
		description: 'Update a players contact information.',
		label: 'UpdatePlayer',
		icon: <UpdateIcon />,
		url: LINK.PLAYER_UPDATE_FORM,
	},
];

// Links for managing general league settings
const settingsLinks = [
	{
		description: 'Add a new staff member to log into the dashboard.',
		label: 'AddStaff',
		icon: <AddPersonIcon />,
	},
];

// Tabs that hold the operations that can be performed
export const tabs = [
	{ name: 'Teams', links: teamLinks },
	{ name: 'Players', links: playerLinks },
	{ name: 'Seasons', links: [] },
	{ name: 'Settings', links: settingsLinks, routes: null },
];