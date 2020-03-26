import React,{Component} from 'react';
import AddAdoptionForm from './AddAdoptionForm';
import AvailableDogs from './AvailableDogs';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dogArray: [],
         }
    }

    updateArray = (newArray) => {
        this.setState(
            {
                dogArray: newArray
 
            }
        )
        console.log(`Running callBack ${this.state.dogArray}`)
    }

    render() { 
        return ( 
            <div>
                <div>
                    <AddAdoptionForm updateArray={this.updateArray}/>
                </div>
                <div>
                    <AvailableDogs dogArray={this.state.dogArray}/>
                </div>
            </div>
         );
    }
}
 
export default AppContainer;