import GuestCounter from './GuestCounter';

const adultsMaxLimit = 16;
const otherGuestsMaxLimit = 5;

const GuestForm: React.FC = () => {

    return (
        <div className="mt-4 border rounded-[32px] min-w-[50%] bg-white right-0 py-1 px-10">
            <div>
                {/* Adults count */}
                <GuestCounter
                    title="Adults"
                    subtitle="Ages 13 or above"
                    guestsMaxLimit={adultsMaxLimit}
                />
                {/* Children count */}
                <GuestCounter
                    title="Children"
                    subtitle="Ages 2-12"
                    guestsMaxLimit={otherGuestsMaxLimit}
                />
                {/* Infants count */}
                <GuestCounter
                    title="Infants"
                    subtitle="Under 2"
                    guestsMaxLimit={otherGuestsMaxLimit}
                />
                {/* Pets count */}
                <GuestCounter
                    title="Pets"
                    subtitle="Bringing a service animal?"
                    isBottomBorderRequired={false}
                    guestsMaxLimit={otherGuestsMaxLimit}
                />
            </div>
        </div>
    );
};

export default GuestForm;