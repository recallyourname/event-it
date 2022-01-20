import avatars from './avatars'

const users = [
	{
		userId:1,
		email:"user1@gmail.com",
		password:"123456",
		events: [1, 2, 3, 6],
		firstname:"Max",
		lastname:"Mashkov",
		avatar: avatars[0].avatar
	},
	{
		userId:2,
		email:"user2@gmail.com",
		password:"123456",
		events: [1,2,3,4,5],
		firstname:"Igor",
		lastname:"Kutasevich",
		avatar: avatars[1].avatar
	},
	{
		userId:3,
		email:"user3@gmail.com",
		password:"123456",
		events: [3,4,5],
		firstname:"Nikita",
		lastname:"Vedkal",
		avatar: avatars[2].avatar
	},
	{
		userId:4,
		email:"user4@gmail.com",
		password:"123456",
		events: [5],
		firstname:"Vlad",
		lastname:"Nagibin",
		avatar: avatars[3].avatar
	},
];

export default users