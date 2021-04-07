import React, { useEffect, useState } from 'react'
import { getNewsPopular } from '../services/services';
import Flickity from "react-flickity-component";
import NoticiaCard from './NoticiaCard';

const flickityOptions = {
  initialIndex: 2
}

const NoticiasPopulares = () => {

  const [populares, setPopulares] = useState([]);
  useEffect(() => {
    getNewsPopular().then(rpta => {
      setPopulares(rpta.data.articles);
    })
  }, []);



  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <Flickity
              className={'carousel'} // default ''
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
              {
                populares.map((objNoticia) => {
                  return (
                    <div >
                      <NoticiaCard objNoticia={objNoticia} />
                    </div>
                  )
                })
              }

            </Flickity>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticiasPopulares
