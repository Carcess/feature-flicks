import React,{lazy,Suspense} from 'react'

import {Routes,Route} from 'react-router-dom';






export default function App() {
  return (



<>

<Routes>
  <Route path='/' element={<Home/>}/>


</Routes>
  </Suspense>


</>
  )
}