import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import thumbnailRoar from '../images/thumbnail-roar.png'
import thumbnailWinebox from '../images/thumbnail-winebox.png'
import thumbnailPrivileged from '../images/thumbnail-privileged.png'
import thumbnailSignal from '../images/thumbnail-signal.jpg'
import thumbnailSkype from '../images/thumbnail-skype.png'
import thumbnailSlack from '../images/thumbnail-slack.png'

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Intro = styled.h1`
  font-size: 3.5em;
  line-height: 1.5em;
  width: 50%;
  text-shadow: 2px 2px #FF0000;
`

const StyledProjectCard = styled.div`
  position: relative;
  background-image: url("${props => props.thumbnail}");
  background-size: cover;
  height: 100%;
  min-height: 20em;
  width: 100%;
  color: #FFF;
  & * {
    transition: all 0.25s;
  }
`

const StyledCardCover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0,0,0,0.75);
  ${StyledProjectCard}:hover & {
    visibility: visible;
    opacity: 100;
  }
`

const StyledCardContent = styled.div`
  position: absolute;
  bottom: 0;
  visibility: hidden;
  opacity: 0;
  margin: 2em;
  :before {
    content:
  }
  ${StyledProjectCard}:hover & {
    visibility: visible;
    opacity: 100;
  }
`

const ProjectCard = (props) => (
  <Link to={props.path} style={{width: '50%'}}>
    <StyledProjectCard {...props}>
      <StyledCardCover>
        <StyledCardContent>
          {props.children}
        </StyledCardContent>
      </StyledCardCover>
    </StyledProjectCard>
  </Link>
)

const IndexPage = () => (
  <Layout>
    <ProjectsContainer>
      <Intro>experience designer and developer</Intro>
      <ProjectCard path="/roar/" thumbnail={thumbnailRoar}>
        <h2>ROAR</h2>
        <p>web app that allows the health authority to more easily manage new hires and their staff orientation sessions</p>
      </ProjectCard>
      <ProjectCard path="/winebox/" thumbnail={thumbnailWinebox}>
        <h2>Winebox</h2>
        <p>multi-platform application that elegantly assists in keeping track of a personal wine collection</p>
      </ProjectCard>
      <ProjectCard path="/privileged/" thumbnail={thumbnailPrivileged}>
        <h2>privileged.tech</h2>
        <p>a digital implementation of a privilege walk, aimed at reconciling privilege in the technology field</p>
      </ProjectCard>
      <ProjectCard path="/signal/" thumbnail={thumbnailSignal}>
        <h2>Signal — Quick Compose</h2>
        <p>redesign of message composition in Signal to reduce confusion and frustration</p>
      </ProjectCard>
      <ProjectCard path="/skype/" thumbnail={thumbnailSkype}>
        <h2>Skype — Usability Evaluation</h2>
        <p>usability evaluation of Skype, identifying issues and making recommendations</p>
      </ProjectCard>
      <ProjectCard path="/slack/" thumbnail={thumbnailSlack}>
        <h2>Slack — Usability Evaluation</h2>
        <p>usability evaluation of Slack, specifically regarding Jakob Nielsen's heuristics</p>
      </ProjectCard>
    </ProjectsContainer>
  </Layout>
)

export default IndexPage
