import './styles/index.scss';
import NoteApp from './notes-page/NoteApp';
import { ListProvider } from './context/list_context';

function App() {
  return (
    <ListProvider>
      <NoteApp />
    </ListProvider>
  );
}

export default App;
