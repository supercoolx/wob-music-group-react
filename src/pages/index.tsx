import React from 'react'
import Container from 'components/common/Container'
import Header from 'components/Header'
import HomeTop from 'components/Home/HomeTop'
import HomePhase1 from 'components/Home/HomePhase1'
import HomePhase2 from 'components/Home/HomePhase2'
import HomePhase3 from 'components/Home/HomePhase3'
import HomeHow from 'components/Home/HomeHow'
import HomeCommunity from 'components/Home/HomeCommunity'
import HomeArt from 'components/Home/HomeArt'
import HomeContent from 'components/Home/HomeContent'
import HomeRelease from 'components/Home/HomeRelease'
import HomeSharing from 'components/Home/HomeSharing'
import HomeOverview from 'components/Home/HomeOverview'
import Footer from 'components/Footer'
import ScrollToTop from 'components/common/ScrollToTop'

const Home = () => {

	return (
		<Container>
			<main className='font-chicago'>
				<Header />
				<HomeTop />
				<HomePhase1 />
				<HomePhase2 />
				<HomePhase3 />
				<HomeHow />
				<HomeCommunity />
				<HomeArt />
				<HomeContent />
				<HomeRelease />
				<HomeSharing />
				<HomeOverview />
				<Footer />
				<ScrollToTop />
			</main>
		</Container>
	)
}

export default Home
