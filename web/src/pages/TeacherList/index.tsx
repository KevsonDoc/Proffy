import React, { useState, FormEvent } from 'react';

import PageHeader from '../components/PageHeader';
import TeacherItem, { Teacher } from '../components/TeacherItem';
import Input from '../components/Input';
import Select from '../components/Select';

import "./styles.css";
import api from '../../services/api';

function TeacherList() {
  const [ teachers, setTeachers ] = useState([]);
  const [ subject, setSubject ] = useState('');
  const [ week_day, setWeek_Day ] = useState('');
  const [ time, setTime ] = useState('');

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response =  await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
      <>
        <div id="page-teacher-list" className="container">
          <PageHeader title="Esses são os proffys disponiveis">
            <form id="search-teachers" onSubmit={searchTeachers}>
            <Select
              name="subject"
              value={subject}
              label="matéria"
              onChange={(event) => { setSubject(event.target.value) }}
              options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciência', label: 'Ciência' },
                  { value: 'Educação Física', label: 'Educação Física' },
                  { value: 'Empreendedorismo', label: 'Empreendedorismo' },
                  { value: 'Filosofia', label: 'Filosofia' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'Gestão de Tecnologia da Informação', label: 'Gestão de Tecnologia da Informação' },
                  { value: 'História', label: 'História' },
                  { value: 'Língua Espanhola', label: 'Língua Espanhola' },
                  { value: 'Língua Portuguesa', label: 'Língua Portuguesa' },
                  { value: 'Linguagem de Programação Or. Objetos', label: 'Linguagem de Programação Or. Objetos' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Projeto Integrador', label: 'Projeto Integrador' },
                  { value: 'Qualidade de Software', label: 'Qualidade de Software' },
                  { value: 'Química', label: 'Química' },
                  { value: 'Segurança da Informação', label: 'Segurança da Informação' },
                  { value: 'Sociologia', label: 'Sociologia' },
                  { value: 'WebDesign', label: 'WebDesign' },
                ]}
              />
              <Select
                name="week_day"
                label="Dia da Semana"
                value={week_day}
                onChange={(event) => { setWeek_Day(event.target.value) }}
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />
              <Input
                type="time"
                name="time"
                label="Hora"
                value={time}
                onChange={(event) => { setTime(event.target.value) }}
              />

              <button type="submit">
                Buscar
              </button>
            </form>
          </PageHeader>

          <main>
            {
              teachers.map((teacher: Teacher) => {
                return (
                  <TeacherItem key={teacher.id} teacher={teacher} />
                )
              })
            }
          </main>
        
        </div>
      </>
  );
}

export default TeacherList;