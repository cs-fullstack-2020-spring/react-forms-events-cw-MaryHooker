import React,{Component} from 'react';
import AvailableDogs from './AvailableDogs';
import AddAdoptionForm from './AddAdoptionForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listOfDogs:[],
         }
    }
    //function to send down to the child so the child component to send back up its current array
    callBackFunction = (pass) =>{
        this.setState(
            {
                listOfDogs: pass
            }
        )
    }

    render() { 
        return ( 
            <div className='container'>
                {/* passing the current parent array so it can be iterated through in the child */}
                <div className='display'>
                    <AvailableDogs listOfDogs={this.state.listOfDogs}/>
                </div>
                {/* passing the function into the child so its in scope and can be pulled down using props */}
                <div className='form'>
                    <AddAdoptionForm callBackFunction={this.callBackFunction}/>
                </div>
            </div>
         );
    }
}
 
export default AppContainer;