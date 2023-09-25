// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   console.log(count);
//   function increase() {
//     // count += 1;
//     setCount(count + 1);
//   }
//   function decrease() {
//     setCount(count - 1);
//   }
//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;

/*React Time App */

import React from "react";
import { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Time Warp</button>
    </div>
  );
}

export default App;
