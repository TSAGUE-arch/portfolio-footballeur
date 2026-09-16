import React from 'react'

const Contact = () => {
  return (
    <div className='  bg-base-200' id='Contacts' >
      <p className='font-bold text-2xl uppercase text-center'>Contactez nous</p>
      <p className=' text-lg mt-4 text-center'>Envoyer nous un mail</p>
        <div className='grid place-items-center'>
           <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-6 mt-3 mb-3">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input input-primary validator" placeholder="Email" required />
            </fieldset>

            <label className="fieldset">
              <span className="label">Description</span>
              <textarea placeholder="Votre contenu ici" className="textarea textarea-primary" required></textarea>
            </label>

            <div className='flex justify-between'>
                <button className="btn bg-red-600 mt-4" type="reset">Annuler</button>
                <button className="btn btn-primary mt-4" type="submit">Envoyer</button>
            </div>
      </form>
        </div>
   </div>
  )
}

export default Contact
