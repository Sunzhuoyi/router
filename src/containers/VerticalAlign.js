import React, {Component} from 'react';
import mobx from "../imgs/mobx.jpg";

class VerticalAlign extends Component {
    render() {
        return (
            <div>

               <div style={{backgroundColor: "yellow"}}>
                   <img src={mobx} alt="" style={{width: "200px"}}/>
               </div>

                <br/>

                <div style={{backgroundColor: "yellow", width: "300px", lineHeight: "200px", height: "200px"}}>
                    <img src={mobx} alt="" style={{height: "190px", verticalAlign: "middle"}}/>
                </div>

                <br/>

                <div style={{width: "100px", height: "100px", backgroundColor: "yellow", display: "inline-block"}}></div>
                <div style={{width: "100px", height: "100px", backgroundColor: "yellow", display: "inline-block"}}>X</div>

                <br/>

                <div style={{fontSize: "0"}}>
                    <div style={{width: "100px", height: "100px", backgroundColor: "yellow", display: "inline-block"}}></div>
                    <div style={{width: "100px", height: "100px", backgroundColor: "yellow", display: "inline-block"}}>x</div>
                </div>

                <br/>

                <div style={{backgroundColor: "red", lineHeight: "300px"}}>
                    <div style={{width: "100px", height: "100px", backgroundColor: "yellow", display: "inline-block"}}></div>
                    <div style={{width: "100px", height: "100px", backgroundColor: "yellow", display: "inline-block"}}>X</div>
                </div>

            </div>
        );
    }
}

export default VerticalAlign;