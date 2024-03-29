import React from 'react';
import S from './Tag.styled';

interface TagInfo {
	type?: string;
	$recruit?: boolean;
	$proceed?: boolean;
}

const Tag = ({ type, $recruit, $proceed }: TagInfo) => {
	return (
		<S.Tag $recruit={$recruit} $proceed={$proceed}>
			{$recruit ? '구인중' : $proceed ? '진행중' : type}
		</S.Tag>
	);
};

export default React.memo(Tag);
