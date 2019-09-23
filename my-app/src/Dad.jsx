import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const Dad = () => (
  <Modal trigger={<Image src='/images/dad.png' size='small' circular bordered centered />}>
    <Modal.Header>Dad</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/dad.png' />
      <Modal.Description>
        <Header>Messages</Header>
        <p>I want steak for Dinner</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Dad
