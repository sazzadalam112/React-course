import { useState } from "react"

const Section = ({title,discription}) => {
    const[isVisible,setIsVisible] = useState(false);
    return(
    <div className="bg-blue-100 border border-black p-2 m-2 bg-gray-50">
    <h1 className="font-bold text-2xl text-center text-red-400">{title}</h1>
    
    {isVisible ?(
        <button onClick={() => setIsVisible(false)} className="cursor-pointer underline">Hide</button>
    ) :(
        <button onClick={() => setIsVisible(true )} className="cursor-pointer underline">Show</button>
    )}
    

    
    {isVisible && <p className="text-center text-orange-900">{discription}</p>}
    </div>
    )
   
}

const Instamart = () => {
  return (
    <div>
    <h1 className="font-bold text-4xl m-2 p-2">Instamart</h1>
      <Section
      title={"About Instamart"}
      discription={"This si the about section of instamart"}/>
        <Section
      title={"Team Instamart"}
      discription={"Hi i am Sazzad recently graguated from nalanda college of engineering with a digree in computer science engineering. I am enthuthistic and eager to learn and looking feture to started my carrer in frontend developer during college time i though self skill outside my syllabus like HTML,CSS,JAVASCRIPT,REACT,GIT,GITHUB, using this skill i build some project"}/>
        <Section
      title={"Careers"}
      discription={"Hi i am Sazzad recently graguated from nalanda college of engineering with a digree in computer science engineering. I am enthuthistic and eager to learn and looking feture to started my carrer in frontend developer during college time i though self skill outside my syllabus like HTML,CSS,JAVASCRIPT,REACT,GIT,GITHUB, using this skill i build some project"}/>
    </div>
  )
}

export default Instamart
