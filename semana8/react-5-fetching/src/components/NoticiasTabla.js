import React from 'react'

const NoticiasTabla = (props) => {
  let { noticias } = props;
  return (
    <div className="col-12">
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Autor</th>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {
                noticias.map((objNoticia, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{objNoticia.author}</td>
                      <td>{objNoticia.title}</td>
                      <td>{objNoticia.description}</td>
                      <td><img
                        className="rounded"
                        src={objNoticia.urlToImage}
                        alt={objNoticia.title}
                        width="150" />
                      </td>
                      <td>
                        <a href={objNoticia.url}>Link</a>
                      </td>

                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NoticiasTabla
