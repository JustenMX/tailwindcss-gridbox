// dependencies
import { useEffect, useState } from "react";
// data
import gameListApi from "./api/gameListApi";
// components
import GridBox from "./components/GridBox";
// css
import "./index.css";

function App() {
  // state management
  const [gameCards, setgameCards] = useState([]);
  const gameListApiPath = `/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=24`;

  //   Upon load to push into component
  useEffect(() => {
    const fetchGameCards = async () => {
      try {
        const response = await gameListApi.get(gameListApiPath);
        console.log(response.data);
        setgameCards(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGameCards();
  }, [gameListApiPath]);

  // debug
  console.log(gameCards);
  return (
    <>
      <GridBox gameCards={gameCards} />
    </>
  );
}

export default App;
