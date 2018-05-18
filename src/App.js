import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';

import MyModal from './components/MyModal';

class App extends Component {

  constructor() {
    super();
    this.state = {
      saveModalVisible: false,
      secondModalVisible: false
    };
  }

  _showModal = (event) => {
    const modalVisible = event.target.dataset.modal
    this.setState({ [modalVisible]: true });
  }

  _closeModal = (event) => {
    const modalVisible = event.target.dataset.modal
    this.setState({ [modalVisible]: false });
  }

  _saveData = (event) => {
    alert("saved!");
    this._closeModal(event);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button data-modal="saveModalVisible" onClick={this._showModal}>Save Data Modal</Button>
        <Button data-modal="secondModalVisible" onClick={this._showModal}>Other Modal</Button>
        
        {/** Primeiro modal com situação hipotética passando outros componentes como children*/}
        <MyModal 
            visible={this.state.saveModalVisible}
            modal="saveModalVisible"
            closeCallback={this._closeModal}
            modalTitle="Salvar dados"
            titleConfirm="Salvar"
            confirmCallback={this._saveData}>

          <div>
            <p>Confirme sua senha para salvar dados:</p>

            <div>
              <label for="password">Senha: </label>
              <input type="password" id="password" placeholder="Digite sua senha ..."/>
            </div>
          </div>
        </MyModal>

        {/** Exemplo de uso do mesmo componente para outro fim qualquer */}
        <MyModal 
            visible={this.state.secondModalVisible}
            modal="secondModalVisible" 
            closeCallback={this._closeModal}
            modalTitle="Outro fim qualquer">
          Obrigado por testar!
        </MyModal>
        

      </div>
    );
  }
}

export default App;
