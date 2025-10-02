'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !username ||
      !password ||
      !name ||
      password === '' ||
      username === '' ||
      name === ''
    ) {
      setErrorMessage('Please enter all fields');
      console.error(errorMessage);
      return;
    }

    console.log(username, password, name);

    createUser();
  };

  const createUser = () => {
    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
      }),
    });
  };

  return (
    <div className='font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <label htmlFor='username'>
            Username:
            <input
              className='border border-white border-solid'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type='text'
            />
          </label>
          <label htmlFor='password'>
            Password:
            <input
              className='border border-white border-solid'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='text'
            />
          </label>
          <label htmlFor='name'>
            Name:
            <input
              className='border border-white border-solid'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
            />
          </label>
          <button className='border hover:bg-white/50' type='submit'>
            Create user
          </button>
        </form>
      </main>
    </div>
  );
}
