'use client';

import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { useState } from 'react';

export default function Random() {
  const [roomCode, setRoomCode] = useState('');
  function generateRoomCode() {
    const length = 5;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setRoomCode(result);
  }

  return (
    <>
      <Container className="mt-9">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Join or Create a room
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100 dark:text-gray-100"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-gray-100 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="room-code"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Room Code
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <div className="flex flex-grow items-stretch focus-within:z-10">
                    <input
                      type="room-code"
                      name="room-code"
                      id="room-code"
                      className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:text-gray-100 sm:text-sm sm:leading-6"
                      placeholder="HVACJ"
                      value={roomCode}
                      onChange={(e) => setRoomCode(e.target.value)}
                    />
                    <button
                      type="button"
                      className="-ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-gray-100"
                      onClick={generateRoomCode}
                    >
                      Generate
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Either generate a new room code and join or enter an existing
              room.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
