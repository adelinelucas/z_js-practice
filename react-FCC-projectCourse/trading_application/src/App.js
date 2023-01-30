import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StockDetailPage from './pages/StockDetailPage';
import StockOverviewPage from './pages/StockOverviewPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { WatchListContextProvider } from './watchListContext';
function App() {
  return (
    <main className='container'>
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage/>}/>
            <Route path="/detail/:symbol" element={<StockDetailPage/>}/>
            <Route/>
          </Routes>
        </BrowserRouter>
        </WatchListContextProvider>
    </main>
  );
}

export default App;
