import React from 'react'
import { useParams } from 'react-router-dom'

export const Propiedad = () => {

    const {id} = useParams()

    console.log(id)

  return (
    <div>Propiedad</div>
  )
}
