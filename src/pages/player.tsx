import { useEffect, useRef, useState } from 'react';
import { AiFillHome, AiFillPlayCircle, AiFillPauseCircle, AiFillForward, AiFillBackward } from 'react-icons/ai'

const musics = [
	'Overworld1.mp3',
	'Overworld2.mp3',
	'Overworld3.mp3'
];

const Player = () => {
	const [time, setTime] = useState(0);
	const [index, setIndex] = useState(0);
	const [isPlay, setPlay] = useState(false);
	const audio = useRef<HTMLAudioElement>(null);

	const playAudio = () => audio.current && audio.current.play();
	const pauseAudio = () => audio.current && audio.current.pause();
	const nextAudio = () => setIndex((index + 1) % musics.length);
	const prevAudio = () => setIndex((index - 1 + musics.length) % musics.length);
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = "/scripts/player.js";
		script.onload = () => (window as any).vizInit();
		document.body.appendChild(script);

		if (!audio.current) return;
		audio.current.onplay = () => setPlay(true);
		audio.current.onpause = () => setPlay(false);
		audio.current.ontimeupdate = () => setTime(audio.current!.currentTime);

		document.onselectstart = () => false;
	}, []);
	useEffect(() => {
		if (!audio.current) return;
		audio.current.src = '/music/' + musics[index];
	}, [index]);

	return (
		<div id='content'>
			<div className='fixed flex flex-col justify-between w-screen h-screen p-10'>
				<div className='flex justify-between'>
					<a href='/'>
						<div className='inline-block p-3 text-3xl text-white transition-all duration-300 rounded-full cursor-pointer bg-rose-600 file right-3 top-5 hover:-translate-y-1'>
							<AiFillHome />
						</div>
					</a>
					<div className='text-5xl sm:block hidden bg-gradient-to-r from-fuchsia-500 via-red-500 to-fuchsia-500 text-transparent bg-clip-text animate-color bg-[length:1000px_100px] font-monument'>WOB MUSIC PLAYER</div>
					<div />
				</div>
				<div className='flex flex-col items-center justify-between gap-5 sm:flex-row'>
					<div className='flex-1 text-3xl text-center sm:text-left font-chicago'>
						<div className='text-gray-400'>SONG PLAYING</div>
						<div>{musics[index]}</div>
					</div>
					<div className='flex-1 text-5xl text-center animate-zoom-color whitespace-nowrap text-transparent bg-clip-text bg-[length:1000px_100px] bg-[linear-gradient(90deg,#f00,#0f0,#00f)]'>
						{/* <Image src="/imgs/player.png" width={300} height={300} /> */}
					</div>
					<div className='flex-1 text-3xl text-center sm:text-right font-chicago'>
						<div className='text-gray-400'>PLAYTIME</div>
						<div>{new Date(1000 * time).toISOString().substr(11, 8)}</div>
					</div>
				</div>
				<div className='flex text-6xl justify-evenly'>
					<div onClick={prevAudio} className='transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400'><AiFillBackward /></div>
					<div onClick={playAudio} className={`transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400 ${isPlay && 'hidden'}`}><AiFillPlayCircle /></div>
					<div onClick={pauseAudio} className={`transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400 ${!isPlay && 'hidden'}`}><AiFillPauseCircle /></div>
					<div onClick={nextAudio} className='transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400'><AiFillForward /></div>
				</div>
			</div>
			<audio id='audio' ref={audio} autoPlay />
			<div id='out' />
		</div>
	)
}

export default Player
