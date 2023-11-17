import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";

import { useSignInWithFacebook, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hook/useToken'
import Loading from '../../components/loading/Loading';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; 
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
  const [token] = useToken(Guser || Fuser);

    if (Gerror || Ferror) {
        return (
          <>
          {
            toast.error(Gerror?.message || Ferror?.message)
          }
          </>
          )
    }
      if (Gloading || Floading) {
        return <div className='h-40 mt-10'>{<Loading />}</div>
        
      };
      if(token){
          navigate(from, { replace: true })
        return(
          <>
            {
             toast.success('Thank You! Login Successfull')
            }
          </>
          )
     }
    return (
      <div className="social-media">
        <button
          className="social-icon hover:text-primary text-[#115CE8] border-primary border-2"
          onClick={() => signInWithFacebook()}
        >
          <BsFacebook />
        </button>

        <button
          className="social-icon hover:text-primary text-secondary border-primary border-2"
          onClick={() => signInWithGoogle()}
        >
          <FcGoogle />
        </button>
      </div>
    );
};

export default SocialLogin;