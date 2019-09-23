import React from 'react'
import {Segment, Image, Divider} from 'semantic-ui-react'
import Alex from './Alex'
import Tyler from './Tyler'
import Zyrante from './Zyrante'
import Tama from './Tama'
import Aaron from './Aaron'
import TeOneroa from './TeOneroa'
import Leah from './Leah'
import Tynika from './Tynika'

const Kids = () => (
  <Segment.Group>
    <Image.Group>
      <Alex />
      <Tyler />
      <Zyrante />
      <Tama />
    </Image.Group>
    <Divider hidden />
    <Image.Group>
      <Aaron />
      <Leah />
      <Tynika />
      <TeOneroa />
    </Image.Group>
  </Segment.Group>
)

export default Kids
