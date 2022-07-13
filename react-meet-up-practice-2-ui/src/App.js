
import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

import MainNavBar from './components/shared/MainNavBar';

function App() {
  return (
    <div>
      <MainNavBar />
      <Routes>
          <Route path='/' exact={true} element={<AllMeetupsPage />} />
          <Route path='/new-meetup' exact={true} element={<NewMeetupPage />} />
          <Route path='/favorites' exact={true} element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
