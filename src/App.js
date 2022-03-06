import React from "react";
let x;
class App extends React.PureComponent{
    state={
        time : 10
    }

    componentDidMount() {
        console.log('working componentDidMount')
            x=setInterval(()=>{
                this.setState({
                    time : this.state.time -1
            })
        }, 100)

    }

    componentDidUpdate() {
        console.log( 'working componentDidUpdate')
        if (this.state.time === 0) {
            clearInterval(x)
        }
    }
    render(){
        console.log('renders working')
        return(
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, qui?</p>
                <p>{this.state.time}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, maxime!</p>
            </div>
        );
    }

}

export default App;
