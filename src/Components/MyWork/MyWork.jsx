import React, { useState } from 'react'
import '../../Components/MyWork/MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import new_work from '../../assets/New_work'

const MyWork = () => {

  const [isResumeVisible, setResumeVisible] = useState(false);

  const toggleResume = () => {
    setResumeVisible(!isResumeVisible);
  }
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt='' />
        })}
      </div>
      {isResumeVisible && (
  <div className="mywork-container">
  {new_work.map((work, index) => {
    return <img key={index} src={work.w_img} alt='' />
  })}
</div>
)}
      <div className="mywork-showmore" onClick={toggleResume}>{isResumeVisible ? 'X' : <>Show More <img src={arrow_icon} alt="Arrow" /></>}</div>
    </div>

    // <div className="mywork-showmore">
    //     <p>Show More</p>
    //     <img src={arrow_icon} alt="" />
    // </div>
    // </div>
  )
}

export default MyWork