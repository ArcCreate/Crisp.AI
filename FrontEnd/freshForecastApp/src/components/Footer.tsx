import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => (
  <div className='max-w-[1240px] mx-auto pt-0 pb-8 px-4 grid lg:grid-cols-3 gap-4 text-white'>
    
    <div className='lg:col-span-2 flex justify-between '>
      <div>
        <h6 className='font-medium text-gray-400'>Features</h6>
        <ul>
          <li className='py-2 text-sm'>Quality Tracking</li>
          <li className='py-2 text-sm'>----</li>
        </ul>
      </div>
      <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
          <li className='py-2 text-sm'>FAQs</li>
          <li className='py-2 text-sm'>----</li>
        </ul>
      </div>
      <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
          <li className='py-2 text-sm'>Policies</li>
          <li className='py-2 text-sm'>----</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
