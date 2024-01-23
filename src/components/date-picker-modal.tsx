import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerModal: React.FC = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (date: [Date | null, Date | null]): void => {
        console.log('date', date, typeof date);
        // setSelectedDates([...selectedDates, date]);
    };

    return (
        <div className="mt-4 border rounded-[32px] min-w-[50%] bg-white right-0 py-1 px-10">
            {/* Tab Menu for selecting date, month */}
            <div className="py-[15px]">
                <div className="flex justify-center items-center h-10">
                    <div className="rounded-full bg-[#EBEBEB] px-1 h-full flex items-center">
                        <div className="flex flex-row items-center justify-around max-w-[400px] min-w-[300px]">
                            <button
                                className="rounded-full text-sm font-semibold font-circular bg-white py-2 px-3 whitespace-nowrap overflow-hidden overflow-ellipsis mt-4 mb-4 mr-0 transition-shadow duration-200 ease-in relative outline-none text-current border border-gray-100 hover:bg-white shadow-sm cursor-default hover:cursor-pointer"
                            >
                                Dates
                            </button>
                            <button className="rounded-full text-sm font-semibold font-circular py-2 px-3 whitespace-nowrap overflow-hidden overflow-ellipsis mt-4 mb-4 mr-0 transition-shadow duration-200 ease-in relative outline-none text-current border border-gray-100 hover:bg-white shadow-sm cursor-default hover:cursor-pointer">
                                Months
                            </button>
                            <button className="rounded-full text-sm font-semibold font-circular py-2 px-3 whitespace-nowrap overflow-hidden overflow-ellipsis mt-4 mb-4 mr-0 transition-shadow duration-200 ease-in relative outline-none text-current border border-gray-100 hover:bg-white shadow-sm cursor-default hover:cursor-pointer">
                                Flexible
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Date picker */}
            <div>
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    inline
                    monthsShown={2}
                    selectsRange
                    minDate={new Date()}
                    startDate={startDate}
                    endDate={endDate}
                    className="appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    popperClassName="bg-white shadow-lg"
                // dayClassName="text-gray-700"
                // monthClassName=""
                // monthClassName="text-xl text-gray-700"
                // yearClassName="text-gray-700"
                />
            </div>
        </div>
    );
};

export default DatePickerModal;