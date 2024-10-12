import { ReactTyped } from "react-typed";


const RecipeSection = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4'> 
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#FFA07A]'>
          Optimize Your Produce through AI.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Analyzing Quality in
          </p>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['APPLES', 'BANANAS', 'ORANGES']}
            typeSpeed={70}
            backSpeed={60}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>I got no clue what to write here, do we even need it?</p>
        <button className='bg-[#F6E29A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default RecipeSection;
