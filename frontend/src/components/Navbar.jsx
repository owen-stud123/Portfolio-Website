import { useState } from "react";
import { Menu, X } from "lucide-react";
   
   const navLists = [
        {href: '#home', label: 'Home'},
        {href: '#about', label: 'About'},
        {href: '#portfolio', label: 'Portfolio'},
        {href: '#services', label: 'Services'},
        {href: '#contact', label: 'Contact'},
    ];

    const Navbar = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
            <a href="#home" className="flex items-center space-x-2 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold text-lg group-hover:bg-sky-700 transition-all duration-300">
                    G
                </div>
                <span className="text-gray-900 font-semibold text-lg group-hover:text-sky-600 transition-all duration-300">Owen</span>
            </a>

            <div className="flex items-center gap-8">
            <nav className="hidden md:flex space-x-4 text-gray-700 font-medium">
                {navLists.map((item, index) => (
                    <a 
                        href={item.href} 
                        key={item.href} 
                        className="px-4 py-3 rounded-lg hover:bg-sky-100 hover:text-sky-600 transition-all duration-300"
                    >
                        {item.label}
                    </a>
                ))}
             </nav>
             <div className="hidden md:flex items-center">
                <a href="#contact" className="bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg">
                    Contact Me
                </a>
             </div>
             </div>
             <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>    
                   {isMenuOpen ? <X className="text-grey-700"/> : <Menu className="text-grey-700"/>}
                </button>
             </div>
        </div>
                {
        isMenuOpen && (
        <div className="md:hidden bg-white border-gray-200 shadow-md px-4 py-4 space-y-2 text-gray-700 font-medium">
            {navLists.map((link) => (
                <a 
                    href={link.href} 
                    key={link.href} 
                    className="block px-4 py-3 rounded-lg hover:bg-sky-100 hover:text-sky-600 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                     {link.label} 
                </a>
            ))}
        </div>
    )}
    </header>
  )
  }
export default Navbar;