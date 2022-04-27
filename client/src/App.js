import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Window from './components/Window'
import StarWarsSets from './components/StarWarsSets'
import HarryPotterSets from './components/HarryPotterSets'
import CastleSets from './components/CastleSets'

function App() {
  const [pageState, setPageState] = useState({
    StarWarsSets: true,
    HarryPotterSets: false,
    CastleSets: false
  })

  return (
    <>
      <CssBaseline />
      <Navbar pageState={pageState} setPageState={setPageState} />
      <Window />
      {pageState.CastleSets ? <Window /> : ''}
      {pageState.StarWarsSets ? <StarWarsSets /> : ''}
      {pageState.HarryPotterSets ? <HarryPotterSets /> : ''}
      {pageState.CastleSets ? <CastleSets /> : ''}
      <Footer />
    </>
  );
}

export default App;
