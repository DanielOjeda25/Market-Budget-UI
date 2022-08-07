import hook from './hooks'

function Products() {
  const { imageUrl, isTitle, isLoading } = hook()

  if (isLoading) {
    return <h1>Cargando...</h1>
  }
  return (
    <>
      <img src={imageUrl} alt='Imagen de perrito aleatoria' />
      <h1>{isTitle}</h1>
    </>
  )
}

export default Products
