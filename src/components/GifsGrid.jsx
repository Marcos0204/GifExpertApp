import React from 'react'
import GifsGridItem from './GifsGridItem'
import {useFechtGifs} from '../hooks/useFechtGifs'

const GifsGrid = ({category}) => {
    const {data:images, loading} = useFechtGifs(category)
    
    return ( loading ? (
            <p style={{
                textAlign:'center',
                fontSize:'40px',
                fontWeight: 'bold',
                color: 'green'
            }}>Cargando</p> 

        ) : (
            <>
            <h3 className='title-ul' >{category}</h3>
            <div className='card-grid'>
            {
                images?.map((img,idx) => (
                    <GifsGridItem
                        key={idx}
                        {...img}
                    />
                ))
            }
            </div>
                
            </>
        )
    )
    
}

export default GifsGrid
