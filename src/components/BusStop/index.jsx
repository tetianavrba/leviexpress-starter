import './style.css';

export const BusStop = ({ name, station, time }) => {
  return (
    <div className="stops">
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">{name}</div>
          <div className="bus-stop__station">{station}</div>
        </div>
        <div className="bus-stop__departure">{time}</div>
      </div>
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">Město 2</div>
          <div className="bus-stop__station">Zastávka</div>
        </div>
        <div className="bus-stop__departure">10:45</div>
      </div>
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">Město 3</div>
          <div className="bus-stop__station">Zastávka</div>
        </div>
        <div className="bus-stop__departure">10:45</div>
      </div>
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">Město 4</div>
          <div className="bus-stop__station">Zastávka</div>
        </div>
        <div className="bus-stop__departure">10:45</div>
      </div>
    </div>
  );
};
