
import { Pokemon } from '../models/pokemon.model';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';

const Item = (props: Pokemon) => {
  const {
    id, 
    name,
    type,
    // total,
    hp,
    imgGif,
    // imgLarge,
    // imgNormal,
    attack,
    defense,
    sp_atk,
    sp_def,
    speed
  } = props

  return (
    <Card className='m-auto' style={{width: '18rem'}} key={id}>
      <Card.Header><b>Tipo:</b> {type}</Card.Header>
      <Card.Img className='d-block mx-auto my-2 w-50' width={80} height={100} variant='top' src={imgGif}/>
      <Card.Body>
        <Card.Title className='text-center'>
          {id} - {name}
        </Card.Title>
        <ListGroup>
          <ListGroup.Item>
            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/210/210545.png"
              className='m-2'
            />
            <b>HP:</b> {hp}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/3522/3522092.png"
              className='m-2'
            />
            <b>Ataque:</b> {attack}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/929/929429.png"
              className='m-2'
            />
            <b>Defenza:</b> {defense}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
              className='m-2'
            />
            <b>Ataque esp.:</b> {sp_atk}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/3199/3199328.png"
              className='m-2'
            />
            <b>Defenza esp.:</b> {sp_def}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image
              width={16}
              height={16}
              src="https://cdn-icons-png.flaticon.com/512/1455/1455318.png"
              className='m-2'
            />
            <b>Velocidad:</b> {speed}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Item
