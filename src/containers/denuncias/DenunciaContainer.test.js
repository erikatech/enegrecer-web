import React from 'react';
import { shallow, mount } from 'enzyme';
import DenunciaContainer from './DenunciaContainer';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


describe('DenunciaContainer', () => {
    let store
	let envia
	let subject
	beforeEach(() => {
		store = createStore(combineReducers({ form: formReducer }))
		envia = jest.fn();
		const props = {
			envia,
		}
		// With redux-form v5, we could do <ContactFormContainer store={store}/>.
		// However, with redux-form v6, the Field component we use is itself
		// connected to the redux store. Therefore, we must put the store into
		// context. To do that, we use <Provider/>.
		subject = mount(
			<Provider store={store}>
				<DenunciaContainer {...props}/>
            </Provider>
             
		)
	})



    it('com dados válidos não deve acontecer erros de validação', () => {
        subject.find('form').simulate('submit');
        expect(envia).toHaveBeenCalled();
    });
}) 