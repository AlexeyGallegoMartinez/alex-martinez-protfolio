# Frontend Tutorial: Services Page Layout and Button Styling

This tutorial explains the frontend changes made to the portfolio site. It is written for a complete beginner, so it starts with the technology basics and then walks through the actual code.

The main changes were:

- Improved the Services page section so the middle message acts like a divider between sections.
- Added a soft orange glow behind that divider text.
- Balanced the process and outcomes cards so the layout feels more full.
- Created a clearer button system with neutral buttons, orange hover states, and orange call-to-action buttons.
- Updated the Home page "About me" button to be an orange primary call-to-action.

## 1. Technology Summary

This project is a frontend site built with these main tools:

### Next.js

Next.js is a React framework. React helps build pages from reusable pieces called components. Next.js adds routing, image optimization, server rendering, and project structure.

In this project, pages live inside the `app` directory.

For example:

```txt
app/[lng]/(default)/services/page.js
app/[lng]/(default)/page.js
```

The file `page.js` represents an actual page in the website.

### React Components

A React component is a function that returns UI.

Example:

```jsx
export default async function ServicesPage({ params }) {
  return (
    <>
      <Header />
      <Container>
        {/* Page content goes here */}
      </Container>
    </>
  );
}
```

This component renders the Services page.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework. Instead of writing a separate CSS file, you add small classes directly to your HTML or JSX.

Example:

```jsx
<p className="text-xl font-medium leading-9 text-zinc-700">
  Some text
</p>
```

This means:

- `text-xl`: make the text large.
- `font-medium`: use medium font weight.
- `leading-9`: set line height.
- `text-zinc-700`: use a dark gray text color.

### clsx

The project uses `clsx` in the shared button component. `clsx` helps combine CSS class strings cleanly.

Example:

```jsx
className = clsx(
  "inline-flex items-center",
  variantStyles[variant],
  className
);
```

This combines base button styles, variant styles, and any extra styles passed into the button.

## 2. High-Level Walkthrough

The Services page had a section with two cards:

- Left card: "The way I approach it"
- Right card: "What businesses get back"

Originally, the right card had extra paragraph text at the bottom:

```txt
The win is not a prettier dashboard...
```

That made the right card taller and made the left card feel like it had empty unused space. The paragraph was moved out of the right card and turned into a divider between the upper Services section and the two-card section.

The new structure is:

```txt
Upper Services section

Centered divider text with orange highlights and glow

Two-card section:
- Process card
- Outcomes card

Final CTA section
```

This creates better visual rhythm:

- The divider separates two sections.
- The text is centered and important.
- The two cards can now align more naturally.
- The orange glow adds atmosphere without adding a heavy box.

## 3. Services Page Divider

The divider lives in:

```txt
app/[lng]/(default)/services/page.js
```

Here is the key code:

```jsx
<section className="mt-20 sm:mt-24">
  <div className="relative mb-20 w-full px-2 text-center sm:mb-24 sm:px-8">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[64rem] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.3),_rgba(249,115,22,0.12)_32%,_transparent_72%)] blur-3xl"
    />
    <p className="relative mx-auto max-w-5xl py-14 text-xl font-medium leading-9 text-zinc-700 dark:text-zinc-200 sm:text-2xl sm:leading-10">
      The win is not a prettier dashboard. The win is a business that{" "}
      <span className="font-semibold text-orange-500">
        knows what is happening
      </span>{" "}
      without another meeting, another spreadsheet, or another person{" "}
      <span className="font-semibold text-orange-500">
        manually checking the same thing twice
      </span>
      .
    </p>
  </div>

  {/* Cards come after this */}
</section>
```

### What this does

The outer section controls spacing:

```jsx
<section className="mt-20 sm:mt-24">
```

- `mt-20`: adds top margin.
- `sm:mt-24`: adds a larger margin on small screens and up.

The divider wrapper controls positioning:

```jsx
<div className="relative mb-20 w-full px-2 text-center sm:mb-24 sm:px-8">
```

- `relative`: allows the orange glow to be positioned inside this wrapper.
- `mb-20`: adds space below the divider.
- `w-full`: makes it take the full available width.
- `text-center`: centers the text.

The orange glow is this element:

```jsx
<div
  aria-hidden="true"
  className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[64rem] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.3),_rgba(249,115,22,0.12)_32%,_transparent_72%)] blur-3xl"
/>
```

Important classes:

- `aria-hidden="true"`: tells screen readers to ignore this decorative element.
- `pointer-events-none`: makes sure it does not block clicks.
- `absolute`: lets it sit behind the text.
- `left-1/2 top-1/2`: starts positioning from the center.
- `-translate-x-1/2 -translate-y-1/2`: perfectly centers it.
- `h-[28rem] w-[64rem]`: makes the glow large and wide.
- `bg-[radial-gradient(...)]`: creates a custom orange radial gradient.
- `blur-3xl`: softens the glow.

The text itself uses `relative`:

```jsx
<p className="relative mx-auto max-w-5xl py-14 text-xl font-medium leading-9 text-zinc-700 dark:text-zinc-200 sm:text-2xl sm:leading-10">
```

That is important because it keeps the text visually above the glow.

### Why the glow was changed

At one point, the wrapper used:

```jsx
overflow-hidden
```

That caused the glow to look cut off. The fix was to remove `overflow-hidden` so the glow could bleed freely outside the wrapper.

## 4. Highlighting Keywords

Instead of putting the whole divider in an orange box, only the key phrases were highlighted:

```jsx
<span className="font-semibold text-orange-500">
  knows what is happening
</span>
```

and:

```jsx
<span className="font-semibold text-orange-500">
  manually checking the same thing twice
</span>
```

This is better because the sentence stays clean and readable, while the most important ideas stand out.

## 5. Process Card Layout

The left card is the process card:

```jsx
<div className="flex min-h-[32rem] flex-col rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-10">
  <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
    {copy.services.processTitle}
  </h2>
  <ol className="mt-10 flex flex-1 flex-col justify-between gap-10">
    {copy.services.process.map((step, index) => (
      <li key={step} className="relative flex gap-5">
        {/* Step number and text */}
      </li>
    ))}
  </ol>
</div>
```

The important class is:

```jsx
justify-between
```

This spreads the process steps vertically inside the available space. That helps the left card feel less empty.

The card also uses:

```jsx
min-h-[32rem]
```

This gives both cards a consistent minimum height.

## 6. Outcomes Card Layout

The right card starts with one featured outcome, then shows the rest in a grid.

At the top of the component, the outcomes are split like this:

```jsx
const [featuredOutcome, ...supportingOutcomes] = copy.services.outcomes;
```

This means:

- `featuredOutcome` gets the first item.
- `supportingOutcomes` gets the remaining items.

Then the featured outcome is rendered wider:

```jsx
{featuredOutcome ? (
  <div
    key={featuredOutcome}
    className="min-h-36 rounded-2xl border border-orange-400/30 bg-orange-50 p-5 shadow-lg shadow-orange-500/5 dark:border-orange-400/25 dark:bg-orange-500/10 sm:col-span-2"
  >
    <span className="text-2xl font-semibold text-orange-500">
      +
    </span>
    <p className="mt-4 max-w-xl text-lg font-medium leading-8 text-zinc-800 dark:text-zinc-100">
      {featuredOutcome}
    </p>
  </div>
) : null}
```

The key class is:

```jsx
sm:col-span-2
```

This makes the featured outcome span both columns on larger screens.

Then the remaining outcomes are rendered normally:

```jsx
{supportingOutcomes.map((outcome) => (
  <div
    key={outcome}
    className="min-h-32 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-5 dark:border-zinc-700/60 dark:bg-zinc-950/60"
  >
    <span className="text-2xl font-semibold text-orange-500">
      +
    </span>
    <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
      {outcome}
    </p>
  </div>
))}
```

This creates a more balanced layout than having five equal cards with one empty grid space.

## 7. Button System

The shared button component lives here:

```txt
components/ui/button.jsx
```

It defines button styles in one place:

```jsx
const variantStyles = {
  primary:
    "bg-zinc-800 font-semibold text-zinc-100 shadow-sm shadow-zinc-900/10 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/20 active:bg-orange-600 active:text-white/80 dark:bg-zinc-700 dark:hover:bg-orange-500 dark:hover:text-white dark:active:bg-orange-600 dark:active:text-white/80",
  secondary:
    "bg-zinc-50 font-medium text-zinc-900 shadow-sm shadow-zinc-900/5 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/20 active:bg-orange-600 active:text-white/80 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-orange-500 dark:hover:text-white dark:active:bg-orange-600 dark:active:text-white/80",
  accent:
    "bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-400 hover:text-white hover:shadow-orange-500/30 active:bg-orange-600 active:text-white/80",
};
```

There are three variants:

### primary

Starts neutral and dark. On hover, it turns orange.

Use this for normal important actions.

### secondary

Starts lighter and quieter. On hover, it also turns orange.

Use this for lower-priority actions.

### accent

Starts orange immediately. On hover, it becomes brighter.

Use this when the button needs to call attention right away.

## 8. How the Button Component Works

Here is the component:

```jsx
export function Button({ variant = "primary", download, className, ...props }) {
  className = clsx(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} download={download} />
  );
}
```

This component can render either:

- a normal `<button>`
- a Next.js `<Link>`

If `href` exists, it renders a link:

```jsx
<Button href="/en/about">About me</Button>
```

If `href` does not exist, it renders a button:

```jsx
<Button type="submit">Join</Button>
```

This makes the same component useful for navigation and form actions.

## 9. Home Page "About me" Button

The Home page button was changed to use the new `accent` variant:

```jsx
<Button href={`/${lng}/about`} variant="accent">
  {copy.home.ctas.about}
</Button>
```

This means the "About me" button starts orange because it is the main action on the Home page.

The "Projects" button stays secondary:

```jsx
<Button href={`/${lng}/projects`} variant="secondary">
  {copy.home.ctas.projects}
</Button>
```

This creates a clear visual hierarchy:

- Main action: orange.
- Secondary action: neutral until hover.

## 10. Services CTA Buttons

The smaller Services CTA uses the normal button style:

```jsx
<Button
  href={`/${lng}/contact`}
  className="shrink-0 px-5 py-3"
>
  Contact me
</Button>
```

It starts neutral and turns orange on hover. This keeps it from feeling too loud inside the card.

The final Services CTA uses the `accent` variant:

```jsx
<Button
  href={`/${lng}/contact`}
  variant="accent"
>
  {copy.services.ctaLabel}
</Button>
```

This button is supposed to be more visible because it is the final call-to-action section.

## 11. Chat Button Updates

The Digital Twin chat has custom buttons that do not use the shared `Button` component.

The send button now starts neutral and turns orange on hover:

```jsx
<button
  type="submit"
  disabled={!input.trim() || isSending}
  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-zinc-50 transition hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-700 dark:hover:bg-orange-500"
  aria-label="Send message"
>
  <SendIcon className="h-5 w-5 stroke-current" />
</button>
```

The floating launcher starts orange because it needs to be visible:

```jsx
<button
  type="button"
  className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/25 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/35 dark:shadow-black/30 dark:hover:bg-orange-400"
>
  {/* Icon */}
</button>
```

This follows the same design rule:

- Quiet controls start neutral.
- Important controls start orange.

## 12. Beginner Concepts Used in This Code

### Conditional Rendering

This code only renders the featured outcome if it exists:

```jsx
{featuredOutcome ? (
  <div>{featuredOutcome}</div>
) : null}
```

This means: "If `featuredOutcome` has a value, show this block. Otherwise, show nothing."

### Mapping Arrays

This code turns a list of outcomes into UI cards:

```jsx
{supportingOutcomes.map((outcome) => (
  <div key={outcome}>
    {outcome}
  </div>
))}
```

`map` is a JavaScript method that loops over an array and returns something new for each item.

### Responsive Classes

Tailwind uses prefixes like `sm:` for responsive design:

```jsx
className="text-xl sm:text-2xl"
```

This means:

- Default: `text-xl`
- On small screens and larger: `text-2xl`

### Dark Mode Classes

Classes with `dark:` apply in dark mode:

```jsx
className="text-zinc-700 dark:text-zinc-200"
```

This means:

- Light mode: dark gray text.
- Dark mode: light gray text.

## 13. Design Reasoning

The goal was not just to make things orange. The goal was to create a clearer visual hierarchy.

Good UI usually answers these questions:

- What should I read first?
- What should I click first?
- Which things are related?
- Where does one section end and the next begin?

The divider text now acts as a transition between sections.

The orange highlights tell the reader which ideas matter most.

The button variants create hierarchy:

- Orange first: primary call-to-action.
- Neutral first: normal or secondary action.
- Orange on hover: consistent interactive feedback.

## 14. Detailed Code Review

### What is working well

The Services page now has a better section structure. The business outcome message is no longer trapped inside the right card. It can stand on its own and separate the top content from the process/outcomes cards.

The button system is also stronger because the orange behavior is centralized in `components/ui/button.jsx`. This avoids repeating one-off button styles across many pages.

### Important implementation detail

Removing `overflow-hidden` from the divider wrapper was important:

```jsx
<div className="relative mb-20 w-full px-2 text-center sm:mb-24 sm:px-8">
```

If this wrapper had `overflow-hidden`, the glow would be clipped and would look like it had an invisible rectangular boundary.

### Potential risk

The radial gradient is written as a long Tailwind arbitrary value:

```jsx
bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.3),_rgba(249,115,22,0.12)_32%,_transparent_72%)]
```

This works, but it is harder for beginners to read. If many sections use this kind of glow, it may be worth extracting it into a reusable component.

## 15. Five Suggestions for Future Improvement

1. Create a reusable `Glow` component.

   The orange radial glow appears in several places. A component like `<Glow />` would make the code easier to reuse and adjust.

2. Add a `size` prop to the `Button` component.

   Right now, button size is adjusted with custom classes like `px-5 py-3`. A `size="lg"` prop would make this more consistent.

3. Add named button variants for clearer intent.

   The current variants are `primary`, `secondary`, and `accent`. Future variants like `ghost` or `danger` could help if the site grows.

4. Move repeated Services card patterns into smaller components.

   The process steps and outcome cards could become components like `ProcessCard`, `OutcomeCard`, and `FeaturedOutcomeCard`.

5. Add visual regression testing or screenshots.

   Since many of these changes are visual, automated screenshots could help catch spacing, clipping, and hover-state problems before they reach production.

