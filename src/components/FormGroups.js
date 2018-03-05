import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import { Field } from 'redux-form';


export function TelefoneFormGroup({ handleChange, ...props }) {
  return (
    <div className="input-field col s6">
      <InputMask
        {...props}
        type="text"
        name={props.id}
        id={props.id}
        onChange={e => handleChange(e.target.value, 'telefone')}
        value={props.value}
        mask="(99) 99999-9999"
        maskChar=" "
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export function RadioGrupoBotoes(props) {

  return (
    <div className={props.classes}>
      { props.botoes.map(
        botaoRadio =>
          (<div key={botaoRadio.id}>
            <Field name={props.id} component={(fieldProps) => {
              const { input, meta: { touched, error } } = fieldProps;
              return (
                <div>
                    <input name={props.id} type="radio" {...input} value={botaoRadio.valor} id={botaoRadio.id} />
                    <label htmlFor={botaoRadio.id}>{botaoRadio.valor}</label>
                </div>
              )
            }}/>
          </div>
          )
      )
      }
    </div>
  )
}

RadioGrupoBotoes.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  botoes: PropTypes.arrayOf(PropTypes.object)
};

RadioGrupoBotoes.defaultProps = {
  classes: '',
  id: '',
  botoes: []
};

export function CheckBox(props) {
  return (
    <p>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </p>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

CheckBox.defaultProps = {
  id: '',
  label: ''
}


export function Combobox(props) {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <Field id={props.id} name={props.id} component="select">
          <option value="">{props.valorPadrao}</option>
          {props.itens.map(val => 
            <option key={val} value={val}> {val}</option>)
          }
      </Field>
    </div>
  )
}

Combobox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  divClasse: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.string),
  valorPadrao: PropTypes.string
};

Combobox.defaultProps = {
  id: '',
  label: '',
  divClasse: '',
  itens: [],
  valorPadrao: ''
};


export function CampoTexto(props) {
  const { name, id, maxLength, type, className, onChange, label, divClasse } = props;
  return (
    <Field name={id} component={(fieldProps) => {
        const { input, meta: { touched, error } } = fieldProps;
        return (
          <div className={divClasse}>
              <label className="active" htmlFor={id}>{label}</label>
              <input name={name} id={id} type={type} {...input} />
          </div>
        )
      }}
    />
  );
}

CampoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  className: PropTypes.string
};

CampoTexto.defaultProps = {
  id: '',
  type: '',
  maxLength: 255,
  placeholder: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  className: ''
};

const formGroupPropTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};


TelefoneFormGroup.propTypes = { ...formGroupPropTypes };

