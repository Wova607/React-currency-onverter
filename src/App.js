import React, {Component} from 'react';


import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { clc:null, rez:"0" }
  }
 

  render() { 
    
    this.state.rezlstr =<h1></h1>

    if (this.state.clc==="usd") {
      this.state.rezlstr=<h1>Your have {this.state.rez} USD</h1>
    }

    if(this.state.clc==="uah")
    {
      this.state.rezlstr=<h1>Your have {this.state.rez} UAH</h1>
    }


    return ( 
      <div className="App">
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
     <label className="navbar-brand col-sm-3 col-md-2 mr-0"> Your currency converter</label>  
     </nav>
     <br></br><br></br><br></br>
     <div className="container">
     <div className="row"><label className="navbar-brand">1 USD =</label><input type="number" className="form-control col-sm-3 col-md-3 mr-0" ref="kurs"></input><label className="navbar-brand"> UAH</label></div>
      
      <h2 class="">How money you have:</h2>            
      <input type="text" className="form-control" ref="money"></input><br></br><br></br>  
      <input type="button" value="Covert To USD" className="btn btn-lg btn-secondary" onClick={this.toUSD} ref="usdClic"></input><label>&emsp;&emsp;</label>
      <input type="button" value="Covert To UAH" className="btn btn-lg btn-secondary" onClick={this.toUAH}></input>
      <br></br><br></br>  
       </div>
        {this.state.rezlstr}

     </div> 

     );
  }


  toUSD = () =>
  {
   this.state.rez = this.refs.money.value/this.refs.kurs.value;
  this.setState({clc:"usd"});
    
  }
  
  toUAH = () =>
  {
    this.state.rez = this.refs.money.value*this.refs.kurs.value;
    this.setState({clc:"uah"});   
  }
 
}
 
export default App;
