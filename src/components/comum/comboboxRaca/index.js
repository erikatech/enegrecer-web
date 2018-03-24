import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../combobox';
import { racasVitima } from './racasVitima';
import { racasTestemunha } from './racasTestemunha';

const comboRaca = ({ id, onChange, somenteRacasVitima = true }) => (
  <Combobox
    id={id}
    itens={(somenteRacasVitima) ? racasVitima : racasTestemunha}
    divClasse={'input-field col s6'}
    onChange={onChange}
    label={'Selecione sua raça / cor'}
    valorPadrao={'Selecione sua raça / cor'}
  />
);

comboRaca.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  somenteRacasVitima: PropTypes.bool
};

comboRaca.defaultProps = {
  id: '',
  onChange: () => {},
  somenteRacasVitima: true
};

export default comboRaca;

