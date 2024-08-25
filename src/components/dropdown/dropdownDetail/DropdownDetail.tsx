import React from 'react';
import { DropdownArrow, DropdownArrowUp } from '../../../assets';
import DetailedInput from '../../recruit/recruitBoard/detailedFilter/DetailedInput';
import S from './DropdownDetail.styled';

interface DropdownDetail {
	isOpen: boolean;
	dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
	isOpenDetail: {
		skill: boolean;
		role: boolean;
		tag: boolean;
		message: string;
	};
	isDetailSelected: boolean;
	onClick: (event: React.MouseEvent) => void;
	handleClose: () => void;
	handleChildDropdown: (event: React.MouseEvent<HTMLDivElement>) => void;
	handleClickDetails: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const DropdownDetail = ({
	isOpen,
	dropdownRef,
	isOpenDetail,
	isDetailSelected,
	onClick,
	handleClose,
	handleChildDropdown,
	handleClickDetails,
}: DropdownDetail) => {
	return (
		<S.DropdownDetail
			$isDetailSelected={isDetailSelected}
			className='dropdown-detailed'
			onClick={onClick}
			ref={dropdownRef}
		>
			<section className='dropdown-box'>
				<label className='selected'>{'상세조건'}</label>
				<img src={isOpen ? DropdownArrowUp : DropdownArrow} />
			</section>
			{isOpen && (
				<section className='container-dropdown' onClick={handleChildDropdown}>
					<section className='sidebar'>
						<span
							className={`body1 sidebar-elem ${isOpenDetail.skill ? 'active' : ''}`}
							onClick={handleClickDetails}
						>
							기술
						</span>
						<span
							className={`body1 sidebar-elem ${isOpenDetail.role ? 'active' : ''}`}
							onClick={handleClickDetails}
						>
							역할
						</span>
						<span
							className={`body1 sidebar-elem ${isOpenDetail.tag ? 'active' : ''}`}
							onClick={handleClickDetails}
						>
							태그
						</span>
					</section>
					<DetailedInput type={isOpenDetail.message} closeHandler={handleClose} />
				</section>
			)}
		</S.DropdownDetail>
	);
};

export default DropdownDetail;
