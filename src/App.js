import styled, { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import BackgroundImage from './images/bg-pattern-top.svg';
import ProfileCard from './components/profile-card';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Container>
          <ProfileCard />
          {false && <Image src={BackgroundImage} alt={'background'} />}
        </Container>
      </ThemeProvider>
    </>
  );
}
