import { deadlineState } from '../../atom';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import S from './DeadlineSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';

const DeadlineSelect = () => {
	const [endDate, setEndDate] = useRecoilState(deadlineState);

	return (
		<S.DeadlineSelect>
			<DatePicker
				className='date-picker'
				selected={endDate}
				showPopperArrow={false}
				isClearable={true}
				onChange={date => setEndDate(date as any)}
			/>
		</S.DeadlineSelect>
	);
};

export default DeadlineSelect;
