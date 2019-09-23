import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Mum = () => (
  <Modal trigger={<Image src='/images/mum.png' size='small' circular bordered centered />}>
    <Modal.Header>Mum</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/mum.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Washing</p>
        <p>Vacuum</p>
        <p>Cook Dinner</p>
        <Header>Messages</Header>
        <p>I'm the best!</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Mum
