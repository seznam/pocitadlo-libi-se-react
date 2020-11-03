# Počítadlo Líbí se React component

React component for easier integration of the Líbí se social button by
Seznam.cz.

## Usage

First make sure you load the client script in the browser:

```tsx
// Import the client script URL
import {BUTTON_SCRIPT_URL} from '@seznam/pocitadlo-libi-se-react'

// Add the following JSX snippet to the React component you use to render the
// <body> element or the <head> element:

<script src={BUTTON_SCRIPT_URL} async/>

// You may, optionally, also include the default styling provided by the
// '@seznam/pocitadlo-libi-se-common' package (a dependency of this package, it
// will be installed automatically). The styling will be used until the client
// script loads.
<link
  rel="stylesheet"
  href={
    // Replace the path below to the actual path on which the file will be
    // available in your project, or add the file to your styles bundle.
    'node_modules/@seznam/pocitadlo-libi-se-common/pocitadlolibise.css'
  }
/>
```

Now you may put a Líbí se button anywhere on your site (multiple vote buttons on
single page are supported):

```tsx
import PocitadloLibiSe from '@seznam/pocitadlo-libi-se-react'

// Put the following JSX snippet into any React component you want to render the
// social button:

<PocitadloLibiSe entity={entityUrl}/>

// Replace entityUrl with URL to the entity (article, video, ...) you want the
// votes counted on, e.g. "https://some-site.com/example-article".
```

There are multiple customization options at your disposal:

```tsx
import {
  ButtonColorVariable,
  ButtonLayout,
  ButtonSize,
} from '@seznam/pocitadlo-libi-se-react'

<PocitadloLibiSe
  entity={entityUrl}
  layout={ButtonLayout.BOX_COUNT}
  size={ButtonSize.LARGE}
  colors={{
    [ButtonColorVariable.PRIMARY_COLOR]: '#222',
    [ButtonColorVariable.BACKGROUND_COLOR]: 'transparent',
    [ButtonColorVariable.HOVER_COLOR]: '#878787',
    [ButtonColorVariable.COUNT_COLOR]: '#757575',
    [ButtonColorVariable.ACTIVE_COLOR]: '#de0000',
  }}
  analytics={{
    payload: analyticsPayload, // Any JSON-serializable data
    position: 'optional information about the location of the button on page',
  }}
  placeholderHTML={`
    <span class="placeholder">
      HTML content shown until the client script loads
    </span>
  `}
/>
```
