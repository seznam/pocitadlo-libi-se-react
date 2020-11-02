import * as PocitadloLibiSeCommon from '@seznam/pocitadlo-libi-se-common'
import { createElement, HTMLAttributes, memo, ReactElement } from 'react'

export * from '@seznam/pocitadlo-libi-se-common'

type Props =
  Omit<HTMLAttributes<HTMLElement>, 'children'> &
  PocitadloLibiSeCommon.ButtonComponentProperties &
  { placeholderHTML?: string }
type ElementProps =
  Omit<HTMLAttributes<HTMLElement>, 'children' | 'className'> &
  PocitadloLibiSeCommon.ButtonElementAttributes &
  { class?: string }

export default memo(function PocitadloLibiSe (props: Props): ReactElement {
  const { analytics, className, colors, placeholderHTML, ...otherProps } = props
  const elementProps: ElementProps = otherProps
  if (typeof className === 'string') {
    elementProps.class = className
  }
  if (analytics) {
    if (analytics.payload !== undefined) {
      try {
        const serializedPayload = JSON.stringify(analytics.payload)
        elementProps[PocitadloLibiSeCommon.ButtonElementAttributeName.ANALYTICS_HIT_PAYLOAD] = serializedPayload
      } catch {}
    }
    if (typeof analytics.position === 'string') {
      elementProps[PocitadloLibiSeCommon.ButtonElementAttributeName.ANALYTICS_HIT_BUTTON_POSITION] = analytics.position
    }
  }
  if (colors) {
    elementProps.style = elementProps.style || {}
    // We're targeting polyfill-free IE9+ environment when it comes to APIs, that's why we don't use Object.entries()
    for (const colorName of Object.keys(colors) as Array<keyof typeof colors>) {
      (elementProps.style as any)[`--${colorName}`] = colors[colorName]
    }
  }
  otherProps.suppressHydrationWarning = true
  otherProps.dangerouslySetInnerHTML = {
    __html: typeof placeholderHTML === 'string' ? placeholderHTML : ''
  }
  return createElement(
    PocitadloLibiSeCommon.BUTTON_ELEMENT_NAME,
    elementProps
  )
})
