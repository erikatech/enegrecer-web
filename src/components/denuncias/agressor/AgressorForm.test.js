import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import AgressorForm from './AgressorForm';

describe('AgressorForm', () => {
  it('deve seguir a estrutura definida ', () => {
    const agressorForm = mount(<AgressorForm />);
    const agressorFormJson = toJson(agressorForm);
    expect(agressorFormJson).toMatchSnapshot();
  });
});

