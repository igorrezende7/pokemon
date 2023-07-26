import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {useSelector} from 'react-redux'

interface PaginaProps {
    filterPokemons:any
}


const Pagina = ({filterPokemons}:PaginaProps) =>{
    const {count} = useSelector((root:any)=> root.pokemonsReducer)
    const pages = Math.ceil(count/8)
    const [pagAtual, setPagAtual] = useState<number>(1)


    return(
        <>
            <Row className="justify-content-center">
            <Col xs={12} className="mb-5 w-100">
                  <Stack className="pt-5" spacing={2}>
                    <Pagination
                    className="mx-auto"
                      page={pagAtual}
                      count={pages}
                      onChange={(e, currentPage) => {
                        console.log("Current: ");
                        setPagAtual(currentPage);
                        filterPokemons(currentPage)
                      }}
                      color="primary"
                    />
                  </Stack>
                </Col>
            </Row>
        </>
    )
}

export default Pagina