import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
        dark:bg-zinc-900
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/talkium@512x512-regular.png"
          alt="Logo"
        />
        <h1 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
            dark:text-gray-100
          "
          >
            Sign in to your account
        </h1>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;
