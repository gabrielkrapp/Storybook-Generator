// src/pages/Home.tsx
import React from 'react';
import StoryCreator from '../components/StoryCreator';
import background from '../assets/background.png';

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-no-repeat bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-opacity-75 bg-black p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-400">
          Crie Sua Própria História Mágica!
        </h1>
        <StoryCreator />
      </div>
    </div>
  );
};

export default Home;