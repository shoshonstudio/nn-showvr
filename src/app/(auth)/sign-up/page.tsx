import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SignUpForm from '../_components/SignUpForm'

const SignUpPage = () => {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-xl'>SHOWVR</CardTitle>
        <CardDescription>Create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  )
}

export default SignUpPage