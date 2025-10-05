import React from 'react';
import Navigation from './Navigation';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;