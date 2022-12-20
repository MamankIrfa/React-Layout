import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from '../Layouts'
import { Navigation } from './routes'

const router = [...Navigation]

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((data) => (
          <Route key={data.path} path={data.path} element={<Layouts>{data.element}</Layouts>} exact={true} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
