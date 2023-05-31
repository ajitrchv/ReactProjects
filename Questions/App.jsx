import { useState } from "react";
import questions from "./data";
import Question from "./components/question";
const App = () => {
const[ques, setQues] = useState(questions)
// console.log(ques);

  return(
    <>
      <main>
        <section className="container">
          <h1>Questions</h1>
          {ques.map((item)=>{
            return(
              <Question key={item.id} {...item}/>
            );
          })}
        </section>
        </main>
    </>
    
  );
};
export default App;
