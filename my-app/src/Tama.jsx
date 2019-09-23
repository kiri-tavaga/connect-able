import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Tama = () => (
  <Modal trigger={<Image src='/images/Tama.png' size='small' circular bordered centered />}>
    <Modal.Header>Tama</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Tama.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Mop and sweep</p>
        <Header>Messages</Header>
        <p>I want steak too</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Tama
