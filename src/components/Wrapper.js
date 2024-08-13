import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Wrapper = ({children}) => {
  return (
    <>
    <Header/>
    <main className='min-h-screen w-11/12 m-auto'>
        {children}
    </main>
    <Footer/>
    </>
)
}

export default Wrapper