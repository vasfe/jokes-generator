import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
    margin: 0;
    margin-left: 5px;

`;

const CheckBoxesRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px 0;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 5px 0;
    border-radius: 10px;
    background-color: #2d3038;
`;

const Label = styled.label`
    margin-left: 5px;
`;

const Title = styled.label`
    font-size: 17px;
    font-weight: 600;
    margin-right: 5px;
`;

const Filters = (props) => {
    return (
        <Container>
            <Title>{props.label}</Title>
            <CheckBoxesRow>
                {props.filtersArray.map((filter, index) =>
                    <FilterContainer>
                        <Label
                            key={index}
                        >
                            {filter[0]}
                        </Label>
                        <StyledCheckbox
                            type='checkbox'
                            name={filter[0]}
                            onChange={() => props.updateFilters(filter[0])}
                        />
                    </FilterContainer>
                )}
            </CheckBoxesRow>
        </Container>
    );
}

export default Filters;