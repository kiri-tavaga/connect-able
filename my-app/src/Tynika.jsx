import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Tynika = () => (
  <Modal trigger={<Image src='/images/Tynika.png' size='small' circular bordered centered />}>
    <Modal.Header>Tynika</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Tynika.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Feed the dog</p>
        <Header>Messages</Header>
        <p>I want a new dog</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Tynika
