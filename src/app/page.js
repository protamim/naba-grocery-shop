import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-red-100'>
      <h3>Welcome to Homepage</h3>
      <p>Home content goes here...</p>
      <Image className='h-auto w-auto' src='https://i.imgur.com/tOYJrfH.png' width={350} height={300} alt='demo' priority />
    </main>
  );
};

export default HomePage;
