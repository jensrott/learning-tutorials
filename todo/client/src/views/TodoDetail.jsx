import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Spinner from '../components/Spinner';

import BackButton from '../components/BackButton';
import * as S from '../components/Card/styles';

const TodoDetail = (props) => {

    const id = props.match.params.id;

    const VIEW_TODO = gql`
        mutation viewTodo($id: ID!) {
        viewTodo(id: $id) {
            id,
            title,
            }
        }`;


    const [viewTodo, { data }] = useMutation(VIEW_TODO);

    useEffect(() => {
        viewTodo({ variables: { id: id } })
    }, [])

    return (
        data ? (
            <React.Fragment>
                <Link to="/todos">
                    <BackButton>
                        Back
                    </BackButton>
                </Link>
                <S.Wrapper>
                    <S.Text>{data.viewTodo.title}</S.Text>
                </S.Wrapper>
            </React.Fragment>
        ) : <Spinner />

    )
}

export default TodoDetail
