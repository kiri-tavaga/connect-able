import React from 'react'
import {Segment, Image, Divider} from 'semantic-ui-react'
import Alex from './Alex'
import Tyler from './Tyler'

const Kids = () => (
  <Segment.Group>
    <Image.Group>
      <Alex />
      <Tyler />
      <Image src='/images/Zyrante.png' size='small' circular bordered centered />
      <Image src='/images/Tama.png' size='small' circular bordered centered />
    </Image.Group>
    <Divider hidden />
    <Image.Group>
      <Image src='/images/Alex.png' size='small' circular bordered centered />
      <Image src='/images/Leah.png' size='small' circular bordered centered />
      <Image src='/images/Tynika.png' size='small' circular bordered centered />
      <Image src='/images/Zyrante.png' size='small' circular bordered centered />
    </Image.Group>
  </Segment.Group>
)

export default Kids
