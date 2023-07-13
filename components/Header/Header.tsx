import { FC } from 'react'
import NextLink from 'next/link'
import { Button, Container, Flex, Link } from '@chakra-ui/react'
import { useActions } from '@/hooks/useActions'

const list = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4']

const Header: FC = () => {
	const {  onOpenStateModal } = useActions()
	return (
		<>
			<Flex w='full' h='16' bgColor='#fff'>
				<Container maxW='1000px' display='flex' justifyContent='space-between' alignItems='center'>
					<Flex gap='20px'>
						{list.map(item => (
							<Link
								key={item}
								as={NextLink}
								href='/'
								color='#32353D'
								fontSize='16px'
								fontWeight='semibold'>
								{item}
							</Link>
						))}
					</Flex>

					<Button
						color='#3579F3'
						border='1px solid #3579F3'
						rounded='sm'
						bg='transparent'
						_hover={{
							bg: 'transparent'
						}}
						onClick={() => onOpenStateModal()}>
						Войти / Зарегиистрироваться
					</Button>
				</Container>
			</Flex>
		</>
	)
}

export default Header
