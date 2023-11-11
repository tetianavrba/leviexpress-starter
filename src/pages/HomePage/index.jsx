import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (data) => {
    console.log('Journey data:', data);
    setJourney(data);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null : (
        <div>
          <h2>Nalezení spoj:</h2>
          <p>{journey.journeyId}</p>
        </div>
      )}
    </main>
  );
};
