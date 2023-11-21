import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import S from './DateSelect.styled';

const DateSelect = () => {
	const [dateRange, setDateRange] = useState([new Date(), new Date()]);
	const [startDate, endDate] = dateRange;
	return (
		<S.DateSelect>
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={update => {
					setDateRange(update as any);
				}}
				isClearable={true}
				className='date-picker'
			/>
		</S.DateSelect>
	);
};

export default DateSelect;
