import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { cortarPalavra } from '../../helpers';
import { CampoTexto, RadioGrupoBotoes, Combobox } from '../FormGroups';
import { estados } from '../../dados'
import * as ConstantesCSS from '../layouts/ConstantesCss'
import * as Tela from '../../Tela';

export default class DetalhamentoDenuncia extends Component {
  
  render() {
    console.log(estados);
    return (
      <div>
        <h1>Nova Denúncia</h1>
        <div className="row">
          <CampoTexto
            id={'detalhamento'}
            label={'* Detalhamento'}
            type={'text'}
            className={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
          />
        </div>


        <div className="row">
          {<RadioGrupoBotoes
            classes={'col s3'}
            id={'idCategoria'}
            botoes={[{ id: 'radioInjuria', valor: 'injuria', label: 'Injúria' },
              { id: 'radioRacismo', valor: 'racismo', label: 'Racismo' }]}
          />}

          <CampoTexto
            id={'dataOcorrencia'}
            label={'Data do ocorrido'}
            className={ConstantesCSS.CLASSES_INPUT}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s4`}
            maxLength={0}
            type={'date'}
          />

          <CampoTexto
            id={'horaOcorrencia'}
            label={'Hora do ocorrido'}
            type={'time'}
            className={ConstantesCSS.CLASSES_INPUT}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s5`}
          />
        </div>

        <h4>Local do crime</h4>
        <div className="row">
          <CampoTexto
            id={'endereco'}
            label={'Endereço'}
            maxLength={255}
            type={'text'}
            className={ConstantesCSS.CLASSES_TEXTAREA}
            divClasse={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
          />
        </div>
        <div className="row">
          <Combobox
            id={'estado'}
            itens={estados}
            className={`${ConstantesCSS.CLASSES_DIV_INPUT} col s12`}
            label={'Selecione o Estado:'}
            valorPadrao={'Selecione'}
          />
        </div>
      </div>
    )
  }
}