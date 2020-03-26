import React,{Component} from 'react';

class AvailableDogs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {
                    this.props.dogArray.map((dog)=>{
                        return(
                            <div>
                                <p>Name: {dog.name}</p>
                                <p>Age: {dog.age}</p>
                                <p>Breed: {dog.breed}</p>
                                <p>Trained: {dog.trained ? 'Yes': 'No'}</p>
                                <p>Color: {dog.color}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default AvailableDogs;