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
            dogArray: [],
        }
    }

    handleInputs = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value })
        } else if (event.target.name === 'age') {
            this.setState({ age: event.target.value })
        } else if (event.target.name === 'breed') {
            this.setState({ breed: event.target.value })
        } else if (event.target.name === 'trained') {
            this.setState({ trained: true })
        } else if (event.target.name === 'color') {
            this.setState({ color: event.target.value })
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();

        this.state.dogArray.push(
            {
                name:this.state.name,
                age: this.state.age,
                breed: this.state.breed,
                trained: this.state.trained,
                color:this.state.color
            }

        )
        this.setState(
            {dogArray:this.state.dogArray}
        )
        this.props.updateArray(this.state.dogArray)
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add Dog</legend>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleInputs} />

                        <label htmlFor="age">Age: </label>
                        <input type="text" id='age' name='age' value={this.state.age} onChange={this.handleInputs} />

                        <label htmlFor="breed">Breed: </label>
                        <input type="text" id='breed' name='breed' value={this.state.breed} onChange={this.handleInputs} />

                        <h2>Potty Trained?</h2>
                        <label htmlFor="trained">Yes: </label>
                        <input type="checkbox" id='trained' name='trained' value={this.state.trained} onChange={this.handleInputs} />

                        <select name="color" id="color" value={this.state.color} onChange={this.handleInputs}>
                            <option value="color">Color</option>
                            <option value="brown">brown</option>
                            <option value="black">black</option>
                            <option value="spotted">spotted</option>
                            <option value="other">other</option>
                        </select>


                        <button onClick={this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default AddAdoptionForm;