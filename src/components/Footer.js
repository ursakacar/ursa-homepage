import React from 'react'
import config from '../../config'

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinksPersonal.map((social) => {
          const { icon, name, url } = social
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <p></p>
      <p>{config.headingQa}</p>
      <ul className="icons">
        {config.socialLinksQA.map((social) => {
          const { icon, name, url } = social
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <p></p>
      <p>{config.headingBlebet}</p>
      <ul className="icons">
        {config.socialLinksBlebet.map((social) => {
          const { icon, name, url } = social
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <p></p>
      <p>{config.headingRujsa}</p>
      <ul className="icons">
        {config.socialLinksRujsa.map((social) => {
          const { icon, name, url } = social
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
