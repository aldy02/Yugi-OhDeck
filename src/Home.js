import React from "react"
import { useEffect, useState } from 'react'
import { SimpleGrid, Select, Center } from '@chakra-ui/react'
import Cards from './Cards'

function Home() {
  // TODO: answer here
  const [loading, setLoading] = useState(false)
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    const loadDdata = async () => {
      setLoading(true);
      try {
        const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4'
        const response = await fetch(url);
        const data = await response.json();
        setCardsData(data.data)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    loadDdata()
  }, []);

  if (loading) {
    return <>
      <h1>Loading...</h1>
    </>
  }

  function sortData(type) {
    if (type === 'name') {
      return setCardsData([...cardsData].sort((a, b) => a.name > b.name ? 1 : -1))
    } if (type === 'attack') {
      return setCardsData([...cardsData].sort((a, b) => a.atk - b.atk))
    } if (type === 'defence') {
      return setCardsData([...cardsData].sort((a, b) => a.def - b.def))
    }
  }

  return (
    <>
      <Center>
        <Select mt={5} mb={10} placeholder='Select option' name='sort' w='40%' onChange={e => sortData(e.target.value)}>
          <option value='name'>Name</option>
          <option value='attack'>Attack</option>
          <option value='defence'>Defence</option>
        </Select>
      </Center>

      <SimpleGrid>
        <Cards card={cardsData} />
      </SimpleGrid>
    </>
  )
}

export default Home;
