import React, { useState } from 'react';
import { recruitInputState } from '../../../../../atom';
import { useRecoilState } from 'recoil';
import { useValid } from '../../../../../hooks';

const ContainerProcedure = ({ proceedType }: { proceedType?: string }) => {
	const [type, setType] = useState<string | undefined>(proceedType);
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const handleProcedureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const procedure = event.target.value;
		setType(event.target.value);
		setFormData(prev => ({ ...prev, proceedType: procedure }));
	};

	return (
		<article className='inputs-procedure'>
			<span className='input-subtitle'>
				진행방식 <span>{'*'}</span>
			</span>
			<section className='radio-btns'>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='offline'
						name='procedure'
						value='오프라인'
						checked={type === '오프라인'}
						onChange={handleProcedureChange}
					/>
					<label htmlFor='offline'>오프라인</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='online'
						name='procedure'
						value='온라인'
						checked={type === '온라인'}
						onChange={handleProcedureChange}
					/>
					<label htmlFor='online'>온라인</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='any'
						name='procedure'
						value='온/오프라인'
						checked={type === '온/오프라인'}
						onChange={handleProcedureChange}
					/>
					<label htmlFor='any'>온/오프라인</label>
				</section>
			</section>
			{isValid.isSubmitted && !isValid.isProcedure && (
				<p className='valid-msg'>{validMessage.procedure}</p>
			)}
		</article>
	);
};

export default ContainerProcedure;
