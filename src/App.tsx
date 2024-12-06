import { useDispatch } from 'react-redux';
import './App.css';
import Game from './pages/Game/Game';
import { createRoom } from './store';

const App: React.FC = () => {

  const dispatch = useDispatch();

  // Get room id using query param
  const urlSearchParams = new URLSearchParams(window.location.search);
  const name: string | null = urlSearchParams.get('name');

  // Create room
  dispatch(createRoom(name ?? ''));

  return <Game />;
};

export default App;
