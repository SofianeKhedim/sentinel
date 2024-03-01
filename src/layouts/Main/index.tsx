import Fallback from '@/components/Fallback';
import Nav from '@/components/Nav';
import Header from '@/components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="w-full overflow-hidden flex flex-col h-screen">
      <Header/>
      <main className="w-full lg:px-10 overflow-auto flex-1 overflow-y-auto h-[calc(100vh-4rem)] flex flex-col relative ">
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Nav />
    </div>
  );
}

export default Layout;
