import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Tyler = () => (
  <Modal trigger={<Image src='/images/Tyler.png' size='small' circular bordered centered />}>
    <Modal.Header>Tyler</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Tyler.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Dishes</p>
        <Header>Messages</Header>
        <p>I need $50</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Tyler
