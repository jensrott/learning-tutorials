import React, { useState } from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const Card = ({ title, id }) => {

    const [checked, setChecked] = useState(false);
    const [hideButton, setHideButton] = useState(false);

    const GET_TODOS = gql`
    {
        allTodos {
            id,
            title,
        }
    }
    `;

    const DELETE_TODO = gql`
    mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
        id,
        title,
        }
    }`;

    const [deleteTodo, { data }] = useMutation(DELETE_TODO, {
        refetchQueries: mutationResult => [{ query: GET_TODOS }],
        onCompleted: () => setHideButton(false)
    });

    const removeTodo = () => {
        deleteTodo({ variables: { id: id } })
        setHideButton(true);
    }

    return (
        <React.Fragment>
            <S.Wrapper>
                <Link style={{ textDecoration: "none", color: "#000" }} to={`/todo/${id}`}>
                    <S.Text>{title}</S.Text>
                </Link>
                {!hideButton ? (
                    <S.DeleteIcon onClick={removeTodo} className='fa fa-trash'></S.DeleteIcon>
                ) : null}
            </S.Wrapper>
        </React.Fragment>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Card;