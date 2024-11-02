import React, {useState, useEffect} from 'react';
import Loader from './c/loader';

const App = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => Math.min(prev + 10, 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="main">
      {!isLoaded && (
        <Loader setIsLoaded={setIsLoaded} loadingPercentage={loadingPercentage} />
      )}
      {isLoaded &&<>
      
      <div className="hero w-screen">
        <div className="nav">
          p
        </div>

      </div>
      
      
      </>}
    </div>
  );
};

export default App;