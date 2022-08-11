import React from 'react'
import { useRouter } from 'next/router'

const AccountSignInDropDown = ({display,HideSignInDrowDownMenu}) => {
   const router=useRouter()
  return (
    <div className={!display ? 'hidden' : ''}>
        
        <div className={`bg-slate-700 absolute -mt-8 -ml-2 h-screen w-screen z-50 transition-transform ease-in-out delay-500   ${display ? ' transform bg-opacity-50': 'transform bg-opacity-0' }`}  >
           <div className=" bg-white absolute top-16 right-56 rounded-sm">
           <p className=' absolute pl-4 pt-2 font-bold text-sm  hover:opacity-50 cursor-pointer 'onClick={()=>{HideSignInDrowDownMenu()}}>X</p>
            {/* TOP */}
            <div className='flex flex-col flex-grow-0  items-center pt-8 border-b border-gray-200 mx-4 pb-4'>
            <button className=" bg-yellow-400 px-10 py-1  text-xs  border border-gray-400 hover:opacity-80 cursor-pointer rounded-sm" onClick={()=>{router.push('/login')}}>
            Identifiez-vous 
        </button>
          
            <p className=' text-xs pt-2 '>
            Nouveau client ? <span className='text-[#05a] hover:underline cursor-pointer'>Commencer ici.</span>
            </p>
            </div>
            <div className='flex'>
            <div className=' border-r border-gray-200'>
            <MenuList title="Vos listes d'envies" listName={EnviesList} />
            </div>
           
            
            <MenuList title="Votre Compte" listName={CompteList}/>
            </div>
            
            
            


            </div>
          
  
          </div>
    </div>
  )
}

export default AccountSignInDropDown

const MenuList=({title,listName})=>{
    return(
        <div className='py-4 px-10 pr-12'>
            <h3 className=' font-bold text-sm pb-4'>{title}</h3>
            {listName.map(list=> <p className='text-xs pb-2'>{list.itemTitle}</p>)}
        </div>
    )
}










const CompteList=[

    {
        itemTitle:"Votre Compte"
    },
    {
        itemTitle:"Vos Commandes"
    },
    {
        itemTitle:"Vos Listes d'envies"
    },
    {
        itemTitle:"Vos Recommandations"
    },
    {
        itemTitle:"Vos animaux de compagnie"
    },
    {
        itemTitle:"Vos livraisons programmées"
    },
    {
        itemTitle:"Votre Compte Amazon Prime"
    },
    {
        itemTitle:"Vos Listes d'envies"
    },
    {
        itemTitle:"Vos Listes d'envies"
    },

]

const EnviesList=[

    {
        itemTitle:"Votre Compte"
    },
    {
        itemTitle:"Vos Commandes"
    },
    {
        itemTitle:"Vos Listes d'envies"
    },
    {
        itemTitle:"Vos Recommandations"
    },
    {
        itemTitle:"Vos animaux de compagnie"
    },
    {
        itemTitle:"Vos livraisons programmées"
    },
    {
        itemTitle:"Votre Compte Amazon Prime"
    },
    {
        itemTitle:"Vos Listes d'envies"
    },
    {
        itemTitle:"Vos Listes d'envies"
    },

]