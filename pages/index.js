import Image from "next/image";
// import { Inter } from 'next/font/google'
import Navbar from "components/navbar/Navbar";
import Landing from "@/components/Landing/Landing";
import Cards from "@/components/Cards/Cards"
import Card from "@/components/Cards/Card"
import Footer from "@/components/Footer/Footer";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="overflow-hidden">
 <div className=" " >
      <Navbar />
      </div>
      <div>
      <Landing className=""/>

      </div>
      
      <Card/>
    
      <Footer/>
    </main>
   
    
  );
}
