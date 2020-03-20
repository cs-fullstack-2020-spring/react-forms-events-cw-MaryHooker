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
                {/* use map function to iterate thorugh the passed down array return a new one/ used a ternary inside of this funciton to toggle between yes and no for if the dog is trained */}
                <h1>Available Dogs</h1>
                {
                    this.props.listOfDogs.map((dog,index) =>{
                        return(
                            <div key={index}>
                                <p>Name: {dog.name}</p>
                                <p>Age: {dog.age}</p>
                                <p>Breed: {dog.breed}</p>
                                <p>Trained: {dog.trained ? 'yes':'no'}</p>
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