import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
   <header className='flex justify-between items-center px-4 md:px-12 bg-white fixed top-0 z-50 w-full shadow-md py-2'>
      <Link href={'/'}>
        <Image 
        src={'/logo.svg'}
        alt='logo'
        width={150}
        height={40}/>
      </Link>

      <div className=' flex items-center space-x-3'>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <Link href={'/'} className="mr-5 hover:text-gray-900">First Link</Link>
                  <Link href={'/products'} className="mr-5 hover:text-gray-900">Second Link</Link>
     
              </nav>
            <button className='button bg-blue-600 text-white border-transparent
              hover:border-blue-600 hover:bg-transparent hover:text-blue-600 '>
                  Log in
            </button>
            <button className='button bg-white text-blue-600 border-blue-600
              hover:border-transparent hover:bg-blue-600 hover:text-white '>
                  Sign up
            </button>

      </div>

   </header>
  )
}

export default Navbar