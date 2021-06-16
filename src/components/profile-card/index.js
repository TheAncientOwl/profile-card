import React from 'react';
import {
  Card,
  BackgroundImage,
  UserImage,
  Username,
  UserAge,
  UserLocation,
  Separator,
  Details,
  Detail,
  DetailTitle,
  DetailSubtitle,
  UserInfo,
} from './ProfileCardElements';
import BackgroundImgSrc from '../../images/bg-pattern-card.svg';
import UserImgSrc from '../../images/image-victor.jpg';

export default function ProfileCard() {
  return (
    <Card>
      <BackgroundImage src={BackgroundImgSrc} alt={'bubbles'} />
      <UserImage src={UserImgSrc} alt={'Victor Crest'} />

      <UserInfo>
        <Username>Victor Crest</Username>
        <UserAge>26</UserAge>
        <UserLocation>London</UserLocation>
      </UserInfo>
      <Separator />
      <Details>
        {[
          { title: '80k', subtitle: 'followers' },
          { title: '803k', subtitle: 'likes' },
          { title: '1.4k', subtitle: 'photos' },
        ].map((item, index) => (
          <Detail key={index}>
            <DetailTitle>{item.title}</DetailTitle>
            <DetailSubtitle>{item.subtitle}</DetailSubtitle>
          </Detail>
        ))}
      </Details>
    </Card>
  );
}
