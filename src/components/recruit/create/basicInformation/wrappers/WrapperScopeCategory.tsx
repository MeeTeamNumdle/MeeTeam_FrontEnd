import React from 'react';
import { ContainerCategory, ContainerScope } from '../../../../index';

interface WrapperScopeCategoryProps {
	scope?: string;
	category?: string;
}

const WrapperScopeCategory = ({ scope, category }: WrapperScopeCategoryProps) => {
	return (
		<article className='inputs-scope-category'>
			<ContainerScope scope={scope} />
			<ContainerCategory category={category} />
		</article>
	);
};

export default WrapperScopeCategory;
