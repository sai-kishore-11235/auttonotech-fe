import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className='row w-full h-32 bg-black text-white text-center py-10 justify-center relative'>
        <h1 className='text-white font-extrabold text-3xl text-left ml-10'>About Us</h1>
      </div>
      <div style={{ position: 'relative', width: '90%', height: '35em' }} className='ml-10'>
      <Image
        src="/968.jpg"
        alt="Description"
        layout="fill"  // Fills the parent container
        objectFit="cover"  // Ensures the image covers the area without stretching
      />
    </div>
      <div className="px-6 py-4 relative">
        <div className="font-bold text-xl mb-2">Who are we, and what we do?
        </div>
        <p className="text-white text-base">
          Auttonotech is a certified company providing comprehensive solutions for the US Mortgage Loan Cycle. Our experienced professionals prioritize clients’ requirements and help them stay ahead of the curve with transformation solutions to redesign business processes and achieve greater efficiency, deeper insights, and superior results.

          Our key to a successful relationship with clients is to provide effective services that allow our customers to manage their business simply and efficiently. We have helped many clients develop and deliver new brand experiences across various fields and achieve greater customer satisfaction.
        </p>
      </div>
      <div className="px-6 py-4 relative">
        <div className="font-bold text-xl mb-2">Our Vision
        </div>
        <p className="text-white text-base">
        Our vision is to be recognized as one of the leading IT services companies globally. We strive to achieve our vision by providing quality services to our clients.
        </p>
      </div>
      <div className="px-6 py-4 relative">
        <div className="font-bold text-xl mb-2">Our Mission
        </div>
        <p className="text-white text-base">
        Our mission is to provide practical, secure, and affordable solutions for our clients’ operations within the agreed timeframes across various fields.
        </p>
      </div> 

    </>
  );
};

export default Page;