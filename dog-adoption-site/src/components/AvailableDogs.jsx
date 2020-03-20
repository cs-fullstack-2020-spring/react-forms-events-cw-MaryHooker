import React,{Component} from 'react';

class AvailableDogs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listOfDogs: [],
         }
    }
    render() { 
        return ( 
            <div>
                <h1>Available Dogs</h1>
                {
                    this.props.listOfDogs.map((dog,index) =>{
                        return(
                            <div key={index}>
                                <p>{dog.name}</p>
                                <p>{dog.age}</p>
                                <p>{dog.breed}</p>
                                <p>{dog.trained}</p>
                                <p>{dog.color}</p>
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