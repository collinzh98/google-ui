import './App.css';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import logo from './assets/GoogleLogo.png'
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [term, setTerm] = useState("")

    const handleChange = (e) =>{
        setTerm(e.target.value)
    }

    const search = e =>{
      e.preventDefault();
    }
      
    

  return (
<div className="flex justify-center flex-col h-screen bg-white text-[#202124] text-[13px] font-normal max-w-full">

  {/* Header Section */}
  <header className="flex justify-end p-[10px] text-md text-gray-700 flex-shrink-0">

        <div className="flex items-center space-x-4 cursor-pointer ">
          <p className="links">Gmail</p> 
            <p className="links">Images</p>
            <IconButton>
            <AppsIcon />
            </IconButton>
            <IconButton>
              <AccountCircleRoundedIcon />
          </IconButton>
        </div>

  </header>
      {/* Main Section */}
   <main className="flex flex-col flex-grow items-center mt-36">
      <img src={logo} alt="" className="object-cover"  />
        <div className="flex items-center w-full max-w-md sm:max-w-xl lg:max-w-2xl border border-[#dfe1e5] focus-within:shadow-lg hover:shadow-[#efefef] rounded-full px-5 py-[5px]  mt-6">
         <IconButton>
          <SearchOutlinedIcon style={{color: "gray", fontSize: "20px"}} />
         </IconButton>
              <input 
                type="text"
                value={term}
                onChange={handleChange}
                className="ml-3 flex-grow focus:outline-none text-[#1a1a1a]"  />
                 <IconButton>
                   <MicIcon style={{color: "gray"}}/>
                 </IconButton>
                 <IconButton>
                   <PhotoCameraIcon style={{color: "gray"}}/>
                 </IconButton>
                  
        </div>
           <div className="mt-6 space-x-4 flex items-center mb-[1.8rem]">
              <button onClick={search} className="btn">Google Search</button>
              <button onClick={search} className="btn ">I'm Feeling Awesome 🥳</button>
            </div>

            <p className="text-sm text-[#4D5156]">Google offered in: <span className="hover:underline text-[#1A0DAB] cursor-pointer pl-2">Kiswahili</span></p>
   </main>
   {/* Footer Section */}
     <Footer />
</div>
    
  );
}

export default App;
