import React, {useState, useEffect} from 'react'

function PomodoreTimer(){

    const [timeLeft, setTimeLeft] = useState(0);
    const [timersDone, setTimersDone] = useState(0);

    useEffect(()=>{
        if(timeLeft > 0){
            setTimeout(()=>{
                setTimeLeft(previousTime => previousTime - 1);
                if(timeLeft === 1){
                    setTimersDone(previousTimersDone => previousTimersDone + 1)

                    
                }
            }, 1000);

        
            
        }
        
    })

    return (
        <div>
            <div className="timer">
                <div>
                    <p>{timeLeft}</p>
                </div>

                <div>
                    <button onClick={()=>setTimeLeft(6*1)} >
                        Start a new Timer
                    </button>
                </div>
            </div>
            <div>
                <div id="past-timers">
                    <p>{timersDone}</p>
                </div>
            </div>
        </div>
    );

}

export default PomodoreTimer;