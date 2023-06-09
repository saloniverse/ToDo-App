import  React, { useState , useEffect } from 'react'

const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='mydatetime'> 
            <p> Date : {date.toLocaleDateString()}</p>
            <p> Time : {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime;