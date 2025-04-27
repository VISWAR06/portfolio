import HeroImage from '../Assets/hero.png'
import { AiOutlineLinkedin,AiOutlineInstagram } from "react-icons/ai";
export default function Hero(){
 return <section className='flex px-3 py-12 bg-sec justify-center'>
   <div className='w-1/2 flex flex-col'>
   <h1 className=' text-white text-4xl'>Hi,<br/>I am <span className='font-bold text-yellow-400'>VISWA</span>
 <p className='text-3xl'>Im a Full-Stack Developer</p>
 </h1>
 <div className='flex gap-1 '>
   <a href='' className='text-white hover:text-yellow-400'><AiOutlineLinkedin size={40}/></a>
   <a href='' className='text-white hover:text-yellow-400'><AiOutlineInstagram size={40}/></a>
 </div>
   </div>

 <img className='w-1/3'src={HeroImage}/>
 </section>
}