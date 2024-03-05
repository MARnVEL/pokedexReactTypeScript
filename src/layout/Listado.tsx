
import { useState, useEffect } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { Pokemon } from '../models/pokemon.model';
import { getPokemons } from '../api/getPokemons';
import Item from '../components/Item';

const Listado = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {

    const obtenerTodos = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    }

    obtenerTodos();

  }, [])

  const filtrarPokemon = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase())
  })
  
  return (
    <>
      <div className='container'>
        <header className='m-3 d-flex'>
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Buscar Pokemón</InputGroup.Text>
            <Form.Control
              aria-label="Buscar Pokemón"
              aria-describedby="inputGroup-sizing-sm"
              value={query}
              placeholder='...'
              onChange={(e) => setQuery(e.target.value.trim())}
            />
          </InputGroup>

          {/* <input
            type="text"
            name="" id=""
            value={query}
            placeholder='Buscar Pokemón'
            onChange={(e) => setQuery(e.target.value.trim())}
          /> */}

        </header>
      </div>


      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">

            {
              filtrarPokemon?.slice(0, 151).map(
                pokemon => 
                <Item
                  attack={pokemon.attack}
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.type}
                  hp={pokemon.hp}
                  imgGif={pokemon.imgGif}
                  defense={pokemon.defense}
                  sp_atk={pokemon.sp_atk}
                  sp_def={pokemon.sp_def}
                  speed={pokemon.speed}
                  imgLarge={''}
                  imgNormal={''}
                  total={''}
                />
              )
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Listado;