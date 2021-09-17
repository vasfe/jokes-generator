import React from 'react';
import styled from 'styled-components';
import { TrashOutline } from 'react-ionicons'

const StyledCard = styled.div`
  background-color: #2d3038;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #0e1529;
  margin: 5px 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  font-size: 22px;
`;

const CardText = styled.div`
  background-color: #3d424d;
  border-radius: 10px;
  padding: 10px 10px 35px 10px;
  margin-bottom: 2px;
`;

const DeleteButton = styled(TrashOutline)`
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 2px;
    border-radius: 50%;
    &:active{
      background: #959db3;
    }
`;

const Card = (props) => {
    return (
        <StyledCard>
            <DeleteButton
                color={'#00000'}
                title={'delete'}
                height="26px"
                width="26px"
                onClick={props.onDelete}
            />
            <CardText>
                {props.text}
            </CardText>
        </StyledCard>
    );
}

export default Card;