import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Zyrante = () => (
  <Modal trigger={<Image src='/images/Zyrante.png' size='small' circular bordered centered />}>
    <Modal.Header>Zyrante</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Zyrante.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Mow lawns</p>
        <Header>Messages</Header>
        <p>Pick me up from Ani's</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Zyrante
