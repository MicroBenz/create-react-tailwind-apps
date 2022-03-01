import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-blue-500">Home Page</h1>
      <p>{count}</p>
      <button className="block" onClick={() => setCount(c => c + 1)}>Inc</button>
      <Link to="/about-us">Go to about us</Link>
    </div>
  )
}

export default HomePage;
