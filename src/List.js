import React,{Component} from 'react'

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            firstname: "Juan ",
            lastname: "Dela Cruz ",
            age: 21
          },
          {
            firstname: "Mark ",
            lastname: "Paul ",
            age: 22
          },
          {
            firstname: "Paul ",
            lastname: "Mark ",
            age: 23
          }
        ]
      };
    }
    render() {
      
      return (
        <div>
        <center style ={{paddingTop:"10%"}}>
            <div class="ui card raised" style ={{width:"25%",background:"linear-gradient(to bottom, #000000 0%, #ffffff 100%)"}}>
            <div class="content">
                <h1 style = {{fontSize:"15px",textAlign:"justify",color:"white"}}>
                  {this.state.data.map(d => (
                    <li key={d.firstname}>
                      {d.firstname}
                      {d.lastname}
                      {d.age}
                    </li>
                  ))}
                </h1>
            </div>
          </div>
        </center>
    </div>
          
      );
    }
  }
  export default List;