
import { useDispatch } from '@/store/configureStore';
import { APP_LOGO } from '@/constants/actionConstants';
import { useRouteMatch } from 'react-router-dom';


const AppRouter = ({ baseName, Routes }) => {
  const dispatch = useDispatch()
  // const path = useRouteMatch()
  if (baseName === 'dsh') {
    let logo = 'data:image/png;base64,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'
    dispatch({ type: APP_LOGO, logo: logo })
  }

  return Routes
}
export default AppRouter
