import { useState } from 'react';
import { Dropdown } from '../..';
import S from './Filter.styled';

const Filter = () => {
	const [isFiltered, setIsFiltered] = useState({
		isInside: true,
		isOutside: false,
	});

	const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target.innerText === '교내') {
			setIsFiltered({ isInside: true, isOutside: false });
		}
		if (event.target.innerText === '교외') {
			setIsFiltered({ isInside: false, isOutside: true });
		}
	};

	return (
		<S.Filter>
			<div className='container-filter_area'>
				<div className={`area ${isFiltered.isInside ? '' : 'no'}`} onClick={onClickHandler}>
					교내
				</div>
				<div className={`area ${isFiltered.isOutside ? '' : 'no'}`} onClick={onClickHandler}>
					교외
				</div>
			</div>
			<div className='container-filter_menu'>
				<Dropdown
					data={['프로젝트', '스터디', '동아리', '공모전']}
					initialData='프로젝트'
					allowNeed={true}
				/>
				<div className='sep'></div>
				<Dropdown data={['개발']} initialData='카테고리' allowNeed={true} />
			</div>
		</S.Filter>
	);
};

export default Filter;
