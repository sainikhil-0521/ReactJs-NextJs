import { useState, React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Card from './components/Card'

const App: React.FC = ()=> {
  return (<>
    <div className="min-h-screen bg-gray-100 p-4 space-y-6">
      <Card>
        <Greeting name="Munna" />
      </Card>
      <Card>
        <Counter />
      </Card>
      <Card>
        <Counter />
      </Card>
    </div>
  </>);
}

export default App
