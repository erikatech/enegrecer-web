import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon';
import { CampoTexto, Combobox } from './FormGroups';


describe('Combobox', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(
      <Combobox id={'estado'}/>
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#estado')).toHaveLength(1)
  });
});


describe('CampoTexto', () => {
  xit('renderiza o componente sem erros', () => {
    shallow(<CampoTexto name={'teste'} maxLen={35} />);
  });
});

