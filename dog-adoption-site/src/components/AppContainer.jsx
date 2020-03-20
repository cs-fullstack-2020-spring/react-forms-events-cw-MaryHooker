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
                
                <div className='display'>
                    <AvailableDogs listOfDogs={this.state.listOfDogs}/>
                </div>
                <div className='form'>
                    <AddAdoptionForm callBackFunction={this.callBackFunction}/>
                </div>
            </div>
         );
    }
}
 
export default AppContainer;