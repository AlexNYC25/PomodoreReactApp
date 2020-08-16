import React, {useState, useEffect} from 'react'
import * as gifUrls from './gifs.json'

function PomodoreTimer(){

    let startingTimeStr = "1:30";
    let startingTimeSeconds = 90;

    let defaultGif = "https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif";

    const [secLeft, setSecLeft] = useState(90);
    const [isActive, setIsActive] = useState(false);
    const [timeDisplay, setTimeDisplay] = useState(startingTimeStr);
    const [finishedTimers, setFinishedTimers] = useState(0);

    const [gifActive, setGifActive] = useState(false);
    const [gifUrl, setGifUrl] = useState(defaultGif);

    const [timeForBreak, setTimeForBreak] = useState(false);

    function toggle() {
        backToWork();
        setIsActive(!isActive);

        if(isActive){
            //setSecLeft(90);
        }
        console.log(gifUrls.break.length)
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
        reset();
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
            reset();
            
        }
        } else if (!isActive && secLeft !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [isActive, secLeft]);

    useEffect(() => {
        // set up a new gif
        if(finishedTimers % 4 === 0){
            // set up break gif
            let num = Math.floor(Math.random() * gifUrls.break.length)
            setGifUrl(gifUrls.break[num])
            setTimeForBreak(true);
        } else {
            // set up work gif
            let num = Math.floor(Math.random() * gifUrls.task.length)
            setGifUrl(gifUrls.task[num])
            setTimeForBreak(false)
        }
    }, [gifActive])



    return (
        
        <div id="pomodore-timer" className="container align-items-center">
            
            
            <div className="timer">
                <div className="row">
                    <p id="clock-display" className="col h1"> {timeDisplay} </p>
                </div>

                <div className="row justify-content-center">
                    <button onClick={toggle} className="col-3 clock-button">
                        {isActive ? 'Pause' : 'Start'}
                    
                    </button>

                    <button onClick={reset} className="col-3 clock-button">
                        Reset
                    </button>
                </div>

                <div className="row">
                    <div id="finished-timers" className="col">
                        <p>Currently finished {finishedTimers} pomodore timers</p>
                    </div>
                </div>
            </div>
            

            <div className={gifActive ? "container gifItem" : "container hiddenItem" }>
                <div className="row justify-content-center">
                    <p>
                        {timeForBreak ? "Take a 15 Minute break before continuing"
                        : "Great Job keep up the good work"
                        }

                    </p>
                </div>
                    
                <div className="row justify-content-center" >
                    <img src={gifActive ? gifUrl : defaultGif} alt="provided by giphy" />
                </div>
                
                <div className="row justify-content-center ">
                    <button onClick={backToWork}>
                        Let's get back to work
                    </button>
                </div>

                
            </div>
        </div>
    );

}

export default PomodoreTimer;