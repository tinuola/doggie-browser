# Design System Component

One of the responsibilities of our Product Design Engineers is to maintain and expand the GumGum Design System which is used on all internal and external facing apps, tools, and products. The Design System is organized based on a concept called [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and CSS for our components uses [BEM Notation](http://getbem.com/introduction/). When building design system components, the developer must consider all the potential uses cases for that component and ensure they build flexible modifiers and variations meet these situations. [Here is an example of a single component with a wide array of combinable variants](http://ds.gumgum.com/stable/#gds-slab-nav) 

In this exercise you'll create a new component for the Design System. While the type of component you create is up to you, it should be at least at the molecular level of complexity. The component should be written in a responsive fashion, with modifier classes to cover a multitude of potential uses. Care should be taken to ensure the component can be displayed purely via CSS classes. JavaScript may be used, but only to demonstrate contextual class changes on elements within the component - it should not be leveraged to handle any sort of calculated inline style assignments.  

You can submit the app to us in any way you like. Suggestions include using a Github Repo, or a [Codesandbox](https://codesandbox.io) link.

### Key Requirements:
 - Written with HTML5 / CSS3 and minimal JavaScript
 - Utilizes a CSS Preprocessor
 - Leverages variables and mixins to establish a Single Source of Truth for commonly used styles
 - Written using [BEM Notation](http://getbem.com/introduction/)
 - Minimal nesting and descendent selectors - try to keep your rule-sets as flat as possible!
 - Fits within the existing aesthetic of the GumGum Design System

### Things to Consider:
 - How will your component display on desktop vs mobile?
 - What use cases exist for your component, and what sort of flexibility does it require to meet all of them?
 - How well does your component's aesthetics fit within the rest of the Design System?




