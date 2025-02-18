import React from 'react'
import Style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IIcon {
  Icon: IconDefinition,
  Path: string
}

export default ({ Icon, Path }: IIcon) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={Path}>
      <FontAwesomeIcon icon={Icon} className={Style.Icon} />
    </a>
  )
}