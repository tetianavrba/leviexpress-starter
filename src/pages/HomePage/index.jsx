import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (data) => {
    console.log('Journey data:', data);
    setJourney(data);
  };
  const handleBuy = async () => {
    const response = await fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/reservation`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      },
    );
    if (!response.ok) {
      alert('Aj, karamba! Něco se pokazilo. Server se mnou nemluví');
      return;
    }
    const data = await response.json();
    console.log('Objednáno:', data);
    const reservation = data.results;
    navigate(`/reservation/${reservation.reservationId}`);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );

  // return (
  //   <main>
  //     <JourneyPicker onJourneyChange={handleJourneyChange} />
  //     {journey !== null ? <JourneyDetail journey={journey} /> : null}
  //     {journey !== null ? <SelectedSeat autoSeat={journey.autoSeat} /> : null}
  //     <div className="controls container">
  //       <button className="btn btn--big" type="button" onClick={handleBuy}>
  //         Rezervovat
  //       </button>
  //     </div>
  //   </main>
  // );
};
