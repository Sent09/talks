import React from 'react'
import image404 from '../assets/404.jpg'

export const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <img src={image404} alt="Página no encontrada" />
        </div>
    )
}
