import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import UlricPage from './Pages/daulric'
import ErrorPage from './Pages/404'
import AdminPage from './Pages/admin'

function RouterMode() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/daulric' element={<UlricPage/>} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/admin' element={<AdminPage />} />
            </Routes>
        </Router>
    )
}

export default RouterMode;