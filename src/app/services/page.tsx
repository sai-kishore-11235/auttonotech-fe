import exp from 'constants'
import Image from 'next/image'

const myList = [
    { title: 'US Mortgage Services', paragraph: 'We offer complete support for the US Mortgage Loan Process, including loan originations, title services, title curative, title settlements, title servicing, and quality audits.' },
    { title: 'Loan Originations', paragraph: 'We have comprehensive mortgage domain experience and use software to streamline the whole process. We help you from a new loan set up to post closing services.' },
    { title: 'Title Services', paragraph: 'Our experts appropriately use title servicing tools to check the property’s title history, facilitate the closing process, and issue title insurance.' },
    { title: 'Title Curative', paragraph: 'Our curative title specialists provide intuitive solutions to trust deeds, missing mortgage assignments/documents, and other mortgage-related documents.' },
    { title: 'Title Settlement', paragraph: 'Our expert professionals use the best tools for Settlement services and deliver superior results within agreed timeframes to ensure accuracy.' },
    { title: 'Quality Audits', paragraph: 'Before we hand over the documents to clients, our experts do quality audits and validations to avoid defects, ensuring compliance.' },
    { title: 'IT Services', paragraph: 'We develop tailor-made mobile and web applications for today and tomorrow using cutting-edge technologies.' },
    { title: 'Digital Marketing', paragraph: 'Our marketing experts offer services including Search Engine Optimization (SEO), Search Engine Management (SEM), web strategy, and more.' },
    { title: 'Cloud Migration', paragraph: 'We help you migrate your data and applications to a cloud environment with data backup and recovery options.' },




];
const Page = () => {
    return (
        <div className='w-full flex flex-wrap justify-center'>
        {myList.map((item: any, index: any) => (
            <div key={index} className='flex w-8/12 pt-2 mt-2 mr-1 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                <a href="#" className="flex flex-row items-center">
                    <Image src="/image-4.jpg" alt="te" width={200} height={100} className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg' />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.paragraph}</p>
                    </div>
                </a>
            </div>
        ))}
        </div>
    )
}

export default Page