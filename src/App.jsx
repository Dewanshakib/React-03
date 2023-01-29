import './App.css'
import {Image} from "./components/Image"
import {User} from "./components/User"
import {Button} from "./components/Button"
import {About} from "./components/About"
import {Social} from "./components/Social"

function App() {

  return (
    <div className="App">
        <Image/>
        <User/>
        <Button/>
        <About/>
        <Social/>
    </div>
  )
}

export default App
