import React from 'react'

import {Routes,Route} from 'react-router-dom';










export default function App() {
  return (

// TODO: Implement code splitting

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
