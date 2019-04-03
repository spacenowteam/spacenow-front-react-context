import service from './'
import { userLogin as _userLogin } from '../queries/auth/userLogin'

export const userLogin = props => {
    return (
        service({
            query: _userLogin,
            variables: props
        })
    )
}

