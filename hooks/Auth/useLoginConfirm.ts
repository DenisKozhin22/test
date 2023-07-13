import { authService } from '@/services/auth.service'
import { ILoginConfirm } from '@/services/auth.types'
import { useMutation } from 'react-query'
import { useActions } from '../useActions'

export const useLoginConfirm = () => {
	const { nextForm } = useActions()
	return useMutation(
		'LoginConfirm',
		({ confirm_code, user_id }: ILoginConfirm) => authService.loginConfirm({confirm_code, user_id}),
		{
			onSuccess(data) {
				if (data.data.access_token) {
					nextForm()
				}
			}
		}
	)
}
