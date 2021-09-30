import React from 'react'
import { Card, Button  } from 'react-bootstrap'

export const UserCard = ({user}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Faccounts-group-people-user-group-users%2F113923&psig=AOvVaw37utlLZCXIm8C08AEaWMl-&ust=1633119072142000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNDBquXAp_MCFQAAAAAdAAAAABAJ" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
