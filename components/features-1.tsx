import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Cog, GaugeCircle, Rocket, Settings2, Shield, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section id='layanan' className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Kenapa Memilih Digoelsoft?</h2>
                    <p className="mt-4">Kami hadir bukan hanya sebagai vendor, tapi mitra teknologi yang memahami kebutuhan unik Anda. Dengan pengalaman di berbagai sektor, kami membangun system yang cepat, fleksibel, dan bisa diandalkan.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Rocket className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Solusi Digital Menyeluruh</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Kami membangun sistem yang mendukung setiap aspek operasional Anda, mulai dari website, mobile app, hingga backend yang andal.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Shield className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Layanan IT yang Bisa Diandalkan</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Dari maintenance jaringan, server management, hingga IT support — kami hadir sebagai partner teknologi Anda, siap kapan pun dibutuhkan.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Cog className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Kustomisasi Sesuai Kebutuhan</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Setiap bisnis (dan instansi) itu unik. Kami merancang solusi yang benar-benar sesuai dengan alur kerja dan tujuan Anda, bukan template generik.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
