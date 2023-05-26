import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharactersCard from "./components/Card/Card";
import Header from "./components/Header/Header";
import { Data } from "./types";
import { Input } from "@chakra-ui/react";

function App() {
  const [character, setCharacter] = useState<string>("");
  const [valores, setValores] = useState<Data[]>([]);
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1f453ac44d475d07c23c6958c6894586&hash=29c0940925ffbabc6a77b828a0148260&limit=100&nameStartsWith=${character}`
      )
      .then((resp) => {
        setValores(resp.data["data"].results);
        console.log(resp.data["data"].results);
      })
      .catch((err) => console.error(err));
    setCharacter(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1f453ac44d475d07c23c6958c6894586&hash=29c0940925ffbabc6a77b828a0148260&limit=100"
      )
      .then((resp) => {
        setValores(resp.data["data"].results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header />
        <form>
        <Input onChange={handleChange} placeholder="Search character" />
      </form>
      <CharactersCard valores={valores} />
    </div>
  );
}

export default App;
