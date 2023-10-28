import Hero from "@/components/hero";
import Products from "@/components/products";
import { ProductType } from "@/interfaces";


export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products/')
  const products :ProductType [] = await res.json()
  
  
  return (
    <main className=" min-h-screen max-w-7xl  mx-auto  px-8 xl:px-0  mt-5">
      <Hero />
      <section className="flex flex-col  space-y-12">
        <h1 className=" text-5xl font-bold text-center">
          SAMMI SHOP DETAILS
        </h1>
        <div className="grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 xl:gap-x-8 ">
          {
            products.map((product) => (
              <Products key={product.id} product={product} />
            ))
          }
        </div>

      </section>
    </main>
  )
}
