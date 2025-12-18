import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import NavBar from "./components/NavBar"
import RefProps from "./components/RefProps"
import ThemeProps from "./components/ThemeProps"


function AppContent(){
   return (
   <div className="min-h-screen bg-gray-800">
        <NavBar />
     <div className="container mx-auto px-4 py-8">
         <header className="text-center mb-12  text-white">
             <h1 className="text-5xl font-bold mb-4 text-white">React Props Explained.</h1>
             <p className="text-xl text-gray-300">A comprehensive guide to understanding <span className=" border border-red-500 px-1 pb-1 rounded-md"> props</span> in react.</p>
         </header>
         <div className="space-y-8">
              <div className="scroll-mt-100" id="basic">
                   <BasicProps />
              </div>
              <div className="scroll-mt-100" id="children">
                   <ChildrenProps />
              </div>
              <div className="scroll-mt-100" id="ref">
                   <RefProps />
              </div>
              <div className="scroll-mt-100" id="complex">
                   <ComplexProps />
              </div>
              <div className="scroll-mt-100" id="theme">
                   <ThemeProps />
              </div>
         </div>
         <footer className="text-center mb-12  text-gray-300">
             <p>Made with 💗 by Shivansh Pandey.</p>
         </footer>
     </div>
   </div>)
}

export default function App(){
  return (
    <AppContent />
  )
}