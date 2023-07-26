import { useSelector } from "react-redux";
import Skeleton from "../components/Skeleton/Skeleton";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shadow } from "./styled";
import Grafico from "../components/Dados/Grafico";

const DadosScreen = () => {
  const navigate = useNavigate();
  const [skeleton, setSkeleton] = useState<boolean>(false);
  const { allPokemons, tipos, maiorPeso, maiorAltura, maisForte, count } =
    useSelector((root: any) => root.pokemonsReducer);

  useEffect(() => {
    setSkeleton(true);
    if (allPokemons == null || count == null) {
      navigate("/");
    } else {
      setSkeleton(false);
    }
  }, []);
  return (
    <>
      {allPokemons ? (
        <>
          <Skeleton open={skeleton} />
          <NavBar />
          <Shadow>
            <Grafico></Grafico>
          </Shadow>
        </>
      ) : (
        <Skeleton open={true} />
      )}
    </>
  );
};

export default DadosScreen;
