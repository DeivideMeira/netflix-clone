import React from 'react';
import Jumbotron from './components/jumbotron';
import jumboData from './home/home.json'

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) =>(          
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          <Jumbotron.Image src={item.image} alt={item.alt}/>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
