import React from 'react'
import Info from "./../../../images/info-icon.svg"
import "./TopWidget.css"
import jh from '../../../images/jh.jpeg'
const TopWidgetSuggestion = ({ avatar, name, description }) =>{
  return(
    <div className="top-widget-suggestion">
      <img src={avatar} alt="avatar" width="55" height="55" />
      <div className="top-widget-suggestion-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="/">+ Follow</a>
      </div>
    </div>
  )
}

const TopWidget = () => {
  return (
    <div className='top-widget'>
      <div className="top-widget-header">
        <h2>Add to your feed</h2>
        <img src={Info} alt="info-logo" />
      </div>
      <div className="top-widget-body">
        <TopWidgetSuggestion 
          avatar={jh}
          name="Jhon Doe"
          description="IT Recruiter"
        />
        <TopWidgetSuggestion 
          avatar="https://img.freepik.com/photos-gratuite/sourire-confiant-femme-affaires-posant-bras-croises_1262-20950.jpg?w=2000"
          name="Emma Arley"
          description="Senior Full Stack Developer"
        />
        <TopWidgetSuggestion 
          avatar="https://antonyoptique.com/img/jfrey_11.jpg"
          name="William Martinez"
          description="LinkedIn Influencer | CEO"
        />
      </div>
    </div>
  )
}

export default TopWidget