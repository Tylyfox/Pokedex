import "../App.css";


function PokemonCard ({pokemon}: PokemonCardProps) {
    console.log(pokemon)
    return (
        <figure className="card">
            {
                pokemon.imgSrc ? 
                <img 
                    src={pokemon.imgSrc} 
                    alt="pokemon image"
                    className="card-img" 
                    /> 
                    : 
                    <p>???</p>
            }
            <figcaption>
                {pokemon.name}
            </figcaption>
        </figure>
    )
}

export default PokemonCard;