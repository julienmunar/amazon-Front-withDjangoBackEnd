import React from "react";
import Image from "next/image";
import Footer from "../components/homePage/Footer";
import LoginFormView from "../components/LoginViews/LoginFormView";
import { useRouter } from "next/router";
const login = () => {
  const router=useRouter( )
  return (
    <div>
      <div className="flex flex-col items-center pt-10  pb-44 ">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png"
          width={127}
          height={50}
          alt="amazonLogo"
          objectFit="contain"
          className=" flex-grow-0 cursor-pointer"
          onClick={()=>{router.push('/')}}
        />
        <LoginFormView />
      </div>
 
      <Footer />
    </div>
  );
};

export default login;
