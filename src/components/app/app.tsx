import style from './app.module.scss'
import FillersPage from "../pages/fillers-page/fillers-page.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className={style.container}>
          <Routes>
              <Route path="/" element={<FillersPage />} />
          </Routes>
      </div>
  )
}

export default App
