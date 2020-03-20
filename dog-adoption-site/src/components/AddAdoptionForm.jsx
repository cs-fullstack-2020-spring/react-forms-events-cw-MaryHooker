import React, { Component } from 'react';

class AddAdoptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            breed: '',
            trained: false,
            color: '',
            listOfDogs: [],
        }
    }

    //function to change initial states when inputs are used
    changeInputs = (event) => {
        if (event.target.name === 'name') {
            this.setState(
                {
                    name: event.target.value
                }
            )
        } else if (event.target.name === 'age') {
            this.setState(
                {
                    age: event.target.value
                }
            )
        } else if (event.target.name === 'breed') {
            this.setState(
                {
                    breed: event.target.value
                }
            )
        } else if (event.target.name === 'trained') {
            //use a bang symbol to toggle the checkbox setting that is not the initial state of this property
            this.setState(
                {       
                    trained: !this.state.trained
                }
            )

        } else if (event.target.name === 'color') {
            this.setState(
                {
                    color: event.target.value
                }
            )
        }
    }

    //function to handle submission button
    handleSubmission = (event) => {
        event.preventDefault();
        //call above array and push new values of properties using an object literal
        this.state.listOfDogs.push(
            {
                name: this.state.name,
                age: this.state.age,
                breed: this.state.breed,
                trained: this.state.trained,
                color: this.state.color,
            }
        )
            //globally reset the state of the array
        this.setState(
            {
                listOfDogs: this.state.listOfDogs
            }
        )
        //reference call back function from parents and pass in this child components current state array
        this.props.callBackFunction(this.state.listOfDogs)
    }

    render() {
        return (
            <div>
                <h1>Adoption Form</h1>
                <form action="">
                    <fieldset>
                        <legend>Form</legend>

                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id='name' name='name' value={this.state.name} onChange={this.changeInputs} />
                        </div>
                        <div>
                            <label htmlFor="age">Age: </label>
                            <input type="text" id='age' name='age' value={this.state.age} onChange={this.changeInputs} />
                        </div>
                        <div>
                            <label htmlFor="breed">Breed: </label>
                            <input type="text" id='breed' name='breed' value={this.state.breed} onChange={this.changeInputs} />
                        </div>
                        <div>
                            <p>Potty Trained?</p>
                            <label htmlFor="trained">Yes : </label>
                            <input type='checkbox' id='trained' name='trained' value={this.state.trained} onChange={this.changeInputs}/>
                        </div>
                        <div>
                            <label htmlFor="color">Color : </label>
                            <select id="color" name="color"
                                value={this.state.color} onChange={this.changeInputs}>
                                <option value="Color of dog? ">--</option>
                                <option value="white">white</option>
                                <option value="black">black</option>
                                <option value="brown">brown</option>
                                <option value="spotted">spotted</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                       
                            <button onClick={this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default AddAdoptionForm;