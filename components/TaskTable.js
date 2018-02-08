import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Table } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'


export default class TaskTable extends Component {
  static propTypes ={
    fetch: PropTypes.function
  }
  state={
    page: 0,
    sort_field: 'id',
    sort_direction: 'asc'
  }
  handleSort(type){
    this.setState({
      sort_field: type
    })
    fetch(this.state.sort_field, this.state.page, this.state.sort_direction)
  }

  render(){
    const { tasks, fetch } = this.props

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th onClick={this.handleSort('id')}>#</th>
          <th onClick={this.handleSort('username')}>User name</th>
          <th onClick={this.handleSort('email')}>User email</th>
          <th>Task text</th>
          <th>Image</th>
          <th onClick={this.handleSort('status')}>Done</th>
        </tr>
      </thead>
      <tbody>
        {
          _.map(tasks, (task, key)=>{
            return(
              <tr key={key}>
                <td>{task.id}</td>
                <td>{task.username}</td>
                <td>{task.email}</td>
                <td>{task.text}</td>
                <td><img src={task.image_path}/></td>
                <td><input type="checkbox" checked={task.status} disabled /></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}
}
