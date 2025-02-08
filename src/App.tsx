// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import { LanguageProvider } from './translate/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
