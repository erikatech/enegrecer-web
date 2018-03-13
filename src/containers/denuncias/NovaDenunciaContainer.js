import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormCode from '../../components/denuncias/FormCode';
import * as Tela from '../../utils/materializeCSS';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  criarDenunciaRequisicao, limpaEstadoUltimaDencunciaCadastrada
} from '../../actions/criarDenunciaActions';
import { validaDenuncia } from './validaDenuncia';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';


class NovaDenunciaContainer extends Component {
  componentDidMount() {
    Tela.iniciaCamposMaterialize();
  }

  componentWillUnmount() {
    if (this.props.denunciaCadastradaComSucesso) {
      this.props.limpaEstadoUltimaDencunciaCadastrada();
    }
  }

  onPressSaveButton = (values) => {
    // const mensagemError = validaDenuncia(this.state.vitima);
    // if (mensagemError === undefined) {
    //   this.props.criarDenunciaRequisicao({
    //     ...this.state
    //   });
    // } else {
    //   alert(mensagemError);
    // }
    console.log(values);
  }


  render() {
    if (this.props.denunciaCadastradaComSucesso) {
      return <Redirect to="/painel/proximosPassos" />;
    }
    return (
      <NovaDenunciaForm onSubmit={this.onPressSaveButton} />
    );
  }
}

const mapStateToProps = state => ({
  denunciante: state.auth ? state.auth.user.uid : undefined,
  denunciaCadastradaComSucesso: state.denunciaComSucessoReducer.denunciaCadastradaComSucesso
});

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
  limpaEstadoUltimaDencunciaCadastrada
}, dispatch);

const reduxNovaDenuncia = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NovaDenunciaContainer);

export default reduxNovaDenuncia;
/*
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';
import Form from '../../components/denuncias/SimpleForm';

export class NovaDenunciaContainer extends Component {
  constructor(props) {
    super(props);
    this.onPressSaveButton = this.onPressSaveButton.bind(this);
    this.adicionarDenunciaNoForm = this.adicionarDenunciaNoForm.bind(this);
    this.state = {
      vitima: null,
      denunciante: null,
      testemunha: null
    };
  }

  adicionarDenunciaNoForm(denuncia) {
    this.setState({
      ...denuncia,
    })
  }

}

NovaDenunciaContainer.propTypes = {
  criarDenunciaRequisicao: PropTypes.func.isRequired,
  limpaEstadoUltimaDencunciaCadastrada: PropTypes.func.isRequired,
  denunciaCadastradaComSucesso: PropTypes.bool.isRequired
};

NovaDenunciaContainer.defaultProps = {
  criarDenunciaRequisicao: () => {},
  denunciaCadastradaComSucesso: false,
  limpaEstadoUltimaDencunciaCadastrada: () => {},
};

 */
