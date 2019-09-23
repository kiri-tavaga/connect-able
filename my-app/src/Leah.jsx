import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Leah = () => (
  <Modal trigger={<Image src='/images/Leah.png' size='small' circular bordered centered />}>
    <Modal.Header>Leah</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Leah.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Shopping</p>
        <Header>Messages</Header>
        <p>I need the car</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Leah
