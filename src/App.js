import React from "react";
import './style.css'
let x
class App extends React.PureComponent{
    state={
        hours : 0 ,
        minute : 0,
        second : 0,
        start : false
    }

    startInterval=()=>{
        if (this.state.start === false){
            x = setInterval(()=>{
                this.setState({
                    second: this.state.second +1

                })
                if(this.state.second === 60){
                    this.setState({
                        second : 0,
                        minute : this.state.minute +1
                    })
                }
                if(this.state.minute === 60){
                    this.setState({
                        minute : 0,
                        hours : this.state.hours +1
                    })
                }
            }, 1000)
        }this.setState({
                start : true
            })
    }

    stopInterval=()=>{
        clearInterval(x)
        this.setState({
            start : false
        })
    }
    resetInterval=()=>{
        this.stopInterval();
        this.setState({
            hours : 0 ,
            minute : 0,
            second : 0
        })
    }

    // disabledButton1=()=>{
    //     return false
    // }
    render(){
        let {second, minute, hours} = this.state
        return(
            <div className={"dad"}>
                <div className={"container"}>
                    <h2>Timer</h2>
                    <p>
                        { hours > 9?hours : `0${hours}`} : { minute > 9?minute : `0${minute}`} : { second > 9?second : `0${second}`}
                    </p>
                    <button className={'green'} onClick={this.startInterval}>start</button>
                    <button className={"red"} onClick={this.stopInterval }>stop</button>
                    <button className={"gray"} onClick={this.resetInterval} >reset</button>
                </div>
            </div>
        );
    }

}
export default App;
