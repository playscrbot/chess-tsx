import { useDispatch } from 'react-redux';
import './App.css';
import Game from './pages/Game/Game';
import { createRoom } from './store';

const App: React.FC = () => {

  const dispatch = useDispatch();

  // Get room id using query param
  const urlSearchParams = new URLSearchParams(window.location.search);
  const name: string | null = urlSearchParams.get('name');

  if (name === null) {
    // ask for a name and use it to start game
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chess TSX</h1>
          <p>Enter your name to start the game</p>
        </header>
      </div>
    )
  } else {
    dispatch(createRoom(name));
  }

  return <Game />;
};

export default App;
