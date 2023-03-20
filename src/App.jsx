import React,{lazy,Suspense} from 'react'

import {Routes,Route} from 'react-router-dom';


import NotFound from './pages/NotFound'
import { MovieContextProvider } from './context/MovieContext';
import { Loading } from './components/Loading';



const Home=lazy(()=>import('./pages/Home'))
const Movies=lazy(()=>import('./pages/Movies'))


export default function App() {
  return (
<>
<MovieContextProvider>
  <Suspense fallback={<Loading/>}>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movies' element={<Movies/>}/>
  
  <Route path='*' element={<NotFound/>}/>

</Routes>
  </Suspense>
</MovieContextProvider>

</>
  )
}
