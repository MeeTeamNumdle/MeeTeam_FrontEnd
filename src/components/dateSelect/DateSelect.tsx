import { useRecoilState } from 'recoil';
import { dateState } from '../../atom';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = () => {
	// const [dateRange, setDateRange] = useState([new Date(), new Date()]);
	const [date, setDate] = useRecoilState(dateState);
	const [startDate, endDate] = date;

	// 더 좋은 방법이 있을 것 같음.
	// useEffect(() => {
	// 	setDate(dateRange);
	// }, [dateRange]);

	return (
		<S.DateSelect>
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				showPopperArrow={false}
				endDate={endDate}
				onChange={update => {
					setDate(update as any);
				}}
				isClearable={true}
				className='date-picker'
			/>
		</S.DateSelect>
	);
};

export default DateSelect;
