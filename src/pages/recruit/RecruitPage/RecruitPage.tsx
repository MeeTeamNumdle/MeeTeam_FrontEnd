import React, { useState } from 'react';
import {
	Dropdown,
	Subtitle,
	RecruitCard,
	Pagination,
	Option,
	OptionList,
} from '../../../components';
import S from './RecruitPage.styled';
import { FloatingBtn, SearchIcon } from '../../../assets';

const START_PAGE_NUM = 1;
const POST_NUM = 150;
const options = ['전체', '북마크만 보기', '구인중만 보기', '교내', '교외'];

const RecruitPage = () => {
	const [currentPage, setCurrentPage] = useState<number>(START_PAGE_NUM);

	return (
		<S.RecruitPage>
			<section>
				<h1 className='container-title'>구인게시판</h1>
				<section className='wrapper-filter'>
					<section className='container-filter'>
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
								initialData='역할'
								$arrowNeed={true}
							/>
						</div>
					</section>
					<div className='container-options__search'>
						<div>
							<img src={SearchIcon} />
						</div>
						<div>
							<input placeholder='제목, 글, 내용으로 검색해보세요.' />
						</div>
					</div>
				</section>
			</section>
			<hr />
			<section>
				<OptionList options={options} />
				<div className='container-contents'>
					<div className='container-contents__row'>
						<article className='container-sort'>
							<select name='sorted-by'>
								<option value='recent'>최신순</option>
								<option value='deadline'>마감일순</option>
								<option value='bookmark'>북마크순</option>
							</select>
						</article>
						<div className='contents'>
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
						</div>
					</div>
					<div>
						<div className='container-contents__grid'>
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
						</div>
					</div>
				</div>
			</section>
			<section className='container-pagination'>
				<Pagination
					postsNum={POST_NUM}
					postsPerPage={20}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</section>
			<article className='container-floating_btn'>
				<img src={FloatingBtn} className='floating-btn' />
			</article>
		</S.RecruitPage>
	);
};

export default RecruitPage;
