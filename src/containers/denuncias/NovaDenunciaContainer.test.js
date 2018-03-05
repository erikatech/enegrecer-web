import React from 'react';
import { shallow, mount } from 'enzyme';
import NovaDenunciaContainer from './NovaDenunciaContainer';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

describe('NovaDenunciaContainer', () => {
  let store
  let subject
  let criarDenunciaRequisicao

  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    criarDenunciaRequisicao = jest.fn();
		const props = {
			criarDenunciaRequisicao,
		}
		subject = mount(
			<Provider store={store}>
				<NovaDenunciaContainer {...props}/>
      </Provider>
    );
  });

  it('submete o formulario', () => {
    const form = subject.find('form');

  });




  xit('renderiza o container sem erros', () => {
    const wrapper = shallow(
      <NovaDenunciaContainer currentUserUID="" criarDenunciaRequisicao={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });

  xit('renderiza sem erros o formulário de denúncias dentro do container', () => {
    const wrapper = mount(<NovaDenunciaContainer
      currentUserUID=""
      criarDenunciaRequisicao={() => { }}
    />
    );
    expect(wrapper.find('#form-nova-denuncia').length).toBe(1);
  });

  describe('método onPressSaveButton', () => {
    const criarDenunciaRequisicaoMock = jest.fn();
    /*const wrapper = shallow(
      <NovaDenunciaContainer
        currentUserUID=""
        criarDenunciaRequisicao={criarDenunciaRequisicaoMock}
      />);*/

    xit('não deve chamar o método criarDenunciaRequisicao quando o form estiver inválido', () => {
      wrapper.setState({
        vitima: {
          pessoaIdentificada: false,
          nome: 'dsaklkadlaksdlkasldkalskdlaskdasldkalskdalskdlaskdlaskdlksdasdlsak',
          genero: 'feminino',
          raca: 'parda',
          dataNascimento: '1900-01-02',
          endereco: 'Av. teste',
          estado: 'AM',
          telefone: '99999999999',
          email: 'tt.com',
          naturalidade: 'naturalidade',
          caracteristicasDaVitima: 'caracteristicasVitima',
        }
      },
      () => {
        wrapper.instance().onPressSaveButton();
        expect(criarDenunciaRequisicaoMock).not.toHaveBeenCalled();
      })
    });

    xit('deve chamar o método criarDenunciaRequisicao quando o form estiver válido', () => {
      wrapper.setState({
        vitima: {
          pessoaIdentificada: false,
          nome: 'Teste',
          genero: 'feminino',
          raca: 'parda',
          dataNascimento: '1900-01-02',
          endereco: 'Av. teste',
          estado: 'AM',
          telefone: '(81) 99722-7867',
          email: 't@t.com',
          naturalidade: 'naturalidade',
          caracteristicasDaVitima: 'caracteristicasDaVitima',
        }
      },
      () => {
        wrapper.instance().onPressSaveButton();
        expect(criarDenunciaRequisicaoMock).toHaveBeenCalled();
      })
    })
  });
});
