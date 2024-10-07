import React from 'react';
import { SearchIcon, XBtn } from '../../../../assets';
import S from './SearchBar.styled';

interface SearchBar {
	placeholderText: string;
	searchKeyword: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	handleFocusedPlaceholder: () => void;
	handleBlurredPlaceholder: () => void;
	onClickDeleteKeyword: () => void;
}

const SearchBar = ({
	placeholderText,
	searchKeyword,
	onChange,
	onKeyPress,
	handleFocusedPlaceholder,
	handleBlurredPlaceholder,
	onClickDeleteKeyword,
}: SearchBar) => {
	return (
		<S.SearchBar className='container-options__search'>
			<section>
				<img className='search-icon' src={SearchIcon} alt='검색 아이콘' />
			</section>
			<section>
				<input
					placeholder={placeholderText}
					type='text'
					onChange={onChange}
					value={searchKeyword}
					onKeyDown={onKeyPress}
					onFocus={handleFocusedPlaceholder}
					onBlur={handleBlurredPlaceholder}
				/>
			</section>
			{searchKeyword && (
				<img
					className='clear-keyword'
					src={XBtn}
					onClick={onClickDeleteKeyword}
					alt='취소 아이콘'
				/>
			)}
		</S.SearchBar>
	);
};

export default SearchBar;
