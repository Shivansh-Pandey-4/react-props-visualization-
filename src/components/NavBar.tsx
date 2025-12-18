export default function NavBar(){

   const sections = [
    {id : "basic", label: "Basic Props", icon : '📦'},
    {id : "children", label: "Children Props", icon : '👶'},
    {id : "ref", label: "Ref Props", icon: '🔗'},
    {id : "complex", label: "Complex Props", icon: '🧩'},
    {id : "theme", label: "Theme Props", icon : '🎨'}
   ]

   return (
      <nav className='sticky top-0 z-50 shadow-md'>
         <div>
           <div className="flex flex-wrap justify-center">
             {
                sections.map((section) => <div key={section.id}> <a href={`#${section.id}`}> <button className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white my-3 mr-2 cursor-pointer hover:bg-blue-800"> <span className="mr-2"> {section.icon}{section.label} </span></button> </a> </div>)
             }
           </div>
         </div>
      </nav>
   )
}