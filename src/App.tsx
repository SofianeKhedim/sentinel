import { Suspense } from 'react';
import './App.css';
import Fallback from '@/components/Fallback';
import Router from '@/routes';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Router />
      </Suspense>
      <Toaster richColors />
    </>
  );
}

export default App;
