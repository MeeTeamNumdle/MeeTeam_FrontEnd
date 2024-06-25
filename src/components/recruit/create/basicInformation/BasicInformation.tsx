import React, { useState } from 'react';
import {
	DateSelect,
	WrapperScopeCategory,
	ContainerProcedure,
	ContainerCourse,
	MuiDatepicker,
} from '../../../index';
import S from './BasicInformation.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../../atom';
import { useValid } from '../../../../hooks';
import { simpleDate } from '../../../../utils';

const BasicInformation = () => {
	const [deadlineDate, setDeadlineDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({ ...prev, title: event.target.value }));
	};

	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const onChangeDate = (date: Date | null) => {
		if (date) {
			setDeadlineDate(() => {
				const result = simpleDate(date);
				setFormData(prevInfo => ({ ...prevInfo, deadline: result }));
				return date;
			});
		}
	};

	const onChangeStartDate = (date: Date | null) => {
		if (date) {
			setStartDate(() => {
				const result = simpleDate(date);
				setFormData(prevInfo => ({ ...prevInfo, proceedingStart: result }));
				return date;
			});
		}
	};

	const onChangeEndDate = (date: Date | null) => {
		if (date) {
			setEndDate(() => {
				const result = simpleDate(date);
				setFormData(prevInfo => ({ ...prevInfo, proceedingEnd: result }));
				return date;
			});
		}
	};

	return (
		<S.BasicInformation $isTitled={formData.title}>
			<section className='container-basic'>
				<section className='subtitle'>
					<h4>기본 정보</h4>
				</section>
				<section className='container-basic__inputs'>
					<article className='inputs-title'>
						<span className='input-subtitle'>
							구인글 제목 <span>{'*'}</span>
						</span>
						<input
							type='text'
							placeholder='40자 이내로 제목을 작성해주세요.'
							value={formData.title}
							onChange={onChangeTitle}
							maxLength={40}
							onKeyDown={onKeyDown}
						/>
						{isValid.isSubmitted && !isValid.isTitle && (
							<p className='valid-msg'>{validMessage.title}</p>
						)}
					</article>
					<article className='inputs-deadline'>
						<span className='input-subtitle'>
							구인글 마감일 <span>{'*'}</span>
						</span>
						<MuiDatepicker handleChange={date => onChangeDate(date)} />
						{isValid.isSubmitted && !isValid.isDeadline && (
							<p className='valid-msg'>{validMessage.deadline}</p>
						)}
					</article>
					<WrapperScopeCategory />
					<article className='inputs-dates'>
						<span className='input-subtitle'>
							진행 기간 <span>{'*'}</span>
						</span>
						<section className='container-dates'>
							<div className='start-date'>
								<MuiDatepicker handleChange={date => onChangeStartDate(date)} type='start' />
							</div>
							<div className='end-date'>
								<MuiDatepicker handleChange={date => onChangeEndDate(date)} type='end' />
								{isValid.isSubmitted && !isValid.isEndDate && (
									<p className='valid-msg'>{validMessage.endDate}</p>
								)}
							</div>
						</section>
					</article>
					<ContainerProcedure />
					<ContainerCourse />
				</section>
			</section>
			<hr className='under-info' />
		</S.BasicInformation>
	);
};

export default BasicInformation;
