import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Aaron = () => (
  <Modal trigger={<Image src='/images/Alex.png' size='small' circular bordered centered />}>
    <Modal.Header>Aaron</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Alex.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Make the bed</p>
        <Header>Messages</Header>
        <p>I want McDonalds</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Aaron
