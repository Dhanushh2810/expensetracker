import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <div className="mt-35" >
    <Hero />
  
  <section className="py-13 md:py-20  bg-blue-50 ">
    <div className="mx-auto   ">
      <div className="flex justify-around  ">
        {statsData.map((item,index) => (
          <div className="flex flex-col  " key={index}>
            <h3 className="text-2xl md:text-4xl font-bold text-center text-blue-600">{item.value}</h3>
            <p className="text-gray-600 text-center text-xs md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
<section className="py-2 md:py-4">
  <div>
    <h2 className="text-center text-2xl md:text-4xl font-bold text-zinc-600 p-2 m-3 md:m-6"  >Everything you need to manage your finances</h2>
    <div className="grid mx-3 md:mx-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
{featuresData.map((item,index) => (
  <Card  key={index}>

  <CardContent>
    {item.icon}
    <h3 className="text-sm md:text-lg my-1 font-bold text-zinc-800">{item.title}</h3>
    <p className="text-xs md:text-sm text-zinc-600">{item.description}</p>
  </CardContent>
 
</Card>
))}
    </div>
  </div>
</section>
<section className="py-4 bg-blue-50 ">
  <div>
    <h2 className="text-center text-2xl md:text-3xl font-bold text-zinc-800 p-2 m-3 md:m-6"  >How It Works</h2>
    <div className="grid mx-3 md:mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
{howItWorksData.map((item,index)=>(
 <div className="flex flex-col items-center justify-center" key={index}>
  <div className="p-4 bg-blue-100 rounded-full">{item.icon}</div>
<h1 className="text-sm md:text-lg my-1 font-bold text-zinc-800">{item.title}</h1>
<p className="text-xs md:text-sm text-zinc-600 mx-auto text-center">{item.description}</p>
 </div>



))}









    </div>
  </div>
</section>
<section className="py-2 md:py-4">
  <div>
    <h2 className="text-center text-2xl md:text-4xl font-bold text-zinc-600 p-2 m-3 md:m-6"  >What Our Users Say</h2>
    <div className="grid mx-3 md:mx-10 grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
{testimonialsData.map((item,index) => (
  <Card  key={index}>

  <CardContent>
   <div className="flex  items-center ">
    <div className="flex m-2 p-3 items-center justify-center"> <Image className="rounded-full" src={item.image} alt={item.name} width={50} height={50} />  </div>
    <div> <h1 className="text-sm md:text-lg  font-bold text-zinc-900 text">{item.name}</h1>
    <p className="text-xs md:text-sm mb-3 text-semibold text-zinc-700 mx-auto ">{item.role}</p></div>
   
    </div> 
    <p className="text-xs md:text-sm pb-3 text-gray-600 mx-auto px-2 ">{item.quote}</p>
  </CardContent>
 
</Card>
))}
    </div>
  </div>
</section>
<section className="py-10 bg-blue-500 md:py-14">
  <div>
    <h2 className="text-center text-2xl md:text-4xl font-bold text-white p-2  "  >Ready To Take Control Of Your Finances?</h2>
    <p className="text-center text-lg md:text-lg font-semibold text-white p-2  ">join 1000+ users who have already transformed their finances</p>
    <div className="flex justify-center items-center mt-4 ">   <Button className="bg-white text-blue-500 px-4 p-3  m-2 animate-bounce">Start free trial</Button>
    </div>

  </div>
</section>
 </div>
 
  );
}
