// TODO: answer here
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { Image, Box, Heading, Center, Button, SimpleGrid, Text } from '@chakra-ui/react'

function Detail() {
  const { id } = useParams()
  const [cardDetail, setCardDetail] = useState([])
  const [loading, setLoading] = useState(null)

  console.log(id);

  useEffect(() => {
    const loadDdata = async () => {
      setLoading(true);
      try {
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
        const response = await fetch(url);
        const data = await response.json();
        setCardDetail(data.data)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    loadDdata()
  }, [id]);

  if (loading) {
    return <>
      <h1>Loading...</h1>
    </>
  }

  console.log(cardDetail);

  return (
    <>
      <Link to='/'>
        <Button ml={2} mt={4}>Back</Button>
      </Link>
      <Box display='flex' flexDirection='row' w='90%' justifyContent='center'>
        <Box>
          <Image h='320px' marginRight='20px' marginTop='0px' src={cardDetail[0]?.card_images[0].image_url} />
        </Box>
        <Box w='40%'>
          <Heading as='h2' size='lg'>{cardDetail[0]?.name}</Heading>
          <Text>Level: {cardDetail[0]?.level}</Text>
          <Text>{cardDetail[0]?.attribute}</Text>
          <Text>ATK/{cardDetail[0]?.atk} DEF/{cardDetail[0]?.def}</Text>
          <Text>{`[ ${cardDetail[0]?.type} / ${cardDetail[0]?.race} ]`}</Text>
          <Text>Description: {cardDetail[0]?.desc}</Text>
        </Box>
      </Box>

      <Center>
        <SimpleGrid columns={4} w='80%' mt='25px'>
          {cardDetail[0]?.card_sets.map((set) => (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m='5'>
              <Box p='3'>
                <Text>Name: {set.set_name}</Text>
                <Text>Code: {set.set_code}</Text>
                <Text>Rarity: {set.set_rarity}</Text>
                <Text>Price: {set.set_price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Center>

    </>
  )
}

export default Detail;
