import { useState } from "react"
import Container from "./common/Container"

const Header = () => {
    const [isShow, setShow] = useState<boolean>(false);

    const toggleMenu = () => setShow(!isShow);

    return (
        <div className="sticky top-0 z-10 flex items-center justify-between w-full gap-5 py-5 bg-black sm:gap-20">
            <div className="cursor-pointer" >
                <img src="/imgs/logo.png" width={48} height={48} alt="wob music" />
            </div>
            <div className="flex">
                <div className="z-10 flex items-center justify-center w-12 h-12">
                    <div onClick={toggleMenu} className={`w-12 h-12 transition-all duration-300 cursor-pointer hover:w-10 hover:h-10 border-2 rounded-full border-rose-600 ${isShow && 'bg-rose-600'}`} />
                </div>
                <div>
                    <div className={`fixed w-screen left-0 h-screen transition-all duration-500 bg-[#8e29bb] ${isShow ? 'top-0' : 'rounded-b-[50%] -top-[calc(100%+600px)]'}`}>
                        <Container>
                            <div className="flex flex-col gap-3 pt-5 text-4xl text-black font-monument">
                                <a href="#wob-music-group"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">WOBBLE</div></a>
                                <a href="#section-phase-1"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">PHASE</div></a>
                                <a href="#how-it-work"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">HOW IT WILL WORK</div></a>
                                <a href="#community-remix-contest"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">COMMUNITY</div></a>
                                <a href="#art-contest"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">ART</div></a>
                                <a href="#content-contest"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">CONTENT</div></a>
                                <a href="#song-release"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">CREATIVE</div></a>
                                <a href="#song-sharing"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">ROYALTY</div></a>
                                <a href="#wobblelabs-overview"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">OVERVIEW</div></a>
                                <div onClick={() => window.location.href = '/player'} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">WOB MUSIC PLAYER</div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header