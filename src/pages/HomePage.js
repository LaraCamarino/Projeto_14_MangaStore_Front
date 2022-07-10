import styled from 'styled-components';
import Navbar from '../components/sharedComponents/Navbar'
import MostPopular from '../components/homeComponents/MostPopular';
import GenreSelector from '../components/homeComponents/GenreSelector'
import AllMangas from '../components/homeComponents/AllMangas';

/*             
	<Reviews/>     
	<Contact/>
	
	Just an ideia 
*/

export default function HomePage() {
	return (
		<Page>
			<Navbar />
			<MostPopular/>  
			<GenreSelector/>   
			<AllMangas/>
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
`;