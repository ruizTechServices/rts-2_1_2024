'use client';

import { fetchHelloWorld } from '../utils/api';

export default function TestApiButton() {
  return (
    <button
      onClick={fetchHelloWorld}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Test API
    </button>
  );
}
