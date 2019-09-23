import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const Chores = () => (
  <Modal trigger={<Button>Chores</Button>}>
    <Modal.Header>Chores</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/chores.png' />
      <Modal.Description>
        <Header>Dishes </Header>
        <Header>Sweep and Mop</Header>
        <Header>Vacuum</Header>
        <Header>Rubbish</Header>
        <Header>Washing</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Chores