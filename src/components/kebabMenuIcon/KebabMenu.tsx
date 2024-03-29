import React from 'react';
import S from './KebabMenuIcon.styled';

const KebabMenuIcon = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
	return (
		<S.KebabMenuIconLayout type='button' onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='23'
				height='23'
				viewBox='0 0 23 23'
				fill='none'
			>
				<path
					d='M11.25 12.4375C11.7678 12.4375 12.1875 12.0178 12.1875 11.5C12.1875 10.9822 11.7678 10.5625 11.25 10.5625C10.7322 10.5625 10.3125 10.9822 10.3125 11.5C10.3125 12.0178 10.7322 12.4375 11.25 12.4375Z'
					fill='black'
				/>
				<path
					d='M11.25 5.875C11.7678 5.875 12.1875 5.45527 12.1875 4.9375C12.1875 4.41973 11.7678 4 11.25 4C10.7322 4 10.3125 4.41973 10.3125 4.9375C10.3125 5.45527 10.7322 5.875 11.25 5.875Z'
					fill='black'
				/>
				<path
					d='M11.25 19C11.7678 19 12.1875 18.5803 12.1875 18.0625C12.1875 17.5447 11.7678 17.125 11.25 17.125C10.7322 17.125 10.3125 17.5447 10.3125 18.0625C10.3125 18.5803 10.7322 19 11.25 19Z'
					fill='black'
				/>
				<path
					d='M11.25 12.4375C11.7678 12.4375 12.1875 12.0178 12.1875 11.5C12.1875 10.9822 11.7678 10.5625 11.25 10.5625C10.7322 10.5625 10.3125 10.9822 10.3125 11.5C10.3125 12.0178 10.7322 12.4375 11.25 12.4375Z'
					stroke='black'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11.25 5.875C11.7678 5.875 12.1875 5.45527 12.1875 4.9375C12.1875 4.41973 11.7678 4 11.25 4C10.7322 4 10.3125 4.41973 10.3125 4.9375C10.3125 5.45527 10.7322 5.875 11.25 5.875Z'
					stroke='black'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11.25 19C11.7678 19 12.1875 18.5803 12.1875 18.0625C12.1875 17.5447 11.7678 17.125 11.25 17.125C10.7322 17.125 10.3125 17.5447 10.3125 18.0625C10.3125 18.5803 10.7322 19 11.25 19Z'
					stroke='black'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</S.KebabMenuIconLayout>
	);
};

export default KebabMenuIcon;
