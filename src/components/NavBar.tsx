interface NavBarProps {
    pokemonIndex: number;
    handleClickBefore: () => void;
    handleClickAfter: () => void;
    pokemonList: {
      name: string;
      imgSrc?: string;
    }[];
  }

function Navbar ({ pokemonIndex, handleClickBefore, handleClickAfter, pokemonList }: NavBarProps) {
    return (
        <nav>
            {pokemonIndex > 0 ? (
        <button onClick={handleClickBefore}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickAfter}>Suivant</button>
      ) : null}
        </nav>
    )
}

export default Navbar;