import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-blue-500 text-2xl">Home Page</h1>
      <p>{count}</p>
      <button className="block" onClick={() => setCount(c => c + 1)}>Inc</button>
      <Link to="/about-us">Go to about us</Link>
    </div>
  )
}

export default HomePage;
