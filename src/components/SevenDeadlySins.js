import React, { Fragment } from 'react';

import Sin from './Sin';

const sins = [
	{
		name: 'Meliodas of the Demon clan',
		identity: 'Dragon Sin: Sin of Wrath',
		age: 3500,
		bestFriend: 'Ban'
	},

	{
		name: 'Deean of the Giant race',
		identity: 'Serpant Sin: Sin of Envy',
		age: 3450,
		bestFriend: 'King'
	},

	{
		name: 'Ban the undead',
		identity: 'Fox Sin: Sin of Greed',
		age: 45,
		bestFriend: 'Meliodas'
	},

	{
		name: 'Gowther the Doll',
		identity: 'Goat Sin: Sin of Lust',
		age: 3000,
		bestFriend: 'What is a Best Friend?'
	},

	{
		name: 'Merlin the Wizard',
		identity: 'Boar Sin: Sin of Gluttony',
		age: 4000,
		bestFriend: 'King Arthur'
	},

	{
		name: 'Escobar',
		identity: 'Lion Sin: Sin of Pride',
		age: 4000,
		bestFriend: 'King Arthur'
	},

	{
		name: 'Harliquin, King of the Fairies',
		identity: 'Bear Sin: Sin of Sloth',
		age: 10000,
		bestFriend: 'A Helmet'
	},

	{
		name: 'Elizabeth, 3rd Princess of Liones and Druid',
		identity: 'Reincarnation of Liz',
		age: 3000,
		bestFriend: 'Meliodas'
	},
	{
		name: 'Liz the Druid',
		identity: "Meliodas' Girlfriend",
		age: 'deceased',
		bestFriend: 'Meliodas'
	},
	{
		name: 'Hawk the Talking Pig',
		identity: 'Captain of the Order of Scraps',
		age: '16',
		bestFriend: 'Elizabeth'
	}
];

function SevenDeadlySins() {
	return (
		<Fragment>
			<h1>Seven Deadly Sins:</h1>
			{sins.map(sin => <Sin sin={sin} />)}
		</Fragment>
	);
}

export default SevenDeadlySins;
