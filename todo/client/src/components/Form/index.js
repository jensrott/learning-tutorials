import React, { useState } from 'react';
import * as S from './styles';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const Form = (refreshQuery) => {
    const [todo, setTodo] = useState("");

    const GET_TODOS = gql`
        {
            allTodos {
                id,
                title,
            }
        }
    `;
    const ADD_TODO = gql`
        mutation createTodo($title: String!) {
            createTodo(title: $title) {
                id
                title,
            }
        }
    `;
    const [createTodo, { data }] = useMutation(ADD_TODO, {
        refetchQueries: mutationResult => [{ query: GET_TODOS }]
    });

    const onSubmit = (e) => {
        e.preventDefault();
        createTodo({ variables: { title: todo } });
    }

    return (
        <React.Fragment>
            <S.Form onSubmit={onSubmit}>
                <S.Input
                    onChange={e => setTodo(e.target.value)}
                    placeholder="Enter your todo"></S.Input>
                <S.Button type="Submit">Enter</S.Button>
            </S.Form>
        </React.Fragment>
    )
}

export default Form
