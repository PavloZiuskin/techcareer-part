import { Navigate, Route, Routes } from 'react-router-dom';
import TweetsPage from '../pages/TweetsPage/Tweets';
import Home from '../pages/HomePage/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';

function App() {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;