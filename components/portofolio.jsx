import React from 'react'
import CardWork from './card-work'
import Link from 'next/link'
import { Button } from './ui/button'

const Portofolio = () => {
  return (
    <section id='portofolio' className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
                <div className="@container mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Portofolio</h2>
                        <p className="mt-4">Dari aplikasi internal hingga sistem publik, kami merancang solusi digital yang relevan dan dapat diandalkan sesuai kebutuhan klien.</p>
                    </div>
                    <div className="@min-4xl:max-w-full @min-4xl:grid-cols-2 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                        <Link href="/">
                          <CardWork desc="Aplikasi SI-PETASN merupakan sistem informasi yang memetakan data ASN secara menyeluruh serta menyediakan fitur proyeksi kebutuhan pegawai secara dinamis dan terstruktur." judul="SI-PETASN" image="/petasn.JPG" />
                        </Link>
                        <Link href="/">
                          <CardWork image="/saksi-web.jpg" judul="SAKSIFAST" desc="Sistem informasi terpadu untuk perhitungan suara pada pemilihan kepala daerah. Sistem ini terdiri dari dashboard web untuk admin serta aplikasi mobile yang digunakan oleh saksi di tempat pemungutan suara, guna memastikan proses rekapitulasi berjalan cepat, akurat, dan transparan." />
                        </Link>
                    </div>

                    {/* <div className='mt-8 text-center'>
                      <Button
                        size="sm"
                        className="rounded-(--radius) cursor-pointer">
                        <span className="">Lainnnya</span>
                    </Button>
                    </div> */}
                </div>
            </section>
  )
}

export default Portofolio