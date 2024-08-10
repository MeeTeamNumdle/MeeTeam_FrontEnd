import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import S from './DeadlineSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';
import { DATE_ICON } from '../../assets';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { WEEKDAY, MONTH } from './dateData';

interface RecruitmentDeadLine {
	type?: string;
}

const DeadlineSelect = ({ type }: RecruitmentDeadLine) => {
	const [endDate, setEndDate] = useState(new Date());
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [isClickMonth, setIsClickMonth] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const onChangeDate = (date: Date) => {
		if (date) {
			setEndDate(() => {
				const result = simpleDate(date);
				setInfo(prevInfo => ({ ...prevInfo, deadline: result }));
				return date;
			});
		}
		setIsClicked(true);
	};
	return (
		<S.DeadlineSelect $isClicked={isClicked}>
			<DatePicker
				formatWeekDay={nameOfDay => WEEKDAY[nameOfDay]}
				className={!type ? 'date-picker' : 'date-picker date-picker__recruitment-deadline'}
				selected={new Date(info.deadline as string)}
				showPopperArrow={false}
				onChange={onChangeDate}
				minDate={new Date()}
				placeholderText={type && '구인 글 마감일을 선택해주세요.'}
				dateFormat='yy년 MM월 dd일'
				tabIndex={-1}
				icon={DATE_ICON}
				dayClassName={d =>
					d.getDate() === endDate!.getDate() && d.getMonth() === endDate!.getMonth()
						? 'selectedDay'
						: 'unselectedDay'
				}
				renderCustomHeader={({
					date,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
				}) => (
					<article className='container-header'>
						<section className='header-month'>
							<span onClick={() => setIsClickMonth(prev => !prev)}>{date.getFullYear()}</span>
							<span>{MONTH[date.getMonth()]}</span>
						</section>
						<section className='header-btns'>
							<button
								type='button'
								onClick={decreaseMonth}
								className='month-btn'
								disabled={prevMonthButtonDisabled}
							>
								<SlArrowLeft />
							</button>
							<button
								type='button'
								onClick={increaseMonth}
								className='month-btn'
								disabled={nextMonthButtonDisabled}
							>
								<SlArrowRight />
							</button>
						</section>
					</article>
				)}
			/>
		</S.DeadlineSelect>
	);
};

export default React.memo(DeadlineSelect);
