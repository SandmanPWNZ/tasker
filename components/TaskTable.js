import React from 'react'
import _ from 'lodash'
import { Table } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'


export default function TaskTable({ tasks }) {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User name</th>
          <th>User email</th>
          <th>Task text</th>
          <th>Image</th>
          <th>Done</th>
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
