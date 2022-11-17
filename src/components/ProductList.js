import React from 'react'

const ProductList = () => {
    return (
        <div className="container mt-5">
        <div className="columns is-multiline">
            <div className="column is-one-quarter">
                <div className="card">

                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Yusuf Ar</p>
                                <p className="subtitle is-6">@Yusuf Ar</p>
                            </div>
                        </div>
                    </div>

                    <footer className='card-footer'>
                        <a className='card-footer-item'>Edit</a>
                        <a className='card-footer-item'>Delete</a>
                    </footer>

                </div>
            </div>
        </div>

    </div>

    );
   
}

export default ProductList