import { useLoginRequest } from '@/hooks/Auth/useLoginRequest'
import {
	Box,
	FormControl,
	Button,
	FormLabel,
	Input,
	Text,
	FormErrorMessage,
	Link,
	NumberInput,
	NumberInputField
} from '@chakra-ui/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { formatPhoneNumber } from './formaterPhone'
import { useActions } from '@/hooks/useActions'

interface IForm {
	phone: string
}

const AuthNumberForm: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<IForm>({
		mode: 'onSubmit'
	})

	const { setPhone } = useActions()
	const { mutateAsync } = useLoginRequest()

	const onSubmit: SubmitHandler<IForm> = async data => {
		try {
			const phone = formatPhoneNumber(data.phone)
			await mutateAsync(phone)
			setPhone(phone)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Box as='form' onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={Boolean(errors.phone)}>
				<FormLabel htmlFor='phoneNumber' color='#8D94A6'>
					Телефон
				</FormLabel>

				<Input
					id='phone'
					type='tel'
					placeholder='+7 (999) 999-99-99'
					fontSize='14px'
					color='#32353D'
					fontWeight='normal'
					mb='8px'
					bg='#F4F6FB'
					{...register('phone', {
						required: 'Обязательное поле',
						pattern: {
							value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
							message: 'Неверный формат номера телефона'
						}
					})}
					as={InputMask}
					mask='+7 (999) 999-99-99'
					maskChar='_'
				/>
				<FormErrorMessage my='2' ml='12px' color='#FF0000' fontSize='12px' fontWeight='normal'>
					{errors.phone?.message}
				</FormErrorMessage>
			</FormControl>

			<Button
				type='submit'
				w='full'
				mx='auto'
				my='2'
				bg='#3579F3'
				color='white'
				_hover={{ bg: '#3579F3' }}>
				Подтвердить номер телефона
			</Button>
			<Text
				color='#32353D'
				textAlign='center'
				fontSize='14px'
				fontWeight='normal'
				mt='8px'
				mb='24px'>
				Мы позвоним на указанный номер телефона
			</Text>
			<Text color='#32353D' fontSize='12px' fontWeight='normal' textAlign='start'>
				Нажимая кнопку «Подтвердить номер телефона», я даю свое согласие на сбор и обработку моих{' '}
				<br />
				персональных данных в соответствии с
				<Link color='#3579F3' href='#' mx='1'>
					Политикой
				</Link>
				Политикой и принимаю условия{' '}
				<Link color='#3579F3' href='#' mx='1'>
					Пользовательского соглашения
				</Link>
			</Text>
		</Box>
	)
}

export default AuthNumberForm
