import type { ReactNode } from 'react'
import Icon, { type IconName } from './Icon'

type CardProps = {
  title: string
  subtitle: string
  icon: IconName
  children?: ReactNode
}

export default function Card({ title, subtitle, icon, children }: CardProps) {
  return (
    <article className="card">
      <div className="card-head">
        <Icon name={icon} className="card-icon" />
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      {children ? <div className="card-body">{children}</div> : null}
    </article>
  )
}
