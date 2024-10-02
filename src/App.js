import DemoApp from "./DemoApp";
import { DateProvider } from "./DateContext";
import './App.css'

function App() {
  return (
    <DateProvider>
      <DemoApp />
    </DateProvider>
  );
}

export default App;
