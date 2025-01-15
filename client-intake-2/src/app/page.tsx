import Image from "next/image";
import Header from './_components/header';
import Footer from "./_components/footer";
import PaginatedForm from "./_components/form-card";




export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">

      <Header />


      <main className="flex-grow flex items-center justify-center ">
      
          <PaginatedForm />
       
      </main>


      <Footer />
    </div>
  );
}
