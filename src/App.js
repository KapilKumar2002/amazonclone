import Nav from "./components/Nav";
import { Categories, Arrivals, Footer } from "./sections";
import Carousel from "./sections/Carousel";


function App() {
  const list = [1,2,3,4,5,6,7,8]
  return (
    <main className="" id="home">
    
      <Nav />
      <section className="absolute w-full">
        <div className="max-container">
        <Carousel />
        </div>
      </section>
      <section className="relative max-xl:top-40 max-md:top-24 max-sm:top-12  top-56">
        <section className="px-4 py-8 max-container flex flex-col gap-10">
        <Categories />
        <Arrivals />
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </main>

    // <div className="w-full h-[100vh] grid grid-cols-4 max-container gap-4 max-md:grid-cols-2 md:p-2">
    //   {list.map(e=> <ChannelCard />)}
    // </div>

 
  );
}

export default App;
