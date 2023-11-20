import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList: Pokemon[] = [
  {
      name: "Bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
      name: "mew",
  }
]

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]}/>
    </div>
  )
}

export default App
