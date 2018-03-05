import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

let ContactForm = props => {
    const { envia } = props
    return (
      <form onSubmit={envia} noValidate>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
  
  let DenunciaContainer = reduxForm({
    form: 'denuncia'
  })(ContactForm)

  export default connect(null, null)(DenunciaContainer);