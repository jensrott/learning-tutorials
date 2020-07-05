import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';

const BackButton = ({ children }) => {
    return (
        <React.Fragment>
            <S.Button>
                <S.Text>{children}</S.Text>
            </S.Button>
        </React.Fragment>
    )
}

BackButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BackButton;
