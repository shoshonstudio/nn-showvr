import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SignInForm from '../_components/SignInForm'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const SignInPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
});

  if(session){
    redirect(`/`) 
  }

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-xl'>SHOWVR</CardTitle>
        <CardDescription>Use your credentials to sign in</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  )
}

export default SignInPage
