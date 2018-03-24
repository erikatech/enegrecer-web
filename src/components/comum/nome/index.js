import React from 'react';
import PropTypes from 'prop-types';
import CampoTexto from '../campoTexto';

const nome = ({ id, onChange, divClasse }) => (<CampoTexto
  id={id}
  label={'Nome (máximo de 40 caracteres)'}
  maxLen={40}
  placeholder={''}
  type={'text'}
  divClasse={`input-field ${divClasse}`}
  onChange={onChange}
/>);

nome.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
};

nome.defaultProps = {
  id: '',
  onChange: () => {},
  divClasse: 'col s12'
};

export default nome;

