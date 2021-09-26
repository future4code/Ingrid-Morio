import React from 'react';
import styled from 'styled-components';

const ContainerSmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 0px;
    margin-bottom: 10px;
`
const ImagemSmallCard = styled.img`
    height: 40px;
    margin-left: 10px;
`
const ContainerInterno1 = styled.div`
    display: flex;
    justify-items: flex-start;
    align-items: center;
`
const DadosH4 = styled.h4`
    margin-left: 10px;
`
const TextoP = styled.p`
    display: flex;
    margin-left: 10px;
`



function CardPequeno(props) {
    return (
        <ContainerSmallCard>
            <ImagemSmallCard src={ props.imagem } />
            <ContainerInterno1>
                <DadosH4>{ props.email}</DadosH4>
                <TextoP>{ props.descricao }</TextoP>
            </ContainerInterno1>
        </ContainerSmallCard>
    )
}

export default CardPequeno;