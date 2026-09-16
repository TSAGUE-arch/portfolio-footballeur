import React from 'react'

const Acceuil = () => {
  return (
    <div id='Acceuil'>
       <div
        className="hero min-h-screen"
        style={{
            background:
            "url(/photo5.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",aspectRatio:"16/9"
        }}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Joueur Attaquant</h1>
                <p className="mb-5">
                    Chaque action. Chaque mouvement. Chaque but.⚽⚽⚽
                </p>
                <a className="btn btn-primary" href='#Categories'>Voir les videos</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Acceuil
