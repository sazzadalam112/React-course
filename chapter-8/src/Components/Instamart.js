// import { useState } from "react"

import { useState } from "react"

// import { useState } from "react"

// import { useState } from "react"



// const Section = ({title,discription,isVisible,setIsVisible}) => {
//     // const[isVisible,setIsVisible] = useState(false);
//     return(
//     <div className="bg-yellow-100 border border-black p-2 m-2">
//     <h1 className="font-bold text-2xl text-center text-red-400">{title}</h1>
    
//     {isVisible ?(
//         <button onClick={() => setIsVisible(false)} className="cursor-pointer underline">Hide</button>
//     ) :(
//         <button onClick={() => setIsVisible(true )} className="cursor-pointer underline">Show</button>
//     )}
    

    
//     {isVisible && <p className="text-center text-orange-900">{discription}</p>}
//     </div>
//     )
   
// }

// const Instamart = () => {
//     const[visibleSection,setIsVisibleSection] = useState('about');
//   return (
//     <div>
//     <h1 className="bg-slate-600 font-bold text-4xl m-2 p-2">Instamart</h1>
//       <Section
//       title={"About Instamart"}
//       discription={"This si the about section of instamart"}
//       isVisible={visibleSection === "about"}
//       setIsVisible={() =>setIsVisibleSection("about")}/>
//         <Section
//       title={"Team Instamart"}
//       discription={"Hi i am Sazzad recently graguated from nalanda college of engineering with a digree in computer science engineering. I am enthuthistic and eager to learn and looking feture to started my carrer in frontend developer during college time i though self skill outside my syllabus like HTML,CSS,JAVASCRIPT,REACT,GIT,GITHUB, using this skill i build some project"}
//       isVisible={visibleSection === "team"}
//       setIsVisible={()=> setIsVisibleSection("team")}/>
//         <Section
//       title={"Careers"}
//       discription={"Hi i am Sazzad recently graguated from nalanda college of engineering with a digree in computer science engineering. I am enthuthistic and eager to learn and looking feture to started my carrer in frontend developer during college time i though self skill outside my syllabus like HTML,CSS,JAVASCRIPT,REACT,GIT,GITHUB, using this skill i build some project"}
//       isVisible={visibleSection === "Carrers"}
//       setIsVisible={()=> setIsVisibleSection("Carrers")}/>
//     </div>
//   )
// }

// export default Instamart
const Section = ({title,discription,isVisible,setIsVisible}) => {
  // const[isVisible,setIsVisible] = useState(false)
  return(
    <div className="border border-black m-2 p-2">
      <h1 className="text-2xl text-center font-bold">{title}</h1>
      {
        isVisible ? 
        (<button onClick={() => setIsVisible(false)} className="underground bg-slate-300 ">Hide</button>) :(
          <button onClick={() => setIsVisible(true)} className="underground bg-slate-300 ">Show</button>
        )
      }
      {isVisible && <p className="text-center">{discription}</p>}
    </div>
  )
}

const Instamart = () => {
  const [visibleSection,setIsVisibleSection] = useState("about");
  return(
    <div>
      <h1 className="font-bold text-4xl">Instamart</h1>
      <Section 
      title = {"About Instamart"}
      discription={"This is the about section of instamart"}
      isVisible = {visibleSection === "about"}
      setIsVisible={() => setIsVisibleSection("about")}
      />
       <Section 
      title = {"Team Instamart"}
      discription={"I don’t wish to deny that the flattened, minuscule head of the large-bodied  houses little brain from our subjective, top-heavy perspective, BUT I do wish to assert that we should not expect more of the beast. FIRST OF ALL, large animals have relatively smaller brains than related, small animals. The correlation of brain size with body size among kindred animals (all reptiles, all mammals, FOR EXAMPLE) is remarkably regular. AS we move from small to large animals, from mice to elephants or small lizards to Komodo dragons, brain size increases, BUT not so fast as body size. IN OTHER WORDS, bodies grow faster than brains, AND large animals have low ratios of brain weight to body weight. IN FACT, brains grow only about two-thirds as fast as bodies. SINCE we have no reason to believe that large animals are consistently stupider than their smaller relatives, we must conclude that large animals require relatively less brain to do as well as smaller animals. IF we do not recognize this relationship, we are likely to underestimate the mental power of very large animals, dinosaurs in particular"}
      isVisible = {visibleSection === "Team"}
      setIsVisible={() => setIsVisibleSection("Team")}
      />
       <Section 
      title = {"Carrers"}
      discription={"I don’t wish to deny that the flattened, minuscule head of the large-bodied  houses little brain from our subjective, top-heavy perspective, BUT I do wish to assert that we should not expect more of the beast. FIRST OF ALL, large animals have relatively smaller brains than related, small animals. The correlation of brain size with body size among kindred animals (all reptiles, all mammals, FOR EXAMPLE) is remarkably regular. AS we move from small to large animals, from mice to elephants or small lizards to Komodo dragons, brain size increases, BUT not so fast as body size. IN OTHER WORDS, bodies grow faster than brains, AND large animals have low ratios of brain weight to body weight. IN FACT, brains grow only about two-thirds as fast as bodies. SINCE we have no reason to believe that large animals are consistently stupider than their smaller relatives, we must conclude that large animals require relatively less brain to do as well as smaller animals. IF we do not recognize this relationship, we are likely to underestimate the mental power of very large animals, dinosaurs in particular"}
      isVisible={visibleSection === "Carrers"}
      setIsVisible={() => setIsVisibleSection("Carrers")}
      />
    </div>
  )
}
export default Instamart;