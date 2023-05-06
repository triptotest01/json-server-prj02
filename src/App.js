import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
    
    <Routes>
      <Route path="/" element={<DayList/>}/>
      <Route path="/day/:inputDay" element={<Day/>}/>
      <Route path="*" element={<NotFound/>} />
      
    </Routes>
      

    </div>
  );
}

export default App;
