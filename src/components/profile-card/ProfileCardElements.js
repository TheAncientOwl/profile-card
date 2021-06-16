import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  text-align: center;
  border-radius: 0.8em;
  overflow: hidden;
  background: ${({ theme }) => theme.white};
  box-shadow: 0.12em 0.12em ${({ theme }) => theme.darkCyan};
  font-family: 'Kumbh Sans', cursive;
  padding-bottom: 1em;
`;

export const BackgroundImage = styled.img`
  z-index: -2;
`;

export const UserImage = styled.img`
  position: absolute;
  top: 6em;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.white};
  border: 0.25em solid ${({ theme }) => theme.white};
  border-radius: 50%;
`;

export const UserInfo = styled.section`
  margin-top: 5em;
`;

export const Username = styled.span`
  font-size: 1.15em;
  font-weight: bold;
  color: ${({ theme }) => theme.darkBlue};
`;

export const UserAge = styled.span`
  margin-left: 0.5em;
  color: ${({ theme }) => theme.darkGray};
`;

export const UserLocation = styled.div`
  color: ${({ theme }) => theme.darkGray};
`;

export const Separator = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.darkGray};
  margin: 2.2em 0;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
`;

export const Detail = styled.section``;

export const DetailTitle = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.darkBlue};
`;

export const DetailSubtitle = styled.div`
  text-transform: capitalize;
  font-size: 0.8em;
  color: ${({ theme }) => theme.darkGray};
`;
