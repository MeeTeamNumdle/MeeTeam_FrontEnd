import React, { useState } from 'react';
import { Dropdown, Subtitle, RecruitCard, Pagination } from '../../../components';
import S from './RecruitPage.styled';
import { SearchIcon } from '../../../assets';

const START_PAGE_NUM = 1;

const RecruitPage = () => {
	const postsNum = 150;
	const [currentPage, setCurrentPage] = useState<number>(START_PAGE_NUM);
	const [isFiltered, setIsFiltered] = useState({
		isInside: true,
		isOutside: false,
	});
	const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.currentTarget;
		if (target.innerText === '교내') {
			setIsFiltered({ isInside: true, isOutside: false });
		}
		if (target.innerText === '교외') {
			setIsFiltered({ isInside: false, isOutside: true });
		}
	};

	return (
		<S.RecruitPage>
			<div>
				<div className='container-filter_area'>
					<div className={`area ${isFiltered.isInside ? '' : 'no'}`} onClick={onClickHandler}>
						교내
					</div>
					<div className={`area ${isFiltered.isOutside ? 'out' : 'no'}`} onClick={onClickHandler}>
						교외
					</div>
				</div>
				<div className='container-filter_menu'>
					<Dropdown
						data={['프로젝트', '스터디', '동아리', '공모전']}
						initialData='프로젝트'
						$arrowNeed={true}
					/>
					<Dropdown data={['개발']} initialData='카테고리' $arrowNeed={true} />
					<div className='dropdown-spec'>
						<Dropdown
							data={['React', 'JavaScript', 'Node.js', 'Spring', 'Figma']}
							initialData='기술 스택'
							$arrowNeed={true}
						/>
						<Dropdown
							data={['기획', '디자인', '프론트엔드', '백엔드']}
							initialData='👤 포지션'
							$arrowNeed={true}
						/>
					</div>
				</div>
			</div>
			<hr />
			<div>
				<div className='container-options'>
					<div className='container-options__filters'>
						<div className='filter bookmark'>☑️ 수업만 보기</div>
					</div>
					<div className='container-options__search'>
						<div>
							<img src={SearchIcon} />
						</div>
						<div>
							<input placeholder='제목, 글, 내용으로 검색해보세요.' />
						</div>
					</div>
				</div>
				<div className='container-contents'>
					<div className='container-contents__row'>
						<div className='container-subtitle'>
							<div className='subtitle'>👀 내가 관심 있을 만한 구인 글</div>
							<div className='container-sort'>
								<select name='sorted-by'>
									<option value='recent'>최신순</option>
									<option value='deadline'>마감일순</option>
									<option value='bookmark'>북마크순</option>
								</select>
							</div>
						</div>
						<div className='contents'>
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
						</div>
					</div>
					<div>
						<Subtitle>전체 구인 글</Subtitle>
						<div className='container-contents__grid'>
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
						</div>
					</div>
				</div>
			</div>
			<div className='container-pagination'>
				<Pagination
					postsNum={postsNum}
					postsPerPage={20}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</S.RecruitPage>
	);
};

export default RecruitPage;
