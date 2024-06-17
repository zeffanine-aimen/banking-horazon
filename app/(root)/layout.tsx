import React from 'react';
import SideBar from '@/components/SideBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <SideBar />
      <div className="flex-1 p-8">
        {children}
      </div>
    </main>
  );
}
