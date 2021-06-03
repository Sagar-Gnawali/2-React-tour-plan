import React, { useState, useEffect } from 'react';
import { ImAirplane} from 'react-icons/im';
import Loading from './component/LoadingComponent.js'
import Tours from './component/ToursComponent.js';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const notIntrested = (id) => {
    const newTour = tours.filter((item) => item.id !== id);
    setTours(newTour);
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchingdata = await fetch(url);
      const response = await fetchingdata.json();
      setTours(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error while fetching data >>', error)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (loading)
    return (
      <main>
        <Loading />
      </main>
    )
  if(tours.length===0){
    return(
      <main>
        <div className="title">
          <h2>No tours left <ImAirplane/></h2>
          <div className="underline"></div>
          <button onClick={fetchData} className="btn">Check again</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tourData={tours} notIntrested={notIntrested} />
    </main>
  );
}

export default App;
