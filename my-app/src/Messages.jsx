import React from 'react'
import Hello from './Hello'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Messages = () => (
  <Modal trigger={<Button>Messages</Button>}>
    <Modal.Header>Messages</Modal.Header>
    <Modal.Content image>
      <Icon name='facebook messenger' />
      <Modal.Description>
        <Header>Post a message to a family member</Header>
        <Hello />
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Messages