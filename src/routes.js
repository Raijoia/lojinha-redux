import PaginaPadrao from 'components/PaginaPadrao'
import { BrowserRouter, Routes, Route } from 'react-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}