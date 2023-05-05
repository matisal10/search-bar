import { useState } from "react";
import SearchBar from "./components/searchBar";

import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 1px #ccc;
  cursor: pointer;

  &:hover{
    background-color: #efefef;
  }
`;

const people = [
  {
    id: 'people-01',
    title: 'juan perez'
  },
  {
    id: 'people-02',
    title: 'martin sanchez'
  },
  {
    id: 'people-03',
    title: 'jose martinez'
  },
  {
    id: 'people-04',
    title: 'matias olivera'
  },
  {
    id: 'people-05',
    title: 'mauricio navarro'
  }
]

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesion de seguimiento'
  },
  {
    id: 'calendar-02',
    title: 'Revision de propuesta'
  },
  {
    id: 'calendar-03',
    title: 'Evento para donar juguetes'
  },
  {
    id: 'calendar-04',
    title: 'junta semanal de equipo'
  },
  {
    id: 'calendar-05',
    title: 'revision de pendientes con cliente'
  }
]

const emails = [
  {
    id: 'email-01',
    title: 'Reportes de reultados'
  },
  {
    id: 'email-02',
    title: 'Requisitos para cambio'
  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad'
  },
  {
    id: 'email-04',
    title: 'Proximos eventos'
  },
  {
    id: 'email-05',
    title: 'Participa en la encuesta'
  },
]


function App() {

  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all');

  function handleClick(e) {
    const op = e.target.name
    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails])
        setCurrentOption('all')
        break;
      case "people":
        setData([...people])
        setCurrentOption('people')
        break
      case "calendar":
        setData([...calendar])
        setCurrentOption('calendar')
        break
      case "emails":
        setData([...emails])
        setCurrentOption('emails')
        break
      default:
        break;
    }

  }

  function handleItemSelected(item) {
    setSelection(item)
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">All</Button>
      <Button onClick={handleClick} name="people">People</Button>
      <Button onClick={handleClick} name="calendar">Calendar</Button>
      <Button onClick={handleClick} name="emails">Emails</Button>
      {selection ? <div>You Selected: {selection.title}</div> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected} ></SearchBar>
    </div>
  );
}

export default App;
