
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Your React App
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Click the button to increment the counter
        </p>
      </div>
    </div>
  );
};

export default Home;
