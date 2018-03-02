import React from 'react'
import PropTypes from 'prop-types'
import { Field }  from 'redux-form'

export function CampoTexto(props) {
    return (
      { props.estado && <Field>  }
        <div className={props.divClasse}>
          <input
            id={props.id}
            type={props.type}
            onChange={props.onChange}
            className={props.inputClasse}
            maxLength={props.maxLen}
            placeholder={props.placeholder ? props.placeholder : undefined}
          />
          <label className="active" htmlFor={props.id}>{props.label}</label>
        </div>
      { props.estado && <Field />  }  
    );
  }
  
  CampoTexto.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    maxLen: PropTypes.number,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    divClasse: PropTypes.string,
    inputClasse: PropTypes.string,
    estado: PropTypes.string
  };
  
  CampoTexto.defaultProps = {
    id: '',
    type: '',
    maxLen: '',
    placeholder: '',
    label: '',
    onChange: () => {},
    divClasse: '',
    inputClasse: '',
    eatado: ''
  };

  export default CampoTexto;
  