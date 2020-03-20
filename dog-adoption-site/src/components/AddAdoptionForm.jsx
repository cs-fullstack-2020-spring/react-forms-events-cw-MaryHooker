import React,{Component} from 'react';

class AddAdoptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: 0,
            breed: '',
            trained:'',
            color: '',
            listOfDogs:[],
         }
    }


    changeInputs = (event) =>{
        if(event.target.name==='name'){
            this.setState(
                {
                    name: event.target.value
                }
            )
        } else if(event.target.name==='age'){
            this.setState(
                {
                    age: event.target.value
                }
            )
        } else if(event.target.name==='breed'){
            this.setState(
                {
                    breed:event.target.value
                }
            )
        } else if(event.target.name==='trained'){
            this.setState(
                {
                    trained:event.target.value
                }
            )
            
        } else if(event.target.name==='color'){
            this.setState(
                {
                    color:event.target.value
                }
            )
        }
    }

    handleSubmission = (event) =>{
        event.preventDefault();

        this.state.listOfDogs.push(this.state.name)
        this.state.listOfDogs.push(this.state.age)
        this.state.listOfDogs.push(this.state.breed)
        this.state.listOfDogs.push(this.state.trained)
        this.state.listOfDogs.push(this.state.color)

        this.setState(
            {
                listOfDogs: this.state.listOfDogs
            }
        )
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
                            <input type="text" id='name' name='name' value={this.state.name} onChange={this.changeInputs}/>
                        </div>
                        <div>
                            <label htmlFor="age">Age: </label>
                            <input type="text" id='age' name='age' value={this.state.age} onChange={this.changeInputs}/>
                        </div>
                        <div>
                            <label htmlFor="breed">Breed: </label>
                            <input type="text" id='breed' name='breed' value={this.state.breed} onChange={this.changeInputs}/>
                        </div>
                        <div>
                            <label htmlFor="trained">Trained: </label>
                            <input type='checkbox' id='trained' name='trained' value={this.state.trained} onChange={this.changeInputs}/>
                        </div>
                        <div>
                            <label htmlFor="color">Color: </label>
                            <input type="text" id='color' name='color' value={this.state.color} onChange={this.changeInputs}/>
                        </div>
                        <button onClick={this.handleSubmission}>SUbmit</button>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default AddAdoptionForm;