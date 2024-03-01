import { Suspense } from 'react';
import './App.css';
import Fallback from '@/components/Fallback';
import Router from '@/routes';

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Router />
    </Suspense>
  );
}

export default App;
