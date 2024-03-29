import React from 'react';

interface Applicant {
	nickname: string;
	imageUrl: string;
	name: string;
	email: string;
	role?: string[];
	school: string;
	rate: number;
	year: number;
	comment: string;
	isBookmark?: boolean;
}
export type { Applicant };

const applicantList: Applicant[] = [
	{
		nickname: '지원투',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/3d31/266c/b4e2b4773a0682af9a42fabb250a9d02?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TktynfgbHdnilaMCkMMl5PICIApL8Bk1Vmhez9IYih8JfPbQ3akPmgpK8y0T9kBLNSx6mx6TuOd7d8WOCblUl1PIlrRlfvMPPb5GjFiP0l8321tgRCTQFfjnl8m1SM9Ux789Rv7q7SAFin9GdTWBcb6E1SgfdBY8oKAthbBKl2o0ekcXA5bmrEjdZAMUe1zVO289tyXCYJWBIEVM7NStSCYJW3vy1OQroHr7THPma8mow-8wj9bOR0prlQIPdazKjlBeDVxI2j4gxam1ifGFla~J8WhN3edDGbK4uyMqxiLX6R53PwZx1LhOPdsdL6LEGTk4TWrXqQlddaKGe0hxyA__',
		name: '송지원',
		email: 'jiwon@kw.ac.kr',
		role: ['디자인', '#F7E8FB'],
		school: '세종대학교',
		rate: 4.5,
		year: 18,
		comment: '웹 디자이너로 프로젝트를 같이 하고싶습니다!',
		isBookmark: true,
	},
	{
		nickname: 'suyeonee',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/af42/75de/a21e2b04d7b7aaec5f28132b3d92997e?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKcq1JCXEgi8bfb8UA1EG-RhNzmdLtjuTTBeas4fgE8rQrIdTg4iIFXP4FvxqyGnIg7Ti2jJS0fiEt6E9KorpQzpi9QQqBvMYeOpGXcolWK~mlvkwupLZFB7kTr~sl7U-ag5m3NPfMg~klbBIwC7nEEZ9znKrRPLFKG5aYCztPT1bJFfGOThd~joRH7efYte6ee9sGVq983Yu6Voy3mt-koZEiGnNMdpnVuDRrlrN8JVgXF-uIBmq7G06pyTVG-fxMg-XKW~UDHOAYesyK93QFNw01HRDgy0DlTqAJIfQmXKA7IhdtrJ8KfNAkQHMcUgbDY40Uw6Baah0WEcF0dVaw__',
		name: '김수연',
		email: 'jiwon@kw.ac.kr',
		role: ['프론트엔드', '#EAF7FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 21,
		comment: '프론트로 프로젝트를 같이 하고싶습니다!',
		isBookmark: true,
	},
	{
		nickname: 'yeom',

		imageUrl:
			'https://s3-alpha-sig.figma.com/img/ee6f/b8ee/ccb283f80561bee0a48bce0fd80eb82f?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8Pq6GETzgjxFhFqQ6bK6M9LJyxbg6JvlRwN7m2t5UsLhaJhteMJHP1RP9Fj6JiyNOeS4FBniM0BhM-dtcufUh53R0~69wlZVjUM7ptTZjI3MIgdweB3YXJQqU2Cc2XxNzJVy9Ck8b92YMRdFv80OJ-oYM0twD5gdAV7nOWEZbemjYmfSaQmFSiyBqwLvUIIQHeiZ0jY7384ipkln0XxbIjyl-XS95JbaNh5ijnPRY-BcBYPSZBAytTnuskFi7YeoAypX0rUgiiVmswA5MMWuh4YO5UE9nPb7SF~7Ubao9MHrcQYn6N3mHTNGV2VD6QEgqi9NZQ6fUH6fOF2RAHFig__',
		name: '염승준',
		email: 'jiwon@kw.ac.kr',
		role: ['프론트엔드', '#EAF7FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 19,
		comment: '프론트로 프로젝트를 같이 하고싶습니다!',
		isBookmark: true,
	},
	{
		nickname: 'songminkyu',
		name: '송민규',
		imageUrl: '',
		email: 'jiwon@kw.ac.kr',
		role: ['백엔드', '#E0E6FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 18,
		comment: '백엔드로 프로젝트를 같이 하고싶습니다!',
		isBookmark: false,
	},
	{
		nickname: 'Goder',
		name: '나부겸',
		imageUrl: '',
		email: 'jiwon@kw.ac.kr',
		role: ['백엔드', '#E0E6FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 19,
		comment: '백엔드로 프로젝트를 같이 하고싶습니다!',
		isBookmark: false,
	},
];

const SMALL_BOTTOM_ARROW_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
		<path
			d='M1.25 1.25L6.43241 6.6716C6.7318 6.98481 7.23355 6.9799 7.52675 6.66089L12.5 1.25'
			stroke='#373F41'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);

const SMALL_TOP_ARROW_BUTTON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
		<path
			d='M12.5 7.25L7.31759 1.8284C7.0182 1.51519 6.51645 1.5201 6.22324 1.83911L1.25 7.25'
			stroke='#373F41'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);

export { applicantList, SMALL_BOTTOM_ARROW_ICON, SMALL_TOP_ARROW_BUTTON };
