import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const trigger = (
  <span>
    <Icon name='user' /> Hello, Tyler
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Tyler Vincent</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Chores' },
  { key: 'explore', text: 'Messages' },
  { key: 'integrations', text: 'Events' },
  { key: 'help', text: 'Shopping list' },
  { key: 'settings', text: 'Dinner tonight' },
  { key: 'sign-out', text: 'Sign Out' },
]

const Hello = () => (
  <Dropdown trigger={trigger} options={options} />
)

export default Hello