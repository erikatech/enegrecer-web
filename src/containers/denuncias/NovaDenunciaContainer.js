import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { criarDenunciaRequisicao } from '../../actions/criarDenunciaActions';
import NovaDenunciaForm from '../../components/denuncias/NovaDenunciaForm';
import { reduxForm } from 'redux-form';

let NovaDenunciaContainer = reduxForm({
  form: 'nova-denuncia'
})(NovaDenunciaForm)

const mapStateToProps = state => ({
  denunciante: state.auth ? state.auth.user.uid : undefined,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  criarDenunciaRequisicao,
}, dispatch);

NovaDenunciaContainer = connect(mapStateToProps, mapDispatchToProps)(NovaDenunciaContainer);

export default NovaDenunciaContainer;