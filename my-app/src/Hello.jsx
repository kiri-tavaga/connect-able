import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const trigger = (
  <span>
    <Icon name='user' /> Family Members
  </span>
)

const options = [
  { key: 'mum', text: 'Mum' },
  { key: 'dad', text: 'Dad' },
  { key: 'Alex', text: 'Alex' },
  { key: 'Tyler', text: 'Tyler' },
  { key: 'Tama', text: 'Tama' },
  { key: 'Zyrante', text: 'Zyrante' },
  { key: 'Tynika', text: 'Tynika' },
  { key: 'Leah', text: 'Leah' },
  { key: 'Aaron', text: 'Aaron' },
  { key: 'TeOneroa', text: 'TeOneroa' },
]

const Hello = () => (
  <Dropdown trigger={trigger} options={options} />
)

export default Hello