'use client'

import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import {
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Heading
} from '@chakra-ui/react'
import { FC } from 'react'
import AuthNumberForm from '../Forms/AuthNumberForm'
import AuthCodeNumberCode from '../Forms/AuthCodeNumberCode'

const AuthModal: FC = () => {
	const { onCloseStateModal, onOpenStateModal } = useActions()
	const { isOpenModal, activeForm } = useAppSelector(state => state.modal)

	const { isOpen, onOpen, onClose } = useDisclosure()

	const onCloseModal = () => {
		onCloseStateModal()
		onClose()
	}
	const onOpenModal = () => {
		onOpenStateModal()
		onOpen()
	}

	return (
		<>
			<Modal blockScrollOnMount={false} isOpen={isOpenModal} onClose={onCloseModal}>
				<ModalOverlay />
				<ModalContent w='381px' p='24px'>
					<ModalHeader color='#32353D' display='flex' alignItems='center' p='0'>
						<Heading as='h3' fontSize='18px' fontWeight='semibold'>
							Вход / Регистрация
						</Heading>
						<ModalCloseButton />
					</ModalHeader>
					<ModalBody p='0'>
						{activeForm === 0 && <AuthNumberForm />}

						{activeForm === 1 && <AuthCodeNumberCode />}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default AuthModal
