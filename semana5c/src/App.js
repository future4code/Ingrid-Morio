import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/Foto.jpg';
import logoEmail from './img/email.png';
import localizacao from './img/localizacao.png';
import CardPequeno1 from './components/CardPequeno1/CardPequeno1';
import styled from 'styled-components';

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const ContainerSecao1 = styled.div`
  width: 40vw;/
`
const TituloPagina = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px
`
const ContainerSecao2 = styled.div`
  width: 40vw;
`
const ContainerSecao3 = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const ContainerSecao4 = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const TituloPagina1 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px
`
const ContainerSecao5 = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const TituloPagina2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px
`


function App() {
  return (
    <Container1>
      <ContainerSecao1>
        <TituloPagina>Dados pessoais</TituloPagina>
        
        <CardGrande 
          imagem={foto}
          nome="Ingrid" 
          descricao="Oi, eu sou a Ingrid. Sou assistente administrativo e financeiro no Sicoob. Atuo no suporte as agências em operações de crédito, entre outras demandas oriundas a diretoria."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </ContainerSecao1>

      <ContainerSecao2>
        <CardPequeno1
          imagem={logoEmail}
          email="Email:" 
          descricao="ingrid.sanae@gmail.com"          
        />
      </ContainerSecao2>

      <ContainerSecao3>
        <CardPequeno1
          imagem={localizacao}
          email="Endereço:" 
          descricao="Rua São Mateus"          
        />
      </ContainerSecao3>

      <ContainerSecao4>
        <TituloPagina1>Experiências profissionais</TituloPagina1>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Sicoob" 
          descricao="Cargo de Assistente administrativo atuando no suporte as agências e demandas da diretoria." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Sicredi" 
          descricao="Cargos de caixa, tesoureira e assistente administrativo."
        />  
      </ContainerSecao4>
      
      <ContainerSecao5>
        <TituloPagina2>Minhas redes sociais</TituloPagina2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerSecao5>
    </Container1>
  );
}

export default App;
