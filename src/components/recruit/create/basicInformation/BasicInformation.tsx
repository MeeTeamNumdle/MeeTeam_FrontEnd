import React, { useEffect, useReducer } from 'react';
import {
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

interface BasicInformation {
	title?: string;
	scope?: string;
	category?: string;
	deadline?: string;
	startDate?: string;
	endDate?: string;
	proceedType?: string;
	course?: string | null;
	professor?: string | null;
}

type BasicAction =
	| { type: 'SET_TITLE'; payload: string | undefined }
	| { type: 'SET_SCOPE'; payload: string | undefined }
	| { type: 'SET_CATEGORY'; payload: string | undefined }
	| { type: 'SET_DEADLINE'; payload: string | undefined }
	| { type: 'SET_START_DATE'; payload: string | undefined }
	| { type: 'SET_END_DATE'; payload: string | undefined }
	| { type: 'SET_PROCEED_TYPE'; payload: string | undefined }
	| { type: 'SET_COURSE'; payload: string | null }
	| { type: 'SET_PROFESSOR'; payload: string | null };

const basicReducer = (state: BasicInformation, action: BasicAction): BasicInformation => {
	switch (action.type) {
		case 'SET_TITLE':
			return { ...state, title: action.payload };
		case 'SET_SCOPE':
			return { ...state, scope: action.payload };
		case 'SET_CATEGORY':
			return { ...state, category: action.payload };
		case 'SET_DEADLINE':
			return { ...state, deadline: action.payload };
		case 'SET_START_DATE':
			return { ...state, startDate: action.payload };
		case 'SET_END_DATE':
			return { ...state, endDate: action.payload };
		case 'SET_PROCEED_TYPE':
			return { ...state, proceedType: action.payload };
		case 'SET_COURSE':
			return { ...state, course: action.payload };
		case 'SET_PROFESSOR':
			return { ...state, professor: action.payload };
		default:
			return state;
	}
};

const BasicInformation = ({
	title = '',
	scope = '',
	category = '',
	deadline = '',
	startDate = '',
	endDate = '',
	proceedType = '',
	course = '',
	professor = '',
}: BasicInformation) => {
	const initialState: BasicInformation = {
		title,
		scope,
		category,
		deadline,
		startDate,
		endDate,
		proceedType,
		course,
		professor,
	};
	const [state, dispatch] = useReducer(basicReducer, initialState);
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'SET_TITLE', payload: event.target.value });
		setFormData(prev => ({ ...prev, title: event.target.value }));
	};

	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const onChangeDate = (date: Date | null) => {
		if (date) {
			const result = date ? date.toISOString() : '';
			dispatch({ type: 'SET_DEADLINE', payload: result });
			setFormData(prevInfo => ({ ...prevInfo, deadline: result }));
		}
	};

	const onChangeStartRecruitDate = (date: Date | null) => {
		if (date) {
			const result = simpleDate(date);
			dispatch({ type: 'SET_START_DATE', payload: result });
			setFormData(prevInfo => ({ ...prevInfo, proceedingStart: result }));
		}
	};

	const onChangeEndRecruitDate = (date: Date | null) => {
		if (date) {
			const result = simpleDate(date);
			dispatch({ type: 'SET_END_DATE', payload: result });
			setFormData(prevInfo => ({ ...prevInfo, proceedingEnd: result }));
		}
	};

	useEffect(() => {
		dispatch({ type: 'SET_TITLE', payload: title });
		dispatch({ type: 'SET_DEADLINE', payload: deadline });
		dispatch({ type: 'SET_START_DATE', payload: startDate });
		dispatch({ type: 'SET_END_DATE', payload: endDate });
		dispatch({ type: 'SET_PROCEED_TYPE', payload: proceedType });
		dispatch({ type: 'SET_COURSE', payload: course });
		dispatch({ type: 'SET_PROFESSOR', payload: professor });

		setFormData(prevInfo => ({
			...prevInfo,
			title,
			deadline,
			proceedingStart: startDate,
			proceedingEnd: endDate,
			proceedType,
			course,
			professor,
		}));
	}, [title, deadline, startDate, endDate, proceedType, course, professor, setFormData]);

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
							value={state.title}
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
						<div className='container-deadline__datepicker'>
							<MuiDatepicker
								value={new Date(state.deadline as string)}
								handleChange={date => onChangeDate(date)}
							/>
							{isValid.isSubmitted && !isValid.isDeadline && (
								<p className='valid-msg'>{validMessage.deadline}</p>
							)}
						</div>
					</article>
					<WrapperScopeCategory scope={scope} category={category} />
					<article className='inputs-dates'>
						<span className='input-subtitle'>
							진행 기간 <span>{'*'}</span>
						</span>
						<section className='container-dates'>
							<div className='start-date'>
								<MuiDatepicker
									value={new Date(state.startDate as string)}
									handleChange={date => onChangeStartRecruitDate(date)}
									type='start'
								/>
							</div>
							<div className='end-date'>
								<MuiDatepicker
									value={new Date(state.endDate as string)}
									handleChange={date => onChangeEndRecruitDate(date)}
									type='end'
								/>
								{isValid.isSubmitted && !isValid.isEndDate && (
									<p className='valid-msg'>{validMessage.endDate}</p>
								)}
							</div>
						</section>
					</article>
					<ContainerProcedure proceedType={state.proceedType} />
					<ContainerCourse course={state.course} professor={state.professor} />
				</section>
			</section>
			<hr className='under-info' />
		</S.BasicInformation>
	);
};

export default BasicInformation;
