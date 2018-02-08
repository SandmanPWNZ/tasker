import React from 'react'
import { connect } from 'react-redux'
import {NEW_TASK} from '../constants'
const styles = {
  preShow: {
    fontSize: '1.15rem',
    fontWeight: 'bold'
  },
  lableStyle:{
    color: '#9a9a9a'
  }
}
const NewTaskReview = props =>{
  console.log('review props:',props);
  const { onCancel, formValues, submitTask } = props

  if(formValues.image){
    const imgURL = window.URL.createObjectURL(formValues.image);
  } else {
    const imgURL = null
  }

  function createAntother(){
    var form = new FormData();
    form.append('username', formValues.userName)
    form.append('email', formValues.email)
    form.append('text', formValues.text)
    form.append('image', formValues.image)

    submitTask(form);
  }


  return(
    <div className={'offset-md-4 col-md-4'}>
      <h5>Check is everything ok?</h5>
      <div>
        <div className={'form-group'}>
          <label style={styles.lableStyle}>User name</label>
          <div style={styles.preShow}>{formValues.userName}</div>
        </div>
        <div className={'form-group'}>
          <label style={styles.lableStyle}>User email</label>
          <div style={styles.preShow}>{formValues.email}</div>
        </div>
        <div className={'form-group'}>
          <label style={styles.lableStyle}>Tasks' text</label>
          <div style={styles.preShow}>{formValues.text}</div>
        </div>
        <div className={'form-group'}>
          <label style={styles.lableStyle}>Image</label>
          <div style={styles.preShow}>
            { imgURL ? <img src={imgURL} width={320} height={320}/> : <span>No image uploaded</span> }
          </div>
        </div>
      </div>
      <button className={'btn btn-danger'}
        onClick={onCancel}>
        Edit values
      </button>
      <button className={'btn btn-success float-right'}
        onClick={createAntother}>
        Submit
      </button>
    </div>
  )
}
function mapStateToProps({form}){
  console.log(form[NEW_TASK].values)
  return {formValues: form[NEW_TASK].values}
}
export default connect(mapStateToProps)(NewTaskReview)
