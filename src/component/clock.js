import React from 'react'



class tickTock extends React.Component {

   constructor(props){
    super(props)
      
        this.state={date: new Date()};
    }
 componentDidMount(){
    this.timerID= setInterval (
        ()=>this.tick(),
        1000
    );
 }
 
 componentWillUnmount(){
    clearInterval(this.timerID);

 }
 tick(){
    this.setState({
        date:new Date()
    });
 }
 
 render(){
    return(
    <div>
    <h1>{this.state.date.toLocaleTimeString("en-US", {hour12: true})}</h1>
    </div>
    ) };
   
}
export default  tickTock;