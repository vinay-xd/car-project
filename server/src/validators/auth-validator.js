import { z } from 'zod'


const validationSchema = z.object({
    username: z
        .string({ required_error: 'user name is require' })
        .trim()
        .min(3, { message: 'username must be 3 chr. long' })
        .max(100, { message: 'username must not be longer then 100 words' }),
    email: z
        .string({ required_error: 'user email is require' })
        .trim()
        .email({message: 'invalid email address'})
        .min(3, { message: 'email must be 3 chr. long' })
        .max(255, { message: 'email must not be longer then 255 words' }),
    password: z
        .string({ required_error: 'user password is require' })
        .min(8, { message: 'password must be 8 chr. long' })
        .max(1024, { message: 'password must not be longer then 1024 words' }),
})

export {validationSchema}