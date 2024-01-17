import React, { useState } from 'react';
import S from './ApplicantCard.styled';
import { Applicant, RadiusProfile } from '../../../../..';

const ApplicantCard = (props: { applicant: Applicant }) => {
	const APPLICANT_PROFILE_ICON = (
		<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
			<path
				d='M2.32588 8.7543C2.59202 8.12728 3.2134 7.6875 3.9375 7.6875H6.5625C7.2866 7.6875 7.90798 8.12728 8.17412 8.7543M7 4.40625C7 5.37275 6.2165 6.15625 5.25 6.15625C4.2835 6.15625 3.5 5.37275 3.5 4.40625C3.5 3.43975 4.2835 2.65625 5.25 2.65625C6.2165 2.65625 7 3.43975 7 4.40625ZM9.625 5.5C9.625 7.91625 7.66625 9.875 5.25 9.875C2.83375 9.875 0.875 7.91625 0.875 5.5C0.875 3.08375 2.83375 1.125 5.25 1.125C7.66625 1.125 9.625 3.08375 9.625 5.5Z'
				stroke='black'
				strokeWidth='0.75'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const APPLICANT_SCHOOL_ICON = (
		<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
			<path
				d='M1.3125 9.43735H9.1875M2.625 8.12485V4.62485M4.375 8.12485V4.62485M6.125 8.12485V4.62485M7.875 8.12485V4.62485M8.75 3.31235L5.4355 1.24079C5.3682 1.19873 5.33456 1.1777 5.29847 1.1695C5.26656 1.16225 5.23344 1.16225 5.20153 1.1695C5.16544 1.1777 5.1318 1.19873 5.0645 1.24079L1.75 3.31235H8.75Z'
				stroke='black'
				strokeWidth='0.75'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const APPLICANT_EMAIL_ICON = (
		<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
			<path
				d='M0.875 3.3125L4.44715 5.81301C4.73641 6.01549 4.88105 6.11673 5.03837 6.15595C5.17733 6.19059 5.32267 6.19059 5.46163 6.15595C5.61895 6.11673 5.76359 6.01549 6.05285 5.81301L9.625 3.3125M2.975 9H7.525C8.26007 9 8.6276 9 8.90836 8.85695C9.15532 8.73111 9.35611 8.53033 9.48195 8.28336C9.625 8.0026 9.625 7.63507 9.625 6.9V4.1C9.625 3.36493 9.625 2.9974 9.48195 2.71664C9.35611 2.46967 9.15532 2.26889 8.90836 2.14305C8.6276 2 8.26007 2 7.525 2H2.975C2.23993 2 1.8724 2 1.59164 2.14305C1.34467 2.26889 1.14389 2.46967 1.01805 2.71664C0.875 2.9974 0.875 3.36493 0.875 4.1V6.9C0.875 7.63507 0.875 8.0026 1.01805 8.28336C1.14389 8.53033 1.34467 8.73111 1.59164 8.85695C1.8724 9 2.23993 9 2.975 9Z'
				stroke='black'
				strokeWidth='0.75'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const APPLICANT_SPEECH_BUBBLE_ICON = (
		<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
			<path
				d='M3.0625 3.96875H5.25M3.0625 5.5H6.5625M3.0625 8.125V9.14678C3.0625 9.3799 3.0625 9.49646 3.11029 9.55633C3.15185 9.6084 3.21487 9.63869 3.28149 9.63861C3.35809 9.63853 3.44911 9.56572 3.63114 9.42009L4.67478 8.58518C4.88798 8.41462 4.99457 8.32934 5.11328 8.2687C5.21859 8.2149 5.33069 8.17557 5.44653 8.1518C5.57711 8.125 5.71362 8.125 5.98664 8.125H7.0875C7.82257 8.125 8.1901 8.125 8.47086 7.98195C8.71782 7.85611 8.91861 7.65533 9.04445 7.40836C9.1875 7.1276 9.1875 6.76007 9.1875 6.025V3.6625C9.1875 2.92743 9.1875 2.5599 9.04445 2.27914C8.91861 2.03217 8.71782 1.83139 8.47086 1.70555C8.1901 1.5625 7.82257 1.5625 7.0875 1.5625H3.4125C2.67743 1.5625 2.3099 1.5625 2.02914 1.70555C1.78217 1.83139 1.58139 2.03217 1.45555 2.27914C1.3125 2.5599 1.3125 2.92743 1.3125 3.6625V6.375C1.3125 6.78186 1.3125 6.98529 1.35722 7.1522C1.47859 7.60513 1.83237 7.95891 2.2853 8.08028C2.45221 8.125 2.65564 8.125 3.0625 8.125Z'
				stroke='black'
				strokeWidth='0.75'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const APPLICANT_EMPTY_BOOK_MARK_ICON = (
		<svg xmlns='http://www.w3.org/2000/svg' width='23' height='24' viewBox='0 0 23 24' fill='none'>
			<path
				d='M11.0782 3.98704C11.2943 3.54929 11.4023 3.33041 11.549 3.26048C11.6766 3.19963 11.8249 3.19963 11.9525 3.26048C12.0992 3.33041 12.2072 3.54929 12.4233 3.98704L14.4733 8.14014C14.5371 8.26937 14.569 8.33399 14.6156 8.38416C14.6569 8.42858 14.7064 8.46457 14.7613 8.49014C14.8234 8.51902 14.8947 8.52944 15.0373 8.55028L19.6229 9.22053C20.1058 9.29111 20.3472 9.3264 20.459 9.44434C20.5562 9.54696 20.6019 9.68796 20.5834 9.8281C20.5621 9.98916 20.3873 10.1594 20.0377 10.4999L16.7208 13.7306C16.6174 13.8313 16.5657 13.8816 16.5324 13.9416C16.5028 13.9946 16.4839 14.0529 16.4766 14.1132C16.4683 14.1812 16.4805 14.2524 16.5049 14.3946L17.2876 18.9578C17.3701 19.4391 17.4114 19.6797 17.3338 19.8225C17.2663 19.9468 17.1464 20.0339 17.0074 20.0597C16.8476 20.0893 16.6315 19.9757 16.1993 19.7484L12.0998 17.5925C11.9721 17.5254 11.9082 17.4918 11.841 17.4786C11.7814 17.4669 11.7201 17.4669 11.6605 17.4786C11.5933 17.4918 11.5294 17.5254 11.4017 17.5925L7.30222 19.7484C6.87003 19.9757 6.65393 20.0893 6.49414 20.0597C6.35512 20.0339 6.23516 19.9468 6.16767 19.8225C6.09011 19.6797 6.13138 19.4391 6.21393 18.9578L6.99656 14.3946C7.02096 14.2524 7.03316 14.1812 7.02491 14.1132C7.0176 14.0529 6.99865 13.9946 6.96911 13.9416C6.93575 13.8816 6.88405 13.8313 6.78066 13.7306L3.46376 10.4999C3.11417 10.1594 2.93937 9.98916 2.9181 9.8281C2.89959 9.68796 2.94531 9.54696 3.04253 9.44434C3.15427 9.3264 3.39571 9.29111 3.87859 9.22053L8.46415 8.55028C8.60675 8.52944 8.67806 8.51902 8.74015 8.49014C8.79514 8.46457 8.84463 8.42858 8.88591 8.38416C8.93252 8.33399 8.96442 8.26937 9.02821 8.14014L11.0782 3.98704Z'
				stroke='#373F41'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const APPLICANT_FULL_BOOK_MARK_ICON = (
		<svg xmlns='http://www.w3.org/2000/svg' width='23' height='24' viewBox='0 0 23 24' fill='none'>
			<path
				d='M6.42579 20.4284L6.49414 20.0597L6.4258 20.4284C6.61796 20.464 6.79782 20.4056 6.93975 20.3467C7.08369 20.287 7.25844 20.1951 7.46134 20.0884L7.47677 20.0803L11.5762 17.9244C11.6436 17.889 11.6809 17.8695 11.7097 17.8564C11.7242 17.8497 11.7314 17.8471 11.7339 17.8463C11.745 17.8443 11.7564 17.8443 11.7676 17.8463C11.7701 17.8471 11.7773 17.8497 11.7918 17.8564C11.8206 17.8695 11.8579 17.889 11.9253 17.9244L16.0247 20.0803L16.0402 20.0884C16.2431 20.1951 16.4178 20.287 16.5618 20.3467C16.7037 20.4056 16.8835 20.464 17.0757 20.4284L17.0074 20.0597L17.0757 20.4284C17.3259 20.382 17.5419 20.2252 17.6634 20.0015C17.7566 19.8298 17.7567 19.6407 17.7446 19.4875C17.7323 19.3321 17.6989 19.1375 17.6601 18.9116L17.6572 18.8944L16.8745 14.3312C16.8617 14.2562 16.8547 14.2146 16.8511 14.1832C16.8492 14.1674 16.849 14.1597 16.849 14.1571C16.8506 14.1456 16.8542 14.1345 16.8598 14.1244C16.8574 14.1286 16.8584 14.1247 16.8765 14.1051C16.8978 14.0818 16.9279 14.0524 16.9825 13.9992L20.2994 10.7685L20.3119 10.7564C20.476 10.5965 20.6174 10.4589 20.7186 10.3405C20.8185 10.2238 20.9296 10.0709 20.9552 9.87719C20.9885 9.62495 20.9062 9.37114 20.7312 9.18644C20.5968 9.04461 20.4171 8.98598 20.2678 8.95007C20.1164 8.91365 19.9211 8.88512 19.6944 8.852L19.6771 8.84947L15.0916 8.17923C15.0163 8.16823 14.9747 8.16201 14.9438 8.15573C14.9169 8.15026 14.9145 8.14779 14.9195 8.15011C14.9088 8.14517 14.8992 8.13828 14.8911 8.1298C14.8896 8.1277 14.8853 8.12135 14.8775 8.10748C14.862 8.08001 14.8432 8.04235 14.8096 7.97415L12.7595 3.82106L12.7518 3.80538C12.6504 3.59989 12.563 3.42289 12.4817 3.29002C12.4015 3.15899 12.2903 3.00608 12.1139 2.92198C11.8842 2.81246 11.6173 2.81246 11.3876 2.92198C11.2112 3.00608 11.1 3.15899 11.0198 3.29002C10.9385 3.4229 10.8511 3.59991 10.7497 3.80543L10.742 3.82106L8.69194 7.97415C8.65828 8.04235 8.63955 8.08 8.62404 8.10748C8.61622 8.12134 8.61189 8.12769 8.61035 8.12979C8.60255 8.13798 8.59332 8.14469 8.58313 8.14959C8.58065 8.1504 8.57328 8.15256 8.55768 8.15573C8.52676 8.16201 8.48517 8.16823 8.40991 8.17923L3.82435 8.84947L3.80709 8.852C3.58041 8.88512 3.38515 8.91365 3.2337 8.95007C3.08436 8.98598 2.90466 9.04461 2.7703 9.18643L3.04253 9.44434L2.7703 9.18643C2.59531 9.37114 2.51302 9.62495 2.54633 9.87719C2.57191 10.0709 2.68301 10.2238 2.78287 10.3405C2.88413 10.4589 3.0255 10.5966 3.18963 10.7564L3.20211 10.7685L6.51901 13.9992L6.78066 13.7306L6.51901 13.9992C6.57357 14.0524 6.60365 14.0818 6.62503 14.1051C6.63583 14.1169 6.64053 14.1229 6.64206 14.125C6.64744 14.135 6.65097 14.1459 6.65248 14.1571C6.65248 14.1597 6.65226 14.1674 6.65044 14.1832C6.64683 14.2146 6.63984 14.2562 6.62696 14.3312L5.84432 18.8944L5.84138 18.9116C5.80261 19.1375 5.76923 19.3321 5.75693 19.4875C5.7448 19.6407 5.74486 19.8298 5.83815 20.0015L6.16767 19.8225L5.83815 20.0015C5.95962 20.2252 6.17555 20.382 6.42579 20.4284Z'
				fill='url(#paint0_linear_3621_1181)'
				stroke='url(#paint1_linear_3621_1181)'
				strokeWidth='0.75'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_3621_1181'
					x1='21.7016'
					y1='20.0643'
					x2='2.64512'
					y2='20.0643'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#5F5CEC' stopOpacity='0.8' />
					<stop offset='1' stopColor='#D85CEC' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_3621_1181'
					x1='21.7016'
					y1='20.0643'
					x2='2.64512'
					y2='20.0643'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#5F5CEC' stopOpacity='0.8' />
					<stop offset='1' stopColor='#D85CEC' />
				</linearGradient>
			</defs>
		</svg>
	);

	const [bookMark, setBookMark] = useState(props.applicant.isBookmark);

	return (
		<S.ApplicantCardLayout>
			<div className='applicant-card__profile-column'>
				<RadiusProfile size='middle' url={props.applicant.imageUrl} />
				<div>{props.applicant.nickName}</div>
				<div className='applicant-card__small-text'>
					{props.applicant.year}학번, {props.applicant.rate}
				</div>
			</div>
			<div className='applicant-card__information-column'>
				<div className='applicant-card__information-row'>
					<div className='applicant-card__label-row'>
						<span>{APPLICANT_PROFILE_ICON}</span>
						<div className='applicant-card__label-title'>이름</div>
					</div>
					<div className='applicant-card__informaion-content'>{props.applicant.name}</div>
				</div>
				<div className='applicant-card__information-row'>
					<div className='applicant-card__label-row'>
						<span>{APPLICANT_SCHOOL_ICON}</span>
						<div className='applicant-card__label-title'>학교</div>
					</div>
					<div className='applicant-card__informaion-content'>{props.applicant.school}</div>
				</div>
				<div className='applicant-card__information-row'>
					<div className='applicant-card__label-row'>
						<span>{APPLICANT_EMAIL_ICON}</span>
						<div className='applicant-card__label-title'>이메일</div>
					</div>
					<div className='applicant-card__informaion-content'>{props.applicant.email}</div>
				</div>
				<div className='applicant-card__information-row'>
					<div className='applicant-card__label-row'>
						<span>{APPLICANT_SPEECH_BUBBLE_ICON}</span>
						<div className='applicant-card__label-title'>전할 말</div>
					</div>
					<div className='applicant-card__informaion-content'>{props.applicant.comment}</div>
				</div>
			</div>
			<div className='applicant-card__button-column'>
				<S.ApplicantCardProfileView>프로필 보기</S.ApplicantCardProfileView>
				<div className='applicant-card__button-row'>
					<S.ApplicantCardApproveButton>승인</S.ApplicantCardApproveButton>
					<S.ApplicantCardRefuseButton>거절</S.ApplicantCardRefuseButton>
				</div>
			</div>
			<S.ApplicantCardBookMarkButton type='button' onClick={prev => setBookMark(!prev)}>
				{bookMark ? APPLICANT_FULL_BOOK_MARK_ICON : APPLICANT_EMPTY_BOOK_MARK_ICON}
			</S.ApplicantCardBookMarkButton>
		</S.ApplicantCardLayout>
	);
};

export default ApplicantCard;
