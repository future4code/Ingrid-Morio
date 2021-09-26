import React from 'react';
import styled from 'styled-components';

const ContainerBigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemBigCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerInterno = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Nome = styled.h4`
    margin-bottom: 15px;
`

const Descricao = styled.p`

`

function CardGrande(props) {
    return (
        <ContainerBigCard>
            <ImagemBigCard src={ props.imagem } />
            <ContainerInterno>
                <Nome>{ props.nome }</Nome>
                <Descricao>{ props.descricao }</Descricao>
            </ContainerInterno>
        </ContainerBigCard>
    )
}

export default CardGrande;