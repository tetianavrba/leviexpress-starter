import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  console.log('JourneyDetail:', journey.stops);

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => (
          <BusStop
            key={stop.code}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </div>
    </div>
  );
};
{
  /* <div class="bus-stop">
        <div class="bus-stop__bullet"></div>
        <div class="bus-stop__place">
          <div class="bus-stop__city">Město 1</div>
          <div class="bus-stop__station">Zastávka</div>
        </div>
        <div class="bus-stop__departure">10:45</div>
      </div>
      <div class="bus-stop">
        <div class="bus-stop__bullet"></div>
        <div class="bus-stop__place">
          <div class="bus-stop__city">Město 2</div>
          <div class="bus-stop__station">Zastávka</div>
        </div>
        <div class="bus-stop__departure">10:45</div>
      </div>
      <div class="bus-stop">
        <div class="bus-stop__bullet"></div>
        <div class="bus-stop__place">
          <div class="bus-stop__city">Město 3</div>
          <div class="bus-stop__station">Zastávka</div>
        </div>
        <div class="bus-stop__departure">10:45</div>
      </div>
      <div class="bus-stop">
        <div class="bus-stop__bullet"></div>
        <div class="bus-stop__place">
          <div class="bus-stop__city">Město 4</div>
          <div class="bus-stop__station">Zastávka</div>
        </div>
        <div class="bus-stop__departure">10:45</div>
      </div> */
}
//   </div>
// </div>
//   );
// };
