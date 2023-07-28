import { useState } from "react";
import {
  CloseModal,
  Modal,
  ModalClique,
  ModalContent,
} from "../../styled/Modals";
import { Card, CardImage, CardOverAll, CardTitle } from "../../styled/cards";
import { IoMdClose } from "react-icons/io";
import Stats from "../Stats/Stats";

interface ModalProps {
  open: boolean;
  changeModal: any;
  pokemon: any;
}

const ModalPokemons = ({ open, changeModal, pokemon }: ModalProps) => {
  // console.log(pokemon[0].data);
  return (
    <>
      {pokemon ? (
        <Modal open={open}>
          <ModalClique onClick={() => changeModal()}></ModalClique>
          <ModalContent open={open}>
            <Card hover={false}>
              <CloseModal>
                <IoMdClose onClick={() => changeModal()} />
              </CloseModal>
              <CardImage>
                <CardOverAll>{pokemon.data.base_experience}</CardOverAll>
                <img src={pokemon.data.sprites.front_default} alt="" />
              </CardImage>
              <CardTitle>
                {pokemon.data.name.charAt(0).toUpperCase() +
                  pokemon.data.name.slice(1)}
              </CardTitle>

              <Stats pokemon={pokemon}></Stats>
            </Card>
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalPokemons;
