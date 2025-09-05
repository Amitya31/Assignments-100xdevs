// to use useSession one need to use client
'use client'
import { useSession,SessionProvider, signOut, signIn } from "next-auth/react";
export default function Home() {
  return (
    <SessionProvider>
      <RealHome/>
     </SessionProvider>
    
  );
}

 function RealHome() {
  const session = useSession()
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {session.status==='authenticated' && <button onClick={()=>signOut()}>signOut</button>}
      {session.status==='unauthenticated' && <button onClick={()=>signIn()}>signIn</button>}
      {JSON.stringify(session)}
    </div>
  );
}