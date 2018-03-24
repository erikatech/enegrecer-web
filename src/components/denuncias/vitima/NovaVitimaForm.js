import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CheckBox from '../../comum/checkbox';
import CampoTexto from '../../comum/campoTexto';
import { cortarPalavra } from '../../../utils/helpers';
import * as ConstantesCSS from '../ConstantesCss';
import * as Tela from '../../../utils/materializeCSS';
import Nome from '../../comum/nome';
import Genero from '../../comum/genero';
import Telefone from '../../comum/telefone';
import ComboboxRaca from './../../comum/comboboxRaca';
import Data from '../../comum/data';

export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      pessoaIdentificada: false,
      souAVitima: false,
      conhecoAVitima: false,
      nome: '',
      genero: '',
      raca: '',
      dataNascimento: '',
      endereco: '',
      estado: '',
      telefone: '',
      email: '',
      naturalidade: '',
      caracteristicasDaVitima: '',
    };
  }

  componentDidMount() {
    this.props.handleChange({ vitima: this.state });

    const raca = Tela.getElementoPorId('raca');
    raca.on('change', (e) => {
      this.handleChange(e.target.value, 'raca');
    });

    const comboEstado = Tela.getElementoPorId('estadoVitima');
    comboEstado.on('change', (e) => {
      this.handleChange(e.target.value, 'estado');
    });
  }

  handleChange(value, property) {
    this.setState({ [property]: value },
      () => this.props.handleChange({ vitima: this.state })
    );
  }

  render() {
    return (
      <div>
        <h2>Me conte um pouco sobre a vítima.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc nisl mi, egestas ac ipsum sit amet,
          blandit posuere metus. Donec imperdiet ut
          mi sed posuere. Pellentesque et varius sapien.
        </p>
        <CheckBox id={'vitima'} label={'Marque se você for a vítima'} onClick={e => this.handleChange(e.target.checked, 'conhecoAVitima')} />

        <div className="row">
          <Nome
            id={'nome-vitima'}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 40), 'nome')}
          />
          <Data
            id={'data-nascimento-vitima'}
            label={'Data de Nascimento'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={e => this.handleChange(e.target.value, 'dataNascimento')}
          />

        </div>

        <div className="row">
          <Telefone
            id="telefone-vitima"
            value={this.state.telefone}
            handleChange={this.handleChange}
            label={'Telefone'}
          />
          <CampoTexto
            id={'cidade-vitima'}
            label={'Cidade'}
            maxLen={40}
            placeholder={''}
            type={'text'}
            divClasse={'input-field col s6'}
          />
        </div>

        <div className="row">
          <Genero
            id={'genero-vitima'}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            onChange={e => this.handleChange(cortarPalavra(e.target.value, 15), 'genero')}
          />

          <ComboboxRaca
            id={'raca-vitima'}
            classes={`${ConstantesCSS.CLASSES_DIV_INPUT} col s6`}
            somenteRacasVitima
            onChange={this.handleChange}
          />
        </div>
      </div>);
  }
}

NovaVitimaForm.defaultProps = { handleChange: () => {} };

NovaVitimaForm.propTypes = {
  handleChange: PropTypes.func,
};
