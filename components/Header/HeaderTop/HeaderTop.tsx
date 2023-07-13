'use client'

import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

const HeaderTop: FC = () => {
	return (
		<Flex w='full' h='12' bgColor='#3579F3'>
			<Container maxW='1000px' display='flex' justifyContent='space-between' alignItems='center'>
				<Flex alignItems='center' gap='4px'>
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M13.1002 0.906632C12.8455 0.647007 12.5225 0.464778 12.1686 0.381015C11.8147 0.297253 11.4443 0.31538 11.1002 0.433299L1.66686 3.58663C1.28641 3.71117 0.953988 3.95073 0.715498 4.27226C0.477008 4.59378 0.344206 4.98141 0.335426 5.38163C0.326646 5.78186 0.44232 6.17494 0.666481 6.50661C0.890641 6.83829 1.21223 7.0922 1.58686 7.2333L5.08019 8.56663C5.15974 8.59705 5.23217 8.64353 5.29296 8.70317C5.35375 8.76282 5.4016 8.83435 5.43353 8.9133L6.76686 12.4133C6.90258 12.7826 7.14887 13.1011 7.47217 13.3254C7.79547 13.5497 8.18006 13.6688 8.57353 13.6666H8.6202C9.02087 13.6593 9.40923 13.5269 9.73083 13.2877C10.0524 13.0486 10.2911 12.7149 10.4135 12.3333L13.5669 2.88663C13.6815 2.54592 13.6986 2.17993 13.6161 1.83002C13.5337 1.48012 13.355 1.16027 13.1002 0.906632ZM12.3335 2.46663L9.14686 11.92C9.10986 12.0396 9.03554 12.1443 8.93478 12.2186C8.83402 12.293 8.7121 12.3332 8.58686 12.3333C8.46236 12.3353 8.34019 12.2994 8.23659 12.2304C8.13299 12.1613 8.05286 12.0623 8.00686 11.9466L6.67353 8.44663C6.57686 8.19232 6.42779 7.96117 6.23598 7.76822C6.04418 7.57527 5.81393 7.42481 5.5602 7.32663L2.0602 5.9933C1.94212 5.95003 1.84063 5.87077 1.77005 5.76669C1.69947 5.66262 1.66338 5.539 1.66686 5.4133C1.66696 5.28806 1.70714 5.16614 1.78151 5.06538C1.85588 4.96462 1.96055 4.8903 2.0802 4.8533L11.5335 1.69997C11.6421 1.65573 11.7611 1.64388 11.8762 1.66585C11.9913 1.68782 12.0976 1.74266 12.1823 1.82376C12.2669 1.90485 12.3262 2.00872 12.353 2.12281C12.3799 2.23689 12.3731 2.35631 12.3335 2.46663Z'
							fill='white'
						/>
					</svg>

					<Text color='white'>Красноярск</Text>
				</Flex>

				<Flex alignItems='center' color='white' gap='40px'>
					<Text>О проекте</Text>
					<Text>Блог</Text>
				</Flex>
			</Container>
		</Flex>
	)
}

export default HeaderTop