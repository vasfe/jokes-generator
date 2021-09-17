import React, { useState } from 'react';
import './App.css';
import { getData } from './API';
import Card from "./components/Card"
import Filters from "./components/Filters"
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Spinner = styled(Loader)`
    width: fit-content;
    margin: 20px auto;
`;

const CardsContainer = styled.div`
    background-color: #3d424d;
    font-size: calc(8px + 2vmin);
    display: flex;
    flex-direction: column;
    align-items: 'center';
    justify-content: 'center';
`;

const PageTitle = styled.div`
    margin: 10px;
    font-size: 28px;
`;

const Page = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3d424d;
    min-height: 100vh;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 5px 0;
`;

const Button = styled.button`
    margin: 5px 10px;
    background: #2d3038;
    color: white;
    border: 2px solid #1e2025;
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
    &:active{
      background: #414550;
      transform: translateY(2px);
    };
`;

const Select = styled.select`
    font-size: 18px;
    color: white;
    background-color: #3d424d;
    border-width: 2px;
    border-radius: 5px;
    margin-left: 5px;
`;

const Label = styled.label`
    margin: 0 7px;
`;

const languages = [
  { iso: "en", label: "English" },
  { iso: "fr", label: "French" },
  { iso: "es", label: "Spanish" },
  { iso: "de", label: "German" },
  { iso: "pt", label: "Portuguese" },
  { iso: "cs", label: "Czech" }
]

const initialBlackListFilters = {
  nsfw: { value: false, text: 'nsfw' },
  explicit: { value: false, text: 'explicit' },
  religious: { value: false, text: 'religious' },
  political: { value: false, text: 'political' }
}

const initialJokeTypes = {
  pun: { value: false, text: 'Pun' },
  dark: { value: false, text: 'Dark' },
  programming: { value: false, text: 'Programming' },
  spooky: { value: false, text: 'Spooky' }
}

const App = props => {
  const [jokes, setJokes] = useState([])
  const [searching, setSearching] = useState(false)
  const [jokeTypes, setJokeTypes] = useState(initialJokeTypes)
  const [blackListFilters, setBlackListFilters] = useState(initialBlackListFilters)
  const [language, setLanguage] = useState(languages[0].iso)

  const getJoke = () => {
    setSearching(true)
    getData(language, blackListFilters, jokeTypes).then(joke => {
      setJokes([joke.type == 'twopart' ? `${joke.setup} ${joke.delivery}` : joke.joke].concat(jokes))
      setSearching(false)
    })
  }

  const removeJoke = (jokeToRemove) => {
    setJokes(currentItems => currentItems.filter((joke) => joke !== jokeToRemove))
  }

  const updateFilters = filterToUpdate => {
    const updatedFilters = { ...blackListFilters };
    updatedFilters[filterToUpdate].value = !updatedFilters[filterToUpdate].value
    setBlackListFilters(updatedFilters)
  }

  const updateTypes = typeToUpdate => {
    const updatedTypes = { ...jokeTypes };
    updatedTypes[typeToUpdate].value = !updatedTypes[typeToUpdate].value
    setJokeTypes(updatedTypes)
  }

  return (
    <Page>
      <PageTitle>{props.title}</PageTitle>
      <Row>
        <Label>
          Languages:
          <Select
            name="languages"
            onChange={e => { setLanguage(e.target.value) }}
          >
            {languages.map(language =>
              <option
                value={language.iso}
                key={language.iso}>
                {language.label}
              </option>
            )}
          </Select>
        </Label>
      </Row>
      <Filters
        label='Include Types: '
        filtersArray={Object.entries(jokeTypes)}
        updateFilters={updateTypes}
      />
      <Filters
        label='Exclude: '
        filtersArray={Object.entries(blackListFilters)}
        updateFilters={updateFilters}
      />
      <Button onClick={getJoke} >Generate</Button>
      {searching && <Spinner type="Circles" color="white" height={80} width={80} />}
      <CardsContainer>
        {jokes.map((joke, index) =>
          <Card
            text={joke}
            key={index}
            onDelete={() => removeJoke(joke)}
          />
        )}
      </CardsContainer>
    </Page>
  )
}
export default App;