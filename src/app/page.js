import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <main>
      <h3>Welcome to Homepage</h3>
      <p>Home content goes here...</p>
      <Image className='h-auto w-auto' src='https://i.imgur.com/tOYJrfH.png' width={350} height={300} alt='demo' priority />
    </main>
  );
};

export default HomePage;
