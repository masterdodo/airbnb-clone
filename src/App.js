import './App.css';
import './components/Header.css';
import Header from './components/Header';
import './components/Intro.css';
import Intro from './components/Intro';
import './components/Card.css';
import Card from './components/Card';
import experiencesData from './components/experiencesData';

function App() {
  const expElements = experiencesData.map(xps => {
    return <Card 
    key={xps.id}
    item={xps}
  />;
  });
  return (
    <div className="App">
      <Header />
      <Intro />
      <div className='Cards'>
        {expElements}
      </div>
    </div>
  );
}

export default App;
