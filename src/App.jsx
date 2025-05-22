import Navbar from "./components/Navbar";
import Contents from "./pages/Contents";
import useStore from "./store/useStore";

const App = () => {
   const { posts, toggleLike } = useStore();
  return (
   <div className="min-h-screen bg-gray-100 flex flex-col">
    <Navbar />
    <Contents />
   </div>    
  )
}

export default App