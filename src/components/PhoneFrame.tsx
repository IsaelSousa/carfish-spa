import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  variant?: 'dark' | 'light'
}

export default function PhoneFrame({ children, variant = 'light' }: PhoneFrameProps) {
  return (
    <div className={`phone phone--${variant}`}>
      <div className="phone__notch" />
      <div className="phone__screen">{children}</div>
      <div className="phone__home" />
    </div>
  )
}
