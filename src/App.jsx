import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AllRoutes } from './routes/allroutes'
import './App.css'
import { Footer, Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App dark:bg-dark">
        <Header />
             <AllRoutes />
        <Footer />
      </div>
    
    </>
  )
}

export default App


// json-server --watch data/db.json --port 8000

// npx json-server --watch data/db.json --middlewares ./node_modules/json-server-auth --port 8000
// npx json-server --watch data/db.json --middlewares ./node_modules/json-server-auth --port 8000

// npx json-server --watch data/db.json --middlewares ./node_modules/json-server-auth -r data/routes.json --port 8000



