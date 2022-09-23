import React from 'react'
import { useAxiosFetch } from '../Hooks/useAxiosFetch'

function ListPage() {
    const { data, loading, error } = useAxiosFetch({
        method: "GET",
        url: "/toos",
    });

    if (error) {
        console.log(error)
        return ( <h1>Error.......</h1>);
    }
    if (loading) return (<h1>Loading.......</h1>);

    return (<ul> {data && data.map(({ title }) => <li>{title}</li>)} </ul>)
}

export default ListPage