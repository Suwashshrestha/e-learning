"use client";

import * as Z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
    FormControl
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


const formSchema = Z.object({
    emailAddress: Z.string().email(),
    password: Z.string().min(4),
    passwordConfirm: Z.string()
}).refine((data) => {
    return data.password === data.passwordConfirm
}, {
    message: "password and password confirm must match",
    path: ['passwordConfirm']
})


const signup = () => {
    const form = useForm<Z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: '',
            password: '',
            passwordConfirm: ''

        },
    })
    const handleSubmit = (values: Z.infer<typeof formSchema>) => {
        console.log({ values })
    }

    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>
                    <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({ field }) => {
                            return <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Email address'
                                        type='email' {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => {
                            return <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Password'
                                        type='password'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => {
                            return <FormItem>
                                <FormLabel>Password confrim</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Password confirm'
                                        type='password'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                    />
                    <Button type='submit' className='w-full '>Sign up</Button>
                </form>
            </Form>
        </div>
    )
}

export default signup