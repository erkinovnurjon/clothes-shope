import Blog from "@/components/blog"
import Feature from "@/components/feature"
import Product from "@/components/products"
import { ProductType } from "@/interfaces"

const page = async () => {

    const res = await fetch('https://fakestoreapi.com/products/')
  const products :ProductType [] = await res.json()

  return (
      <main className=" min-h-screen max-w-7xl  mx-auto  px-8 xl:px-0  mt-16">
      <Feature />
      <section className="flex flex-col  space-y-12">
        
        <div className="grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 xl:gap-x-8 ">
          {
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>

      </section>
      <Blog />
    </main>
  )
}

export default page