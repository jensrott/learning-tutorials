import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';


const List = ({ children }) => {
    return (
        <React.Fragment>
            <S.Container>
                {children}
            </S.Container>
        </React.Fragment>
    )
}

List.propTypes = {
    children: PropTypes.node.isRequired,
}

export default List;