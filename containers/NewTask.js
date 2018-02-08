import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/tasks'
import NewTaskForm from '../components/NewTaskForm'
import NewTaskReview from '../components/NewTaskReview'

class NewTask extends Component{

  state = {
    showReview: false,
  }

  renderContent(){
    if(this.state.showReview){
      return <NewTaskReview submitTask={this.props.createTask} onCancel = {() => this.setState({showReview: false})}/>
    }
    return <NewTaskForm submitForm = {(imgURL) => this.setState({showReview: true})}/>
  }

  render(){
    console.log('New task props:', this.props)
    // createTask();
      return(
        <div>
          <h2 className={'text-center'}>Add new task</h2>
          {this.renderContent()}
        </div>
      )
  }
}

NewTask = connect(null, actions)(NewTask)


export default NewTask
