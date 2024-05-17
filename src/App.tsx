import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import './App.css';

interface AnimatedBoxProps{
  className:string,
  letters:string[],
}

function App() {
  const divRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    const animateBox = (boxClass:any) => {
      timeline.to(`.${boxClass}`, { opacity: 1 })
        .from(`.${boxClass} .letter`, {
          y: 100,
          duration: 1,
          stagger: 0.3,
        })
        .to(`.${boxClass}`, { opacity: 0 });
    };

    animateBox('box1');
    animateBox('box2');
    animateBox('box3');
  }, { scope: divRef });

  return (
    <div ref={divRef} className="flex w-full bg-red h-screen justify-center items-center">
      <div className="relative">
        <AnimatedBox className="box1" letters={['H', 'E', 'L', 'L', 'O']} />
        <AnimatedBox className="box2" letters={['H', 'O', 'W']} />
        <AnimatedBox className="box3" letters={['Y', 'O', 'U']} />
      </div>
    </div>
  );
}

function AnimatedBox({ className ,letters }:AnimatedBoxProps) {
  return (
    <div className={`absolute text-7xl flex overflow-hidden ${className}`}>
      {letters.map((letter, index) => (
        <span key={index} className={`letter bg-${getColor(index)}`}>{letter}</span>
      ))}
    </div>
  );
}

function getColor(index:number) {
  const colors = ['blue-400', 'yellow-400', 'red-400', 'purple-400'];
  return colors[index % colors.length];
}

export default App;


















/**
 * old way logic
 */

// import { useGSAP } from '@gsap/react'
// import { useRef } from 'react'
// import gsap from "gsap";
// import './App.css'

// function App() {
//   const divref = useRef<HTMLDivElement|null>(null)

//   gsap.registerPlugin(useGSAP);

//   useGSAP(()=>{

//    var t1=gsap.timeline({repeat:-1});
//     t1.to('.box1',{
//       opacity:1,
//     });
//     t1.from(".box1 .letter",{
//         y:100,
//         duration:1,
//         stagger:0.3,
//     });
//     t1.to(".box1",{
//       opacity:0,
//     })
//     t1.to('.box2',{
//       opacity:1,
//     });
//     t1.from(".box2 .letter",{
//         y:100,
//         duration:1,
//         stagger:0.3,
//     });
//     t1.to(".box2",{
//       opacity:0,
//     })

//     t1.to('.box3',{
//       opacity:1,
//     });
//     t1.from(".box3 .letter",{
//         y:100,
//         duration:1,
//         stagger:0.3,
//     });
//     t1.to(".box3",{
//       opacity:0,
//     })




     
  
//     }
  
// ,{scope:divref})

//   return (
//     <>
//       <div ref={divref} className='flex w-full bg-red h-screen justify-center items-center'>
//         <div className='relative'>
//         <div className='absolute text-7xl flex  overflow-hidden box1'>
//           <span className='letter bg-blue-400 '>H</span>
//           <span className='letter   bg-yellow-400'>E</span>
//           <span className='letter  bg-red-400'>L</span>
//           <span className='letter  bg-purple-400'>L</span>
//           <span className='letter  bg-blue-400'>O</span>

//         </div>
//         <div className='absolute text-7xl flex  overflow-hidden box2'>
//           <span className='letter bg-blue-400 '>H</span>
//           <span className='letter   bg-yellow-400'>O</span>
//           <span className='letter  bg-red-400'>W</span>

//         </div>
//         <div className='absolute text-7xl flex  overflow-hidden box3'>
//           <span className='letter bg-blue-400 '>Y</span>
//           <span className='letter   bg-yellow-400'>O</span>
//           <span className='letter  bg-red-400'>U</span>
         
//         </div>
//       </div>
//       </div>

//     </>
//   )
// }

// export default App
