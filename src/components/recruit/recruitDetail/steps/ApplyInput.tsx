import React, { useState } from 'react';
import { Icon } from '../../../../components';
import S from './ApplyInput.styled';
import { useRecoilState } from 'recoil';
import { applyInfoState, applyStepState } from '../../../../atom';

const roles: string[] = ['프론트엔드 개발자', '백엔드 개발자', '디자이너', '기획자'];
interface Input {
	message: string;
	currentValue: string;
}

const ApplyInput = () => {
	const [step, setStep] = useRecoilState(applyStepState);
	const [info, setInfo] = useRecoilState(applyInfoState);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const [currentValue, setCurrentValue] = useState<string>('역할 선택');
	const [inputValue, setInputValue] = useState<Input>({
		message: '',
		currentValue: '역할 선택',
	});
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const isValid = isChecked && inputValue.currentValue !== '역할 선택';

	const onClickStep = () => {
		setStep(prev => prev + 1);
		setInfo({ role: inputValue.currentValue, message: inputValue.message });
	};

	const onClickDropdown = () => {
		setOpenDropdown(prev => !prev);
	};

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue({ ...inputValue, message: event.target.value });
	};

	const onClickList = (event: React.MouseEvent<HTMLLIElement>) => {
		const target = event.currentTarget;
		setInputValue({ ...inputValue, currentValue: target.innerText });
		setOpenDropdown(false);
	};

	const onClickCancel = () => {
		setStep(prev => prev - 1);
	};

	return (
		<S.ApplyInput>
			<div className='container-apply__form'>
				<span className='container-apply__form-title'>신청 정보</span>
				<div className='container-apply__form-my'>
					<Icon />
					<span>{'송유진'}</span>
				</div>
				<div className='container-apply__form-input'>
					<div className='container-apply__roles' onClick={onClickDropdown}>
						{inputValue.currentValue}
					</div>
					{openDropdown && (
						<div className='dropdown'>
							<ul>
								{roles.map((element, index) => (
									<li key={index} onClick={onClickList}>
										{element}
									</li>
								))}
							</ul>
						</div>
					)}
					<input
						className='container-apply__words'
						placeholder='전할 말을 20자 이내로 입력해주세요.'
						maxLength={20}
						onChange={onChangeInput}
					/>
				</div>
				<div className='container-apply__form-warn'>
					<span>멤버들에게 내 정보 공개할 수 있나요?</span>
					<span>정보 공개 동의 시, 팀매칭에 유리합니다.</span>
					<div className='container-checkbox'>
						<input type='checkbox' onClick={() => setIsChecked(prev => !prev)} />
						<label>개인 정보 열람 동의</label>
					</div>
				</div>
				<button
					disabled={!isChecked}
					className={`container-apply__form-button ${!isValid ? 'disable' : 'able'}`}
					type='button'
					onClick={onClickStep}
				>
					제출하기
				</button>
				<button className='container-apply__form-button' type='button' onClick={onClickCancel}>
					뒤로가기
				</button>
			</div>
		</S.ApplyInput>
	);
};

export default ApplyInput;
