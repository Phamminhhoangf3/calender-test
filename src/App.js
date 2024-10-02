import DemoApp from "./DemoApp";
import { DateProvider } from "./DateContext";

function App() {
  return (
    <DateProvider>
      <DemoApp />
    </DateProvider>
  );
}

export default App;
