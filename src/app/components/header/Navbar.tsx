import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
    return (
      (<nav className="bg-black00 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src="/black-logo.png" width={203} height={234} alt='safsf'/>
          <div className="text-white font-bold text-xl">
            <Link href="/">
              AuttonoTech
            </Link>
          </div>

          {/* Menu Items */}
          <div className="space-x-6">
          <Link href="/home" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>)
    );
  };
  
  export default Navbar;
