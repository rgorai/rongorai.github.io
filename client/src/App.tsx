import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import ApiError from './Misc/ApiError'
import GuestbookPage from './Guestbook/GuestbookPage'
import MaintenanceNotice from './Homepage/MaintenanceNotice'
import NavBar from './Homepage/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<MaintenanceNotice />} />
            <Route path="/guestbook" element={<GuestbookPage />} />
            <Route
              path="*"
              element={
                <ApiError
                  {...{
                    status: 404,
                    statusText: 'Not Found',
                    data: 'invalid react route',
                  }}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
