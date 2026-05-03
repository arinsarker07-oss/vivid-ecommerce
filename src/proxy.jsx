import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { GetAllProduct } from './components/lib/fetch'


export async function proxy(request) {
    const product = await GetAllProduct()
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }


}

export const config = {
    matcher: ["/products/:path"],
}