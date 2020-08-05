import React, {useState, useEffect} from 'react'

function PomodoreTimer(){

    let startingTimeStr = "1:30";
    let startingTimeSeconds = 90;

    const [secLeft, setSecLeft] = useState(90);
    const [isActive, setIsActive] = useState(false);
    const [timeDisplay, setTimeDisplay] = useState(startingTimeStr);
    const [finishedTimers, setFinishedTimers] = useState(0);

    const [gifActive, setGifActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);

        if(isActive){
            //setSecLeft(90);
        }
      }
    
    function reset() {

        // reset seconds counter
        setSecLeft(startingTimeSeconds);
        // set timer active bool to false
        setIsActive(false);
        // reset display to standard time
        setTimeDisplay(startingTimeStr);
    }

    function backToWork() {
        setGifActive(false);
    }

    /*
    useEffect(() => {
        let min = Math.floor(secLeft/ 60);
        let sec = secLeft - (min * 60);

        let tempTimeForm = "";
        tempTimeForm += "" + min + ":" + (sec < 10 ? "0" : "");
        tempTimeForm += "" + sec;

        setTimeDisplay(tempTimeForm);

    }, [])
    */

    useEffect(() => {
        // create interval
        let interval = null;
        // if timer is active
        if (isActive) {
            // increment the 
            interval = setInterval(() => {
            setSecLeft(seconds => seconds - 1);
        }, 1000);

        let min = Math.floor(secLeft/ 60);
        let sec = secLeft - (min * 60);

        let tempTimeForm = "";
        tempTimeForm += "" + min + ":" + (sec < 10 ? "0" : "");
        tempTimeForm += "" + sec;

        setTimeDisplay(tempTimeForm);

        if(secLeft === 0){
            clearInterval(interval);
            setFinishedTimers(past => past + 1);
            setGifActive(true)
        }
        } else if (!isActive && secLeft !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

      }, [isActive, secLeft]);




    return (
        <div>
            <div className="timer">
                <div>
                    <p> {timeDisplay} </p>
                </div>

                <div>
                    <button  onClick={toggle}>
                        {isActive ? 'Pause' : 'Start'}
                    
                    </button>

                    <button onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
            <div>
                <div id="finished-timers">
                    <p>{finishedTimers}</p>
                </div>
            </div>

            <div className={gifActive ? "gifItem" : "hiddenItem" }>
                <p>Test Text</p>
                <button onClick={backToWork}>
                    Let's get back to work
                </button>
            </div>
        </div>
    );

}

export default PomodoreTimer;