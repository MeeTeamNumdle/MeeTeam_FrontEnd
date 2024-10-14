import React from 'react';
import { Clear, DropdownArrow } from '../../../../assets';
import S from './FieldPopup.styled';

interface FieldPopup {
	isOpen: boolean;
	fieldRef: React.MutableRefObject<HTMLDivElement | null>;
	fieldValue: {
		applied: boolean;
		value: {
			id: number | null;
			value: string;
		};
	};
	isFieldClick: boolean;
	onClick: () => void;
	handleFieldMenu: (event: React.MouseEvent<HTMLSpanElement>) => void;
	handleFieldClear: () => void;
	submitField: () => void;
}

const FieldPopup = ({
	isOpen,
	fieldRef,
	fieldValue,
	isFieldClick,
	onClick,
	handleFieldMenu,
	handleFieldClear,
	submitField,
}: FieldPopup) => {
	return (
		<S.FieldPopup ref={fieldRef} $isFieldClick={isFieldClick}>
			<h2>분야 전체</h2>
			<div className='sep'> | </div>
			<div className='container-field' onClick={onClick}>
				<h3>{fieldValue.applied ? fieldValue.value.value : '분야를 선택해주세요'}</h3>
				<img src={DropdownArrow} alt='드롭다운 아이콘' />
			</div>
			{isOpen && (
				<article className='dropdown-field'>
					<section className='container-keys'>
						<span className='field-key' id={'1'} onClick={handleFieldMenu}>
							개발
						</span>
					</section>
					<article className='container-btns'>
						<section className='clear' onClick={handleFieldClear}>
							<img src={Clear} alt='초기화 아이콘' />
							<span>초기화</span>
						</section>
						<button type='button' onClick={submitField}>
							적용
						</button>
					</article>
				</article>
			)}
		</S.FieldPopup>
	);
};

export default FieldPopup;
