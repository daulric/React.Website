import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import UlricPage from './Pages/daulric'
import ErrorPage from './Pages/404'

function RouterMode() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/daulric' element={<UlricPage/>}> </Route>
                <Route path='*' element={<ErrorPage />}></Route>

            </Routes>
        </Router>
    )
}

export default RouterMode;