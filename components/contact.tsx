import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section id='kontak' className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                    <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Punya pertanyaan?</h1>
                    <div className='my-7 text-center'>
                        <p className="mt-4">Tim kami siap membantu lewat WhatsApp atau email.</p>
                    </div>
                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            
                            <h2 className="mb-3 text-lg font-semibold">Whatsapp</h2>
                            <div className='flex flex-col gap-3'>
                                <Link href="https://wa.me/6282248458305" target='_blank' className="text-lg text-green-600 hover:underline dark:text-green-400">
                                    Bugs
                                </Link>
                                <Link href="https://wa.me/6282197943983" target='_blank' className="text-lg text-green-600 hover:underline dark:text-green-400">
                                    Febrian
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Email</h3>
                            <Link target='_blank' href="mailto:digoelsoft@gmail.com" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                            digoelsoft@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x border-b bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                
            </div>
        </section>
    )
}
