import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
// import { FcLock } from 'react-icons/fc'

export default function SimpleCookiePreference() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Bienvenido a Flemalog</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          La verdad que estoy al pedo y con ganas de codear, entonces hice este Stack que me sirve para
          aprender weas y queria hacer algo que sirva, entonces estoy creando el flemalog, para que los
          pibes puedan publicdad algo parecido a un tweet, pero tambien poder crear una entrada de vlog.
          Ideal para Dieguivlogs (tengo que ver si le meto audio) o las futuras aventuras de Lole en Italia.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="green">
            Boton que no hace nada 1
          </Button>
          <Button colorScheme="green">Boton que no hace nada 2</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
