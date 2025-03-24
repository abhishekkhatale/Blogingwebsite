
import BlogCard from '../components/BlogCard';
import Hero from '../components/Hero';


const Home = () => {
  
 

  return (
    <>
    <Hero/>
    <div className='w-full flex items-center justify-center pt-10'>
    <h1 className='py-10 font-bold text-6xl '>Our Blogs</h1>
    </div>
    
    <BlogCard/>
    </>
    
  );
};

export default Home;