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
            <Card>
              <CloseModal>
                <IoMdClose onClick={() => changeModal()} />
              </CloseModal>
              <CardImage>
                <CardOverAll>{pokemon[0].data.base_experience}</CardOverAll>
                <img src={pokemon[0].data.sprites.front_default} alt="" />
              </CardImage>
              <CardTitle>
                {pokemon[0].data.name.charAt(0).toUpperCase() +
                  pokemon[0].data.name.slice(1)}
              </CardTitle>

              <Stats pokemon={pokemon[0]}></Stats>
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
