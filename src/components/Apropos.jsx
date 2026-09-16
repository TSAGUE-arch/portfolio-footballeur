import React from 'react'

const Apropos = () => {
  return (
    <div id='Apropos'>
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src="/photo1.jpg"
                className="max-w-[18rem] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">A propos de moi</h1>
                    <p className="py-6">
                        
                        Attaquant rapide et technique, il se distingue par sa capacité à créer 
                        le danger à chaque accélération balle au pied.
                         Doté d'un sens du but naturel et d'une lecture du jeu au-dessus de la moyenne,
                        il constitue un atout offensif constant pour son équipe. Sa vitesse d'exécution,
                        sa qualité de frappe des deux pieds et son intelligence de mouvement en font un profil
                        difficile à contenir pour n'importe quelle défense.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Apropos
