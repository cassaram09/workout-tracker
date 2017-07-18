import React, {Component, PropTypes}  from 'react'
import ExerciseForm from './exerciseForm'

class NewExercisePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      exercise: {
        name: '', 
      }  
    }

    // update cat attributes
    this.updateExerciseState = (event) => {
      const field = event.target.name;
      const exercise = this.state.exercise;
      exercise[field] = event.target.value;
      return this.setState({exercise: exercise});
    }

    this.saveExercise = (event) => {
      event.preventDefault();
      alert('saved!')
      // this.props.actions.ApiAction('catApi', 'createCat', this.state.cat);
    }
  }

  

  render(){
    return (

      <div className="col-md-8 col-md-offset-2">
      {this.props.children}
        <h1>New Exercise</h1>
        <ExerciseForm 
        exercise={this.state.exercise} 
        onSave={this.saveExerise} 
        onChange={this.updateExerciseState} />
      </div>
    )
  }
};


// function mapStateToProps(state, ownProps) {  
//   let checkBoxHobbies = [];
//   if (state.hobbies.length > 0) {
//     checkBoxHobbies = hobbiesForCheckBoxes(Object.assign([], state.hobbies));
//   }

//   return {
//     checkBoxHobbies: checkBoxHobbies
//   };
// }

// function mapDispatchToProps(dispatch) {  
//   return {
//     actions: bindActionCreators(catActions, dispatch)
//   };
// }

export default NewExercisePage;
