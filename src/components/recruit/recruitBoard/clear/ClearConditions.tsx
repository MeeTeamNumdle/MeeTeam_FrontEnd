import React from 'react';
import { Clear } from '../../../../assets';

interface ClearConditionsProps {
	onClick: () => void;
}

const ClearConditions = ({ onClick }: ClearConditionsProps) => {
	return (
		<article className='clear' onClick={onClick}>
			<img src={Clear} />
			<span>초기화</span>
		</article>
	);
};

export default ClearConditions;
