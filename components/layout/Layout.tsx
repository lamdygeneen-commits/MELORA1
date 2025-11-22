
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from '../ui/ChatBot';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF9F6] text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Persistent chatbot floating button and chat window */}
      <ChatBot />
    </div>
  );
};

export default Layout;