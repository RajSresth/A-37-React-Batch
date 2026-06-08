import React from "react";
import "./card.css";
import axios from "axios";

class CardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,     
        userData: null,
        error: false,
        loading: false
    }
  }

  // 1. Mounting Phase
//   async componentDidMount()
//   {
//     console.log("Component Did Mount")
//     try {
//         this.setState({loading: true});
//         const {data} = await axios.get("http://localhost:3000/api/user/get-all-users")
//         this.setState({userData: data});
//     } catch (error) {
//         this.setState("Error in getAlluser");
//     }
//     finally{
//         this.setState({loading: false});
//     }
//   }

   componentDidMount(){
     console.log("Component did mount");
   }

  // 2. Updating Phase
  componentDidUpdate(prevState, prevProp)
  {
    if(prevState.count !== this.state.count)
    {
        console.log("ComponentDidUpdate");
    }
  }

  // 3. Unmounting Phase
  componentWillUnmount()
  {
    console.log("Component will unmount");
  }

  render() {
    
      // ? State Destructuring
      const {count,loading,error, userData} = this.state;
      console.log("Card Class Render");

      if(loading) return <h1>Loading...</h1>
      if(error) return <h1>{error}</h1>


    return (

      <div className="card-class">
        <h2>Card Class</h2>
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => {
               this.setState({count: count + 1})
            }}>Increase</button>
            <button onClick={() => {
                this.setState({count: count > 0 ? count - 1: 0})
            }}>Decrease</button>
        </div>

        <div>
            {/*{userData?.map(user => <h3 key={user.id}>{user.fullname}</h3>)} */}        
        </div>
      </div>
    );
                
            
  }
}

export default CardClass;



// ? Props Destructuring inside render() method
// const { fullname, age, team } = this.props?.user; 



/**
 * Class Based Component
 *  1. Mounting Phase
 *    - constructor()
 *    - render()
 *    - componentDidMount()
 * 
 * 2. Updation phase
 *   - render()
 *   - componentDidUpdate()
 * 
 * 3. Unmounting Phase
 *      - componentWillUnmount()
 *   
 */