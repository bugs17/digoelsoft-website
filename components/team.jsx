const members = [
    {
        name: 'Bugs',
        avatar: '/bugs2.jpg',
    },
    {
        name: 'Febrian Silubun',
        avatar: '/feb.jpeg',
    }
]

export default function TeamSection() {
    return (
        <section id="tim" className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Tim Kami</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Kami adalah tim yang terdiri dari individu berpengalaman di bidang teknologi dan solusi digital, siap membantu mewujudkan sistem yang tepat guna.</h3>
                    <div className="flex flex-row justify-around border-t py-6 ">
                        {members.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-background size-40 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-4 block text-sm">{member.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
