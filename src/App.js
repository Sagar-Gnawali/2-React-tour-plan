import React, { useState, useEffect } from 'react';
import Loading from './component/LoadingComponent.js'
import Tours from './component/ToursComponent.js';
import axios from 'axios';
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setLoading(false);
      setTours(response);

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
  return (
    <main>
      <Tours tourData={tours}/>
    </main>
  );
}

export default App;
