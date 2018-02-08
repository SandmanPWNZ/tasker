import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskTable from '../components/TaskTable'
import * as actions from '../actions/tasks'

class Home extends Component{
    componentDidMount(){
      this.props.fetchTasks()
    }

    render(){
      console.log(this.props)
      return(
        <div>
            <TaskTable tasks={this.props.tasks.tasks} />
        </div>
      )
    }
}

function mapStateToProps({tasks}){
    return { tasks }
}

export default connect(mapStateToProps, actions)(Home)
