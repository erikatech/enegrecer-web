import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon';
import  CampoTexto  from './CampoTexto';


describe('CampoTexto', () => {
    it('renderiza o componente sem erros', () => {
      shallow(<CampoTexto maxLen={35} />);
    });
  });