import styles from './page.module.css'

export default function Movie({ params } : { params: { id : string }}) {
  return (
    <div className="container">
      <div className="content">
        <h1>Movie id: {params.id}</h1>
        ...
      </div>
    </div>
  )
}
