
import './App.css'
import Dasboard from './components/Dasboard'
import Siderbar from './components/Siderbar'

function App() {
  return (
    <div className='flex'>
      <Siderbar />
      <Dasboard />
    </div>
  )
}

export default App