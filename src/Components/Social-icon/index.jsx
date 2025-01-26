import React from "react";
import facebookBlueIcon from '../../assets/images/icons/facebook_blue.svg'
import facebookGreenIcon from '../../assets/images/icons/facebook_green.svg'
import instagramBlueIcon from '../../assets/images/icons/instagram_blue.svg'
import instagramGreenIcon from '../../assets/images/icons/instagram_green.svg'
import linkedinBlueIcon from '../../assets/images/icons/linkedIn_blue.svg'
import linkedinGreenIcon from '../../assets/images/icons/linkedIn_green.svg'
import styles from './styles.module.scss'

export const SocialIcon = ( {name, link} ) => {
  const icon = {
    facebookBlue: facebookBlueIcon,
    facebookGreen: facebookGreenIcon,
    instagramBlue: instagramBlueIcon,
    instagramGreen: instagramGreenIcon,
    linkedinBlue: linkedinBlueIcon,
    linkedinGreen: linkedinGreenIcon
  }
  return (
    <div className={styles.size}>
      <a href={link} target="_blank" rel="noreferrer"><img src={icon[name]} alt=""/></a>
    </div>
  )
}