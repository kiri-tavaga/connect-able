import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Alex = () => (
  <Modal trigger={<Image src='/images/Alex.png' size='small' circular bordered centered />}>
    <Modal.Header>Alex</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/Alex.png' />
      <Modal.Description>
        <Header>Chores</Header>
        <p>Vacuum</p>
        <Header>Messages</Header>
        <p>I need $20</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Alex
