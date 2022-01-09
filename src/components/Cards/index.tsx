import { Box, Badge, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

import { Container, Main } from './styles';
import { Title } from '../../styles';

export default function Cards() {

    const property = {
        imageUrl: 'https://lh3.googleusercontent.com/zPRwySU0pOfy4CteUs0nRk-ZT5n2YbqxuyPA8OvgrYR_u80-LIFujmryF_2iLq_psXU8edd2tam72ImfoAcNjhv6ij9OSuk7slPUAUSa7NwStqRW2m9XhiQbSp1udaiCZYH1fIzfCvAK0QefifPGpWABcba7FJ-3HOmruLlDDFIAcpjba6bymIR86PBHVHskrllWXP79ePenwqUh-xPgKIPHsu9XKV6C7nz0faDRFZaG0VlmpzCnj3S16OMABygIK8_DpZjpxTpbjL7rLuh9sW7W-Ff1F67nVi0SIgrL2YTLvJjWkYpdA9CD_rzzKzOJrhs5HJq9rYo_XoXQf8i4QRg6YfSzv50hbfiOlHAfXIh91FlH6wKSQAXf3k5kwk-y8fJD7LNTSWYCEN1wiiPU1n6vtdryajRsnCiUE7wgNFySiu0O80wzAANdmnhHKeNLiQhxYGab9GC8Yq2ftMuAdqYIbfD3jaemMDeGfcazwuctlPIxfNj9tGIghNzj4wlioJH0SgBwgh-l14IUiL_f5-ZTyVs9rzO-Rvqbuq39VHYIiOzHPlUU9RVFIrOGOThP26eYKcpnAuzVqOLVJrndRm6LcwKAhshq9vFCI7t9zveENjEFg1vXJXbf0LKgD53TkuchOpzZjVJKTEDJDpevTcEq0vig3Fa70OQ0i0YIdE5Q7Tsu_hJEELWDgdm0qtnlURsToPrwOJgVv6YDV68yJp3Q=s1041-no?authuser=0',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Main>
            <Title>Últimas notícias</Title>
            <Container>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={property.imageUrl} alt={property.imageAlt} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {property.beds} beds &bull; {property.baths} baths
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < property.rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={property.imageUrl} alt={property.imageAlt} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {property.beds} beds &bull; {property.baths} baths
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < property.rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={property.imageUrl} alt={property.imageAlt} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {property.beds} beds &bull; {property.baths} baths
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < property.rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Main>
    );
}