import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import S from './MuiDatepicker.styled';
import { GrayCalendar } from '../../assets';
import { format } from 'date-fns';
import { useRecoilValue } from 'recoil';
import { recruitInputState } from '../../atom';

interface MuiDatepicker {
	handleChange: (value: Date | null) => void;
	defaultValue?: Date;
	value?: Date;
	inputRef?: React.Ref<HTMLInputElement>;
	invalid?: boolean;
	type?: string;
}

const CalendarIcon = () => {
	return <img src={GrayCalendar} alt='calendar' />;
};

const MuiDatepicker = ({
	handleChange,
	defaultValue,
	value,
	inputRef,
	invalid,
	type,
}: MuiDatepicker) => {
	const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
	const formData = useRecoilValue(recruitInputState);

	return (
		<DatePicker
			defaultValue={defaultValue}
			value={value}
			open={datePickerOpen}
			onClose={() => setDatePickerOpen(false)}
			slots={{
				popper: S.StyledPopper,
				textField: S.StyledTextField,
				layout: S.StyledPickersLayout as React.JSXElementConstructor<unknown>,
				openPickerIcon: CalendarIcon,
			}}
			slotProps={{
				textField: {
					inputProps: { readOnly: true },
					placeholder: format(new Date(), 'yy년 MM월 dd일'),
					onClick: () => {
						if (!datePickerOpen) {
							setDatePickerOpen(true);
						}
					},
					error: invalid,
				},
			}}
			views={['year', 'month', 'day']}
			format='yy년 MM월 dd일'
			disableHighlightToday={true}
			onChange={handleChange}
			inputRef={inputRef}
			minDate={type === 'end' ? new Date(formData.proceedingStart as string) : undefined}
		/>
	);
};

export default MuiDatepicker;
