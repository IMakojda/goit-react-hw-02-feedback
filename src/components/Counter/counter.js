import React from "react";
import s from "../Counter/Counter.module.css"
import ButtonControls from "components/buttomControls/buttonConctrols";

class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         value:0
    //     }
    // }
    state = {
        value:this.props.initialValue,
    }

    handleIncrement =(e)=> {
        this.setState((prevState) => {
            return {
                value:prevState.value+1,
            }
        })
    }

    handleDecrement =()=> {
        this.setState((prevState) => {
            return {
                value:prevState.value-1,
            }
        })
    }
    
    render() {
        return (
        
        <div className={s.Counter}>
                <span className={s.Counter_value}>{this.state.value}</span>
                
                <ButtonControls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            
        </div>
          
        );
    }
    
}
export default Counter;