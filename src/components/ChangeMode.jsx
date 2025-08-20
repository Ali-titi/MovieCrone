import { useEffect, useState } from 'react'


function ChangeMode() {
  const [theme,setTheme] = useState(localStorage.getItem('theme'));

  useEffect( () => {
      localStorage.setItem('theme',theme);
  }
    ,[theme]
  )
  
  return (
    
      <div className={`flex justify-center items-center h-screen ${theme==='light' ? 'bg-white' : 'bg-black'}`}>
        <div className={`p-[80px] ${theme==='light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
          <p className={`${theme==='light' ? 'text-black' : 'text-white'}`}>Vibe Coding</p> 
          <button onClick={()=> setTheme(prev=>prev=='light'?'dark':'light')} className=' p-2 bg-amber-500 rounded'>{theme==='light' ? 'Go Dark' : 'Go Light'}</button>
        </div>
      </div>
    
  )
}

export default ChangeMode