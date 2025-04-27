import "./searchform.css";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

function SearchForm() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const userInput = event.target.userInput.value;
    navigate(`/search/${encodeURIComponent(userInput)}`);
  };

  return (
    <form onSubmit={handleSearch} className="search__form">
      <label htmlFor="search" className="sr-only">
      <IoSearch className="search-icon" />
      </label>      
      <input id="search" type="text" name={"userInput"} className="search__input" placeholder="Vad letar du efter?" />
            
    </form>
  );
}

export default SearchForm;

// function MovieSearchInput({ movies, setActiveMovie }) {
//   const [userInput, setUserInput] = useState("");
//   const [movieResults, setMovieResults] = useState([]);

//   useEffect(() => {
//     if (userInput !== "") {
//       let filtered = movies.filter((movie) => movie.name.toLowerCase().includes(userInput.toLowerCase()));
//       setMovieResults([...filtered]);
//     }
//     console.log(movieResults);
//   }, [userInput]);

//   const handleMovieClick = (movie) => {
//     setActiveMovie(movie);
//     setMovieResults([]);
//     setUserInput("");
//   };

//   return (
//     <section className="search__section">
//       <input
//         onChange={(e) => setUserInput(e.target.value)}
//         type="text"
//         className="search__input"
//         placeholder="Vad letar du efter?"
//         value={userInput}
//       />
//       <i className="fa-solid fa-magnifying-glass"></i>
//       <ul className={movieResults.length < 1 ? "search__dropdown" : "search__dropdown search__dropdown--active"}>
//         {movieResults.map((movie) => {
//           return (
//             <li onClick={() => handleMovieClick(movie)} className="search__item" key={movie.id}>
//               {movie.name}
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// }

//export default MovieSearchInput;