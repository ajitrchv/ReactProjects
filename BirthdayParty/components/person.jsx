import React from 'react'

function Person(props) {
    let people=props.people
    const deleteOne=(id)=>{
      console.log(id)
      props.setPeople(people.filter((person)=>
      person.id !== id));
    }
    
  return (

   <>

{
          people.map((person)=>{
            
            return(
            <ul>
              <li key={person.id} className="tile">
                <span className="person">
                  <img className="img" src={person.image}></img>
                </span>
                <span>
                <h3>{person.name}</h3>
                <p>{person.age}</p>
                </span>
                <br/>
                <span className="del">
                <button className="btn btn-block" onClick={()=>deleteOne(person.id)}>Delete</button>
                </span>
                
                <br/><br/>
              </li>
              <br/><br/>
            </ul>
            
            )
          }
          )
        }

   </>

  )
}

export default Person