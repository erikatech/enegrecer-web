import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';

const genero = ({ id, divClasse, onChange }) => (
  <Combobox
    id={id}
    label={'Gênero'}
    divClasse={divClasse}
    itens={['Feminino', 'Masculino']}
    valorPadrao={'Selecione seu gênero'}
  />
);

genero.propTypes = {
  id: PropTypes.string,
  divClasse: PropTypes.string,
  onChange: PropTypes.func
};

genero.defaultProps = {
  id: '',
  divClasse: '',
  onChange: () => { }
};

export default genero;

