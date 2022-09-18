import React from 'react'
import './About.css'
import {useStateContext} from '../../Context/StateContext';
import P_1 from '../../Assets/Mask group.png'
import P_2 from '../../Assets/Mask group-1.png'
import P_3 from '../../Assets/Mask group-2.png'

  import P_4 from '../../Assets/Mask group-3.png'

const About = () => {

  const {isBlur} = useStateContext();

  return (
    <>
    <div id="about" className={isBlur ? "blur " : ""}>
      <div className="about_header">
        <h1>About</h1>
      </div>
      <div className="about_desc">
     <p> Equispaze aims to destroy the social barriers rampant in our society by giving people the ability to share
their employment details such as wages and perks and give feedback anonymously. They can assign
themselves tags based on age, gender, race, caste, religion, region, sexual preferences, and many other
factors giving us the ability to filter and present the data in an appealing way curated for each user. This
allows them to compare salary trends within or with other workplaces, and communities around the globe</p>
      </div>
      <div className="about_header_2">
        <h1>Our Team</h1>
      </div>
      <div className="team_desc">
        <div className="team_img">
          <img src={P_1} alt="" />
          <h3>Tarun Pratap</h3>
          <h4>Backend Dev</h4>
        </div>
        <div className="team_img">
          <img src={P_2} alt="" />
          <h3>Vanshvir Chauhan</h3>
          <h4>Frontend Dev</h4>
        </div>
        <div className="team_img">
          <img src={P_3} alt="" />
          <h3>Divyam Chadha</h3>
          <h4>Team Lead</h4>
        </div>
        <div className="team_img">
          <img src={P_4} alt="" />
          <h3>Naman Katariya</h3>
          <h4>UI Designer</h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default About