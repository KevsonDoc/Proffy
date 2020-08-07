import React from 'react';

import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import warmingIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../components/Textarea';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>
        </fieldset>

        <fieldset style={{ marginTop: 50 }}>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="matéria"/>
          <Input name="cost" label="Custo da sua hora por aula"/>
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <footer>
          <p>
            <img src={warmingIcon} alt="Aviso importante"/>
            Importante! <br />
            Prenncha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;