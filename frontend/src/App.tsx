import React, { useEffect, useState } from 'react';

function App(): ReturnType<React.FC> {
  const [count, setCount] = useState(0);

  useEffect(() => setCount(2), []);
  
  return (
    <div className='text-center text-2xl w-screen h-screen font-primary'>
      <h1>Here is the count: {count}</h1>
    </div>
  );
}

export default App;
