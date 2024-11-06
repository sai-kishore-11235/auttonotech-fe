import Image from 'next/image'

const Page= () => {
    return (
      <>
      <div className='w-full h-32 bg-black text-white text-center py-10 justify-center '>
          <h2>About Us</h2>
      </div>
     <div className="w-full rounded overflow-hidden shadow-lg">
  <Image className="w-full" src="/aboutus1.jpg" alt="Sunset in the mountains"  width="23" height="10"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Who are we, and what we do?
    </div>
    <p className="text-white text-base">
Auttonotech is a certified company providing comprehensive solutions for the US Mortgage Loan Cycle. Our experienced professionals prioritize clients’ requirements and help them stay ahead of the curve with transformation solutions to redesign business processes and achieve greater efficiency, deeper insights, and superior results.

Our key to a successful relationship with clients is to provide effective services that allow our customers to manage their business simply and efficiently. We have helped many clients develop and deliver new brand experiences across various fields and achieve greater customer satisfaction. 
    </p>
  </div>

</div>
      </>
    );
  };
  
  export default Page;