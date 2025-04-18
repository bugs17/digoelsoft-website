import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

const CardWork = ({image, judul, desc}) => {
  return (

      <Card className="group shadow-zinc-950/5 bg-zinc-900 hover:bg-zinc-950">
          <CardHeader className="pb-3">
              <img alt='image-project' src={image} className='rounded-md'  />

              <h3 className="mt-6 font-medium">{judul}</h3>
          </CardHeader>

          <CardContent>
              <p className="text-sm">{desc}</p>
          </CardContent>
      </Card>
  )
}

export default CardWork