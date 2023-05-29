import { useState, useEffect } from "react";
import Error from "./components/Error";
const url = 'https://course-api.com/react-tours-project';
import Tours from "./components/tours";
import Loading from "./components/loading";


const App = () => {
  const [tours, setTours]= useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [isError, setIsError] = useState(false)

  const niHandler = (id) =>{
    setTours(tours.filter((tour)=>tour.id !== id))
  }

  const fetchTours = async() =>{
    setIsLoading(true)
    try{
      fetch(url).then(res=>res.json())
      .then(data=>{
        setTours(data)
        setIsLoading(false)
      })
    }
    catch(error){
      console.log(error)
      // setIsError(true)
    }
  }

  // console.log(tours)

  useEffect (()=>{
    fetchTours()
  },[])


  return( 
  <>

  
  {
    isLoading?

    <Loading/>

    :

    tours.length === 0?

    <Error fetchTours={fetchTours}/>
    
    :

    <Tours tours={tours} niHandler={niHandler}/>
  }

  </>
  )
  
  
};
export default App;
