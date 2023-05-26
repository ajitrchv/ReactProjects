import data from "./data";
import { useState } from "react";
import Person from "./components/person";

const App = () => {
  const [people, setPeople] = useState(data);
  const clearHandler=()=>{
    if(confirm("All the data will be deleted!")==true)
      setPeople([])
    else setPeople(people)
  }
  // const deleteOne=(id)=>{
  //   // console.log(id)
  //   setPeople(people.filter((person)=>
  //   person.id !== id));
  // }
  
  return (
      <div>
      <h2 className="title-underline">Credit Information</h2> 
      <main>
      
      <section className="container">

        
        <Person people = {people} setPeople={setPeople}></Person>

        <button onClick={clearHandler} className="btn btn-block">Clear All</button>
      </section>
    </main>
    </div>
  );

};
export default App;
