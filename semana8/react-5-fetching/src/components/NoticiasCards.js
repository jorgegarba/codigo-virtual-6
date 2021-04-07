import React from 'react'
import NoticiaCard from './NoticiaCard'

const NoticiasCards = ({ noticias }) => {
  return (
    <>
      {
        noticias.map((objNoticia, i) => {
          return (
            <div className="col-md-3 mt-3" key={i}>
              <NoticiaCard objNoticia={objNoticia} />
            </div>
          )
        })
      }
    </>
  )
}

export default NoticiasCards
