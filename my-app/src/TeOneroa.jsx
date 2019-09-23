import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const TeOneroa = () => (
  <Modal trigger={<Image src='/images/Zyrante.png' size='small' circular bordered centered />}>
    <Modal.Header>TeOneroa</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Zyrante.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Clean the Truck</p>
        <Header>Messages</Header>
        <p>I want mushroom sauce with my steak</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default TeOneroa
