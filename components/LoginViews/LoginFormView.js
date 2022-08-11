import React from 'react'

const LoginFormView = () => {
  return (
    <div>
          <div className='border border-gray-200 p-4 rounded-sm'>
    <h2 className=' tracking-wide text-xl pb-6'>S'identifier</h2>
    <form className=' flex flex-col'>
        <p className='text-xs font-semibold'> Adresse e-mail ou numéro de téléphone <br/> portable </p>
        <input placeholder='Enter your Email' className=' bg-blue-100 rounded-sm border border-gray-400 pl-2 py-1 text-sm text-black font-light mb-4' />
        <input placeholder='Enter your password' className=' bg-blue-100 rounded-sm border border-gray-400 pl-2  py-1 text-sm text-black'/>
        <button  className=" bg-yellow-400 px-3 py-1 my-4  text-xs  border border-gray-400 w-full hover:opacity-80 cursor-pointer">
          Se Connecter
        </button>
        <p  className=' text-xs max-w-xs'>
        En passant votre commande, vous acceptez les Conditions générales de vente d’Amazon. Veuillez consulter notre Notice Protection de vos informations personnelles, notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres <br/> d’intérêt.
        </p>
  
    </form>
    
</div>
     <div className='flex  flex-col items-center mt-4 text-gray-500 border-t border-gray-200'>
     <p className='text-xs -mt-2 '>Nouveau Chez Amazon ?</p>
     <button  className="  bg-gray-200 px-3 py-1 my-4  text-xs  border text-black border-gray-400 w-full hover:opacity-80 cursor-pointer rounded-sm">
        Créer votre compte Amazon
        </button>
   </div>
    </div>

  )
}

export default LoginFormView