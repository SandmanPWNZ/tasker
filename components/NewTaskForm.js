import React from 'react'
import FieldFileUploader from '../components/FieldFileUploader'
import {Field, reduxForm} from 'redux-form'
import { NEW_TASK, DEVELOPER_NAME } from '../constants'


export let NewTaskForm = props =>{

  const { submitForm, handleSubmit, pristine, reset, submitting } = props




  return(
    <div className={'col-md-4 offset-md-4'}>
      {/* <form onSubmit={handleSubmit(values => createTask(values))}> */}
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={'form-group'}>
          <label htmlFor="userName">Username</label>
          <Field name="userName" id={'userName'} className={'form-control'} component="input" type="text" />
          <small>Enter a user name</small>
        </div>
        <div className={'form-group'}>
          <label htmlFor="Email">Email</label>
          <Field name="email" id={'Email'} className={'form-control'} component="input" type="email" />
          <small>Enter a valid email</small>
        </div>
        <div className={'form-group'}>
          <label htmlFor="Text">What you have to do:</label>
          <Field name="text" id={'Text'} className={'form-control'} resize="false" component="textarea" type="text" />
          <small>Enter your task here!</small>
        </div>
        <div className={'form-group'}>
          <label htmlFor="Image">Upload image</label>
          <Field name="image" id={'Image'} className={'form-control'} component={FieldFileUploader}/>
          <small>Upload an image for your task</small>
        </div>
        <div>
          <button className={'btn btn-danger'} type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
          <button className={'btn btn-success float-right'} type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

NewTaskForm = reduxForm({
  form: NEW_TASK,
  destroyOnUnmount: false
})(NewTaskForm)

export default NewTaskForm
