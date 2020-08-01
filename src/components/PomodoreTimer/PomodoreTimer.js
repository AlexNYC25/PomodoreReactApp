import React, {useState, useEffect} from 'react'

function PomodoreTimer(){

    const [secLeft, setSecLeft] = useState(90);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);

        if(isActive){
            setSecLeft(90);
        }
      }
    
    function reset() {

        setSecLeft(0);
        setIsActive(false);
    }

    useEffect(() => {
        // create interval
        let interval = null;
        // if timer is active
        if (isActive) {
            // increment the 
          interval = setInterval(() => {
            setSecLeft(seconds => seconds - 1);
          }, 1000);
        } else if (!isActive && secLeft !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, secLeft]);




    return (
        <div>
            <div className="timer">
                <div>
                    <p> {secLeft} </p>
                </div>

                <div>
                    <button  onClick={toggle}>
                        {isActive ? 'Pause' : 'Start'}
                    
                    </button>
                </div>
            </div>
            <div>
                <div id="past-timers">
                    <p></p>
                </div>
            </div>
        </div>
    );

}

export default PomodoreTimer;