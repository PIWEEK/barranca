import { TimelineProvider } from './context';
import TimelineComponent from './sections/timeline/Timeline';

function App() {
  return (
    <TimelineProvider>
      <TimelineComponent />
    </TimelineProvider>
  );
}

export default App;
