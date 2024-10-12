import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => (
  <div className='max-w-[1240px] mx-auto pt-16 pb-8 px-4 grid lg:grid-cols-3 gap-8 text-white'>
    <div>
      <h1 className='text-3xl font-bold text-[#00df9a]'>Rot Buddy</h1>
      <p className='py-4'>Detect rotten produce and find new recipes</p>
      <div className='flex justify-between mt-4'>
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaGithubSquare size={30} />
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-1'>
      <div>
        <h6 className='font-medium text-gray-400'>Features</h6>
        <ul>
          <li className='py-2 text-sm'>Quality Tracking</li>
          <li className='py-2 text-sm'>Recipe Suggestions</li>
        </ul>
      </div>
      <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
          <li className='py-2 text-sm'>FAQs</li>
          <li className='py-2 text-sm'>Contact</li>
        </ul>
      </div>
      <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
          <li className='py-2 text-sm'>Policies</li>
          <li className='py-2 text-sm'>Terms</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
