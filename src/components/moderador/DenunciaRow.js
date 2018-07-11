import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import Combobox from '../comum/combobox';
import './painel-moderador.css';
import { detalhesDenuncia } from '../../actions/visualizarDenunciaActions';
import { classificarDenunciaRequisicao } from '../../actions/classificarDenunciaActions';

class DenunciaRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
      classificacaoDenuncia: '',
      open: false,
      idDenunciaSelecionada: ''
    };
  }

  mudaEstado = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  cliqueDetalhesDenuncia = denuncia =>
    denuncia.props.dispatch(detalhesDenuncia({ denuncia: denuncia.props.denuncia }));

  aceitarDenuncia = (idDenunciaSelecionada) => {
    this.setState({ idDenunciaSelecionada });
    this.setState({ open: true });
  }

  confirmaDenuncia = () => {
    console.log(this.state.idDenunciaSelecionada);
    // this.props.classificarDenunciaRequisicao();
  };

  render() {
    const { expanded, classificacaoDenuncia, open } = this.state;
    const { denuncia } = this.props;
    const { agressao } = denuncia;
    const { denunciante } = denuncia;

    return (
      <Fragment>
        <tr className="table-row">
          <td>{agressao.status}</td>
          <td>{agressao.data}</td>
          <td>{denuncia.vitima.genero}</td>
          <td>{agressao.estado}</td>
          <td>{agressao.cidade}</td>
          <td>{agressao.bairro}</td>
          <td>
            <Link
              to={`/visualizar-denuncia/${denuncia.id}`}
              className="mais-detalhes"
              onClick={() => this.cliqueDetalhesDenuncia(this)}
            >
              mais detalhes
            </Link>
          </td>
          <td width="50px">
            <input
              type="button"
              className={`botao-expandir-retrair ${expanded ? 'botao-retrair' : 'botao-expandir'}`}
              onClick={this.mudaEstado}
            />
          </td>
        </tr>
        {expanded && (
          <Fragment>
            <tr className="descricao-denuncia-row">
              <td>
                <label>Nome do Denunciante</label>
                <p>{denunciante.nome}</p>
              </td>
              <td>
                <label>E-mail</label>
                <p>{denunciante.email}</p>
              </td>

              <td>
                <label>Telefone</label>
                <p>{denunciante.telefone}</p>
              </td>

              <td>
                <label>Gênero</label>
                <p>{denunciante.genero}</p>
              </td>
              <td />
              <td />
              <td />
              <td width="50px" />
            </tr>

            <tr className="descricao-denuncia-row">
              <td colSpan="8">
                <label>Descrição Denúncia</label>
                <p>{agressao.descricao}</p>
              </td>
            </tr>

            <tr className="descricao-denuncia-row">
              <td colSpan="8">
                <hr />
              </td>
            </tr>

            <tr className="row-acoes-denuncia">
              <td colSpan="5">
                <Combobox
                  onChange={selectedValue =>
                    this.setState({ classificacaoDenuncia: selectedValue })}
                  value={classificacaoDenuncia}
                  label="Classifique a denúncia"
                  valorPadrao="Classifique a denúncia"
                  itens={['Injúria Racial', 'Racismo']}
                />
              </td>
              <td style={{ textAlign: 'right' }}>
                <input className="remover-denuncia" type="button" value="Deletar" />
              </td>

              <td colSpan="2" style={{ textAlign: 'center' }}>
                <input
                  // disabled={classificacaoDenuncia === ''}
                  type="button"
                  className="aceitar-denuncia"
                  value="aceitar denúncia"
                  onClick={() => this.aceitarDenuncia(denuncia.id)}
                />

                <Popup
                  open={open}
                  modal
                  closeOnDocumentClick={false}
                >
                  <div className="aceitar-denuncia-modal">
                    <h3>Gostaria de aceitar a denúncia?</h3>
                    <p>
                      Ao aceitar a denúncia ela fará parte das estastísticas.
                    </p>
                    <div className="container-botoes">
                      <input
                        type="button"
                        className="confirm"
                        value="sim"
                        onClick={this.confirmaDenuncia}
                      />

                      <input
                        type="button"
                        className="cancel"
                        value="não"
                        onClick={() => this.setState({ open: false })}
                      />
                    </div>
                  </div>
                </Popup>
              </td>
            </tr>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

DenunciaRow.propTypes = {
  denuncia: PropTypes.shape({
    agressao: PropTypes.shape({
      status: PropTypes.string,
      data: PropTypes.string,
      estado: PropTypes.string,
      cidade: PropTypes.string,
      bairro: PropTypes.string
    }),
    vitima: PropTypes.shape({
      genero: PropTypes.string
    })
  }).isRequired,
  classificarDenunciaRequisicao: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  classificarDenunciaRequisicao,
}, dispatch);

export default connect(null, mapDispatchToProps)(DenunciaRow);
