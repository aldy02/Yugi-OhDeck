import { Box, Center, Heading } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Card from './Cards'
import Detail from './Detail'

// TODO: answer here

const App = () => {
  const MyRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card">
          <Route index element={<Card />} />
          <Route path=":id" element={<Detail />} />
          <Route path="*" element={<div>404 Page not found!</div>} />
        </Route>
        <Route path="*" element={<div>404 Page not found!</div>} />
      </Routes>
    )
  }
  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100%" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
