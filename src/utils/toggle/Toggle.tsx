import React, { useState } from 'react';
import S from './Toggle.styled';

const Toggle = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleHandler = () => {
		setIsActive(!isActive);
	};

	return (
		<S.ToggleLabel>
			<S.ToggleCheckBox type='checkbox' checked={isActive} onChange={toggleHandler} />
			<S.ToggleSpan />
		</S.ToggleLabel>
	);
};

export default Toggle;
