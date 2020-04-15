import React from 'react';
import styled from 'styled-components';
import Section from '../../atomics/Section';
import Panel from './Panel';
import PanelHeader from '../../atomics/AboutUs/PanelHeader';
import PanelBody from '../../atomics/AboutUs/PanelBody';
import iconBalloon from '../../assets/images/icon/Balloon.png';
import iconPictureFrame from '../../assets/images/icon/PictureFrame.png';
import iconGear from '../../assets/images/icon/Gear.png';

const IconStyle = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 4px;
  float: left;
`;

const AboutUs: React.FC = () => {
  return (
    <Section id="aboutUs" className="flex justify-center items-center bg-fixed">
      <div>
        <p className="font-bold lg:text-5xl text-3xl text-center">
          We Are <span className="text-blue-700">Team IF</span>
        </p>
        <p className="font-bold text-3xl text-center">팀 소개</p>

        <div className="flex lg:flex-row flex-col justify-center items-center mt-16">
          <Panel>
            <PanelHeader>
              <IconStyle src={iconBalloon} alt="Balloon" />
              우리는 꿈을 꾸며
            </PanelHeader>
            <PanelBody>We make dreams</PanelBody>
          </Panel>

          <Panel>
            <PanelHeader>
              <IconStyle src={iconPictureFrame} alt="PictureFrame" />
              &nbsp;상상을 이루고
            </PanelHeader>
            <PanelBody>In one's imagination</PanelBody>
          </Panel>

          <Panel>
            <PanelHeader>
              <IconStyle src={iconGear} alt="Gear" />
              &nbsp;현실로 만듭니다.
            </PanelHeader>
            <PanelBody>Make it real.</PanelBody>
          </Panel>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
