import React from 'react'
import { useParams } from 'react-router-dom'
import CardsData from '../../Data/CardsData';
import CardDetail from '../CardDetail';

const InCard = () => {
    const { incardId } = useParams();
    const InCard = CardsData.find((e) => e.id === Number(incardId))

    return (
        <div>
           <CardDetail InCard={InCard} />
        </div>
    )
}

export default InCard