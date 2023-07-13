'use client'
import { FC, ReactNode } from 'react'
import HeaderTop from '../Header/HeaderTop/HeaderTop'
import Header from '../Header/Header'
import { Box, Container } from '@chakra-ui/react'
import MyBreadcrumb from '../Main/Breadcrumb/Breadcrumb'
import Footer from '../Footer/Footer'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Box minH='100vh' display='flex' flexDirection='column'>
				<HeaderTop />
				<Header />
				<Container maxW='1000px' flex='1'>
					<MyBreadcrumb />
					{children}
				</Container>
				<Footer />
			</Box>
		</>
	)
}

export default Layout
