import React from 'react';
import * as S from './styles';

const Footer = () => {
    return (
        <React.Fragment>
            <S.Wrapper>
                <S.Text>
                    Copyright © {new Date().getFullYear()}
                    <S.Link href="https://github.com/jensrott" target="_blank"> Jens Rottiers </S.Link>
                    All Rights Reserved.
                </S.Text>
            </S.Wrapper>
        </React.Fragment>
    )
}

export default Footer;