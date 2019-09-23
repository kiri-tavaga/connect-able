import React from 'react'
import { Button, Header, Icon, Segment, Input } from 'semantic-ui-react'

const Shopping = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='shop' />
      Shopping List
    </Header>
    <Input>What do we need for shopping?</Input>
    <Button primary>Add Shopping</Button>
  </Segment>
)

export default Shopping
