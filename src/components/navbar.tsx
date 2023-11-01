import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
   <header className='flex justify-between items-center px-4 md:px-12 bg-white fixed top-0 z-50 w-full shadow-md '>
      <Link href={'/'} className=' flex items-center'>
        <Image  className='border-full m-0 p-0'
        src={'/techno.jpg'}
        alt='logo'
        width={160}
        height={20}/>
       
      </Link>

      <div className=' flex items-center space-x-3'>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <Link href={'/'} className="mr-5 hover:text-gray-900">Home Page</Link>
                  <Link href={'/products'} className="mr-5 hover:text-gray-900">All Products</Link>
                  <Link href={'/contacts'} className="mr-5 hover:text-gray-900">Contacts</Link>
     
              </nav>
           <Link href={'/shoppingcard'}>
             <button className='button bg-blue-600 text-white border-transparent
              hover:border-blue-600 hover:bg-transparent hover:text-blue-600 '>
                  My Bag
            </button>
           </Link>
           

      </div>

   </header>
  )
}

export default Navbar