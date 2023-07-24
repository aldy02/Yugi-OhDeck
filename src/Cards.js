// TODO: answer here
import { Image, Box, Heading, SimpleGrid, Center } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import React from "react"


function Card({ card }) {
  return (
    <>
      <Center>
        <SimpleGrid columns={4} w='70%' spacing='40px'>
          {card.map((item) => (
            <>
              <Link to={`/card/${item.id}`}>
                <Box className='yugioh-card' display='flex' flexDirection='column'>
                  <Image src={item.card_images[0].image_url} />
                  <Heading as='h2' size='sm' mx='auto' pt={3}>{item.name}</Heading>
                </Box>
              </Link>
            </>
          ))}
        </SimpleGrid>
      </Center>
    </>
  )
}

export default Card;












  // <div>
  //   {card.map((data) => (
  //     <div key={data.id}>
  //       <Link to={`/card/${data.id}`}>

  //         <Box>
  //           {data.card_images.map((test) => (
  //             <div key={test.id}>
  //               <Image src={test.url} />
  //             </div>
  //           ))}
  //           <Heading>{data.name}</Heading>
  //         </Box>
  //       </Link>
  //     </div>
  //   ))}
  // </div>