import { useLoginConfirm } from '@/hooks/Auth/useLoginConfirm'
import { useAppSelector } from '@/hooks/useAppSelector'
import { ILoginConfirm } from '@/services/auth.types'
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
import { ChangeEvent, FC, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import InputMask from 'react-input-mask'

const AuthCodeNumberCode: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors, isValid },
		reset
	} = useForm<ILoginConfirm>({
		mode: 'onChange'
	})

	const { mutateAsync } = useLoginConfirm()
	const { modal, user } = useAppSelector(state => state)

	const onSubmit: SubmitHandler<ILoginConfirm> = async data => {
		try {
			if (user.user.id) {
				await mutateAsync(data)
			}
		} catch (error) {
			console.log(error)
		}
	}
	const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const code = e.target.value
		setValue('confirm_code', code, { shouldValidate: true })
		handleSubmit(onSubmit)
		if (user.user.id && code.length === 4) {
			onSubmit({ confirm_code: code, user_id: user.user.id })
			console.log(code)
		}
	}

	return (
		<Box as='form' onSubmit={handleSubmit(onSubmit)}>
			<FormControl>
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
					value={modal.phone}
					as={InputMask}
					mask='+7 (999) 999-99-99'
					maskChar='_'
				/>
			</FormControl>

			<Box>
				<Text color='#8D94A6' fontSize='12px' fontWeight='normal' textAlign='center' mb='4px'>
					Последние 4 цифры номера входящего звонка
				</Text>
				<FormControl isInvalid={Boolean(errors.confirm_code)}>
					<NumberInput>
						<NumberInputField
							onInput={handleCodeChange}
							bg='#F4F6FB'
							{...register('confirm_code', {
								pattern: {
									value: /^\d{4}$/,
									message: 'Код подтверждения некорректен или просрочен.'
								}
							})}
						/>
					</NumberInput>
					<FormErrorMessage my='2' ml='12px' color='#FF0000' fontSize='12px' fontWeight='normal'>
						{errors.confirm_code?.message}
					</FormErrorMessage>
				</FormControl>
			</Box>
			{/* <Button
				type='submit'
				w='full'
				mx='auto'
				my='2'
				bg='#3579F3'
				color='white'
				_hover={{ bg: '#3579F3' }}>
				Подтвердить номер телефона
			</Button> */}
			<Text
				color='#32353D'
				textAlign='center'
				fontSize='14px'
				fontWeight='normal'
				mt='8px'
				mb='24px'>
				Мы позвоним на указанный номер телефона
			</Text>
			<Text color='#32353D' fontSize='12px' fontWeight='normal' textAlign='justify'>
				Нажимая кнопку «Подтвердить номер телефона», я даю свое согласие на сбор и обработку моих
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

export default AuthCodeNumberCode
