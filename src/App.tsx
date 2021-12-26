import React, { useState, useEffect } from 'react'; 
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
const App: React.FC = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Header/>
      </div>
    </ChakraProvider>
  );
}

export default App;
