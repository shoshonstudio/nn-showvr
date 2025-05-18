import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Textarea } from '../ui/textarea'
// import { Label } from '@/components/ui/label'
// import { Checkbox } from '@/components/ui/checkbox'
// import Image from 'next/image'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { FormLabel } from '../ui/form'
// import { FieldValues, FormProviderProps } from 'react-hook-form'

const UniInput = ({item, form, field, pending}:{item:any, form:any, field:any, pending?:boolean}) => {
    const [text, setText] = useState<string>('')
    // const [number, setNumber] = useState<number>(1)
    // const [bool, setBool] = useState<boolean>(false)
    // const [logo, setLogo] = useState<string | null>(null);

    // const handleCheck = () => {
    //     setBool(!bool)
    // }
    
    // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.files && e.target.files[0]) {
	// 		const file = e.target.files[0];
	// 		const reader = new FileReader();
	// 		reader.onloadend = () => {
	// 			setLogo(reader.result as string);
	// 		};
	// 		reader.readAsDataURL(file);
	// 	}
	// };

    switch(item.type){
        // case "email":
        //     return <Input required={item.required ?? false} type="email" placeholder={item.label} value={text} onChange={(e) => {setText(e.target.value)}} {...field}/>
        // case "name":
        //     return <Input required={item.required ?? false} name={item.name} type="text" placeholder={item.label} value={text} onChange={(e) => {setText(e.target.value)}} />
        case "textarea":
            return <Textarea 
                className="bg-background" 
                type={item.type} 
                value={text}
                disabled={pending} 
                onChange={(e) => {setText(e.target.value ?? '')}} 
                placeholder={item.placeholder} 
                {...field} 
            />
        // case "checkbox":
        //     return <Label className='flex gap-4 items-center'>
        //                 <Checkbox name={item.name} className='w-8 h-8' required={item.required} checked={bool} onCheckedChange={handleCheck} {...field} />
        //                 {item.label}
        //             </Label>
        // case "text":
        //     return (<Input name={item.name} required={item.required ?? false} type="text" placeholder={item.placeholder} {...field} />)
        case "submit":
        case "button":
            return (<Button disabled={pending} value={item.name} className='w-full' {...form.register(item.name)}>{item.text ?? item.label} {pending && <Loader2 className='animate-spin h-4 w-4 ml-2' />}</Button>)
        // case "confirmPassword":
        // case "password":
        //     return <Input name={item.name} required={item.required ?? false} type="password" placeholder={item.label}  value={text} onChange={(e) => {setText(e.target.value ?? '')}} />
        // case 'image':
        //     return 	<Label className="border rounded-md w-40 h-40 block relative overflow-hidden">
        //         {logo && (
        //             <Image
        //                 src={field.value}
        //                 alt="Preview"
        //                 className="object-cover absolute w-full h-full border rounded-md"
        //                 width={40}
        //                 height={40}
        //             />
        //         )}
        //         <Input name={item.name} type="file" accept="image/*" 
        //             className='opacity-0 w-0 h-0' 
        //             onChange={handleImageChange} 
        //             // defaultValue={logo} 
        //         />
        //     </Label>
        // case 'select':
        //     return <div className='flex gap-2 items-center'>
        //         <div className='w-1/2 text-sm'>{item.label}</div>
        //             <Select name={item.name} placeholder={item.placeholder} onValueChange={field.onChange} {...field}>
        //                 <SelectTrigger className="w-1/2">
        //                     <SelectValue placeholder={item.label} />
        //                 </SelectTrigger>
        //                 <SelectContent>
        //                     {item.options?.map((option:any, i:number) => <SelectItem key={i} value={option.value}>
        //                         <div className='flex items-center gap-2 justify-start'>
        //                             {option.icon && <Image src={option.icon} alt={option.label} width={20} height={20} />} 
        //                             {option.label}
        //                         </div>
        //                     </SelectItem>)}
        //                 </SelectContent>
        //             </Select>
        //         </div>
        // case 'color':
        //     return <FormLabel className='flex gap-4 items-center w-full [&>*]:w-1/2'>
        //             {item.label}
        //             <Input type="color" disabled={pending} onChangeValue={(e:any) => {setText(e.target.value ?? '')}} placeholder={item.placeholder} {...field} />
        //         </FormLabel>
        default: 
            return (<Input 
                className="bg-background" 
                type={item.type} 
                disabled={pending} 
                value={text}
                onChange={(e) => {setText(e.target.value ?? '')}} 
                placeholder={item.placeholder} 
                {...field} 
            />)
    }
}

export default UniInput