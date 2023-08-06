import { useState } from 'react'
const Clock = () => {
    const [time, settime] = useState(new Date().toLocaleTimeString());
    const updatetime=()=>{
        settime(new Date().toLocaleTimeString());
    }
    setInterval(updatetime, 1000);
  return (
    <>
    
        {time}
    
    </>
  )
}

export default Clock