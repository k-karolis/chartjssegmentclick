import './App.css';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';

function App() {
  const items = {
    Red: ['Red13', 'Red2', 'Red3'],
    Blue: ['Blue12', 'Blue1', 'Blue2'],
    Yellow: ['Yellow12', 'Yellow1', 'Yellow2'],
    Green: ['Green12', 'Green1', 'Green2'],
    Purple: ['Purple12', 'Purple2', 'Purple3'],
    Orange: ['Orange12', 'Orange1', 'Orange2'],
    Grey: ['Grey12', 'Grey1', 'Grey2'],
  };
  const count = [12, 19, 3, 5, 2, 3, 10];

  const [isSegment, setIsSegment] = useState([]);
  const [isCount, setIsCount] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const data = {
    labels: items,
    datasets: [
      {
        label: '# of Votes',
        data: count,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(100, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    onClick: (evt, item, legendItem) => {
      if (item.length > 0) {
        const idx = item[0].index;
        const segment = Object.entries(items)[idx][0];
        const length = count[idx];

        setIsSegment(segment);
        setIsCount(length);

        // console.log('Index of segment', idx);
        // console.log('Name of segment', isSegment);
        // console.log('Items in segment', isCount);
        setIsLoaded(true);
        // console.log(item);
      }
    },
  };

  return (
    <div className="App">
      <h1>Chart.js Segment onClick</h1>
      <div>
        Items of selected segment:
        {isLoaded &&
          items[isSegment].map((i, key) => {
            return <h6 key={key}>{i}</h6>;
          })}
      </div>

      <Pie data={data} options={options} />
    </div>
  );
}

export default App;
