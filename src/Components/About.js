import AboutImg from '../Assets/about.png'
export default function About(){
    return<section className='flex bg-sec '>
        <div className='w-1/2'>
            <img src={AboutImg}/>
        </div>
    <div className='w-1/2 flex justify-center '>
    <div className='flex flex-col justify-center'>
    <h1 className='text-3xl underline decoration-4 decoration-yellow-400  mb-5 font-bold  '>About Me</h1>
    <p className=''>I'm a MERN Stack Developer with expertise in MongoDB, Express.js, React, and Node.js, building scalable web applications. I'm also a certified ServiceNow CSA, experienced in implementing ServiceNow solutions. Additionally, I enjoy solving complex problems in Java, sharpening my skills through algorithmic challenges. I focus on delivering efficient, high-quality solutions that meet both technical and business needs</p>
    </div>
        
    </div>
    </section>
}