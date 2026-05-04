import type { ReactNode } from 'react'

type CardProps = {
  title: string
  subtitle: string
  icon: string
  children?: ReactNode
}

export default function Card({ title, subtitle, icon, children }: CardProps) {
  return (
    <article className="card">
      <div className="card-head">
        <span className="card-icon" aria-hidden="true">{icon}</span>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      {children ? <div className="card-body">{children}</div> : null}
    </article>
  )
}
