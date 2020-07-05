import React from 'react';

import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import Card from '../components/Card';
import List from '../components/List';
import Spinner from '../components/Spinner';
import Form from '../components/Form';

const Todos = () => {
    const GET_TODOS = gql`
    {
        allTodos {
            id,
            title,
        }
    }
    `;
    const { loading, error, data } = useQuery(GET_TODOS);

    if (loading) return <Spinner />;
    if (error) return `Error! ${error.message}`;

    console.log(data);

    return (
        <React.Fragment>
            <Form />
            <List>
                {data ? data.allTodos.map((todo, index) => (
                    <Card
                        title={todo.title}
                        id={todo.id}
                        key={index}
                    />
                )) : <p>No todos yet</p>}
            </List>
        </React.Fragment>
    )
}

export default Todos
