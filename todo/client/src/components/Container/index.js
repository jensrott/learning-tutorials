import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';


const Container = ({ children }) => {
    return (
        <React.Fragment>
            <S.Wrapper>
                {children}
            </S.Wrapper>
        </React.Fragment>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container;