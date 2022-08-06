const HomePhase3 = () => {
    return (
        <section id="section-phase-1" className="gap-10 pt-40 lg:flex">
            <div className="flex-[2]">
                <div className="text-lg">PHASE THREE</div>
                <div className="mt-3 text-3xl lg:text-4xl font-monument">THE COMMUNITY EP</div>
                <div className="mt-10">
                    A COLLECTION OF 5 SONGS ON AN EP THAT WERE ALL ORIGINALLY CREATED AND SOURCED
                    BY THE COMMUNITY AND COLLABORATED ON WITH WOBBLEBUG AND HIS TEAM OF PRODUCERS.
                </div>
            </div>
            <div className="flex-[3] pt-5 lg:pt-0">
                <div className="px-10 space-y-5 rounded-md py-7 bg-stone-800 font-monument">
                    <div className="text-2xl font-monument-bold">COMMUNITY EP</div>
                    <div>5 SONGS</div>
                    <div>2 SINGLES</div>
                    <div>RELEASE DATE TBA</div>
                </div>
                <div className="flex gap-5 pt-5">
                    <div className="p-5 flex-1 bg-fuchsia-700 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-xl">
                        <div className="py-8 text-2xl text-center font-monument">SINGLE 01</div>
                    </div>
                    <div className="p-5 flex-1 bg-fuchsia-700 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-xl">
                        <div className="py-8 text-2xl text-center font-monument">SINGLE 02</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePhase3;