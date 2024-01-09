import S from './Tag.styled';

interface ITag {
	type?: string;
	$recruit?: boolean;
	$proceed?: boolean;
}

const Tag = ({ type, $recruit, $proceed }: ITag) => {
	console.log($proceed);
	return (
		<S.Tag $recruit={$recruit} $proceed={$proceed}>
			{$recruit ? '구인중' : $proceed ? '진행중' : type}
		</S.Tag>
	);
};

export default Tag;
