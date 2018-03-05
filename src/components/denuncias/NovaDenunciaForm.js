import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import NovaVitimaForm from './vitima/NovaVitimaForm';
// import NovaTestemunhaForm from './testemunha/NovaTestemunhaForm';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';

class NovaDenunciaForm extends Component {
  render() {
    return (
      <form>
        
        <DetalhamentoDenuncia />
        {/* <NovaVitimaForm handleChange={this.handleChange} /> }

        { <NovaTestemunhaForm handleChange={this.handleChange} /> }

        <br />
        <button className="btn waves-effect waves-light" type="submit" name="action">
            Enviar Denúncia
    </button>*/}
      </form>
    );
  }
};
export default NovaDenunciaForm;