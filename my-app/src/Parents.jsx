import React from 'react'
import {Segment, Image} from 'semantic-ui-react'
import Mum from './Mum'
import Dad from './Dad'

const Parents = () => (
  <Segment.Group>
    <Image.Group>
    <Mum />
    <Dad />
  </Image.Group>
  </Segment.Group>
)

export default Parents
