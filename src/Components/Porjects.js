import web1 from '../Assets/ecommerce-websites.jpg';
import web2 from '../Assets/food-ecommerce.jpg';
import web3 from '../Assets/website-blog.jpg';

export default function Projects() {
  return (
    <section className="flex flex-col py-12 px-5 justify-center bg-sec">
      <div className="w-full flex justify-center mb-5">
        <h1 className="text-3xl underline decoration-4 decoration-yellow-400 font-bold">
          Projects
        </h1>
      </div>

      <div className="w-full flex justify-center px-10">
        <div className="flex gap-5">
          <div className="relative">
            <img className="h-[200px]" src={web1} alt="E-commerce Website" />
            <div className="project-de">
              <p className="text-center py-5">E-commerce Website</p>
            </div>
          </div>

          <div className="relative">
            <img className="h-[200px]" src={web2} alt="Food E-commerce" />
            <div className="project-de">
              <p className="text-center py-5">Food</p>
            </div>
          </div>

          <div className="relative">
            <img className="h-[200px]" src={web3} alt="Blog Website" />
            <div className="project-de">
              <p className="text-center py-5">Blog</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}