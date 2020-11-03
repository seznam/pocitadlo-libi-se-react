import * as PocitadloLibiSeCommon from '@seznam/pocitadlo-libi-se-common'
import { createElement, HTMLAttributes, ReactElement } from 'react'

export * from '@seznam/pocitadlo-libi-se-common'

type Props =
  Omit<HTMLAttributes<HTMLElement>, 'children'> &
  PocitadloLibiSeCommon.ButtonComponentProperties &
  { placeholderHTML?: string }
type ElementProps =
  Omit<HTMLAttributes<HTMLElement>, 'children' | 'className'> &
  PocitadloLibiSeCommon.ButtonElementAttributes &
  { class?: string }

export default function PocitadloLibiSe (props: Props): ReactElement {
  const { className, colors, placeholderHTML, ...otherProps } = props
  const elementProps: ElementProps = PocitadloLibiSeCommon.createElementAttributes(otherProps)
  if (typeof className === 'string') {
    elementProps.class = className
  }
  if (colors) {
    elementProps.style = Object.assign(elementProps.style || {}, colors)
  }
  elementProps.suppressHydrationWarning = true
  elementProps.dangerouslySetInnerHTML = {
    __html: typeof placeholderHTML === 'string' ? placeholderHTML : ''
  }
  return createElement(
    PocitadloLibiSeCommon.BUTTON_ELEMENT_NAME,
    elementProps
  )
}
