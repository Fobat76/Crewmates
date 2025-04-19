import Main from './Main';
import Pokemon from './Pokemon';

function Dashboard() {
  return (
    <div>
      <nav>
        <button>Main</button>
        <button>Create Pokémon</button>
      </nav>

      <Main />
      <Pokemon />
    </div>
  );
}

export default Dashboard;
