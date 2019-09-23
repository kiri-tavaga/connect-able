import React from 'react'
import { Button, Header, Icon, Segment, Input } from 'semantic-ui-react'

const Events = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='arrow circle right' />
      Events
    </Header>
    <Input>What events are coming up?</Input>
    <Button primary>Add Event</Button>
  </Segment>
)

export default Events
