# Styling Guide

## Quick Start

This template uses **SCSS** with a well-organized structure for easy customization.

### File Structure

```
app/
├── style/
│   ├── variables/
│   │   ├── _color.scss        # Brand colors & dark mode setup
│   │   ├── _typography.scss   # Font sizes & weights
│   │   └── _spacing.scss      # Spacing units, borders, shadows
│   ├── mixins/
│   │   └── _mixins.scss       # Reusable style patterns
│   ├── placeholders/
│   │   ├── _base.scss         # Base element resets
│   │   ├── _buttons.scss      # Button base styles
│   │   ├── _components.scss   # Card, link, input styles
│   │   └── _img.scss          # Image styles
│   ├── fonts/
│   │   └── _fonts.scss        # Typography setup
│   └── style.scss             # Main stylesheet (imports all)
└── _components/
    └── **/*.scss              # Component-specific styles
```

## Customization Guide

### 1. Colors & Dark Mode

**File:** `app/style/variables/_color.scss`

```scss
// Change primary color
$highlight-green-color: #4d861f; // → Change to your brand color

// Light mode colors
$bg-color-light: #ffffff;
$text-color-light: #222222;

// Dark mode colors
$bg-color-dark: #1f1f1f;
$fonts-color-dark: #d9d9d9;
```

Dark mode automatically switches based on system preference using `light-dark()` CSS function.

### 2. Spacing System

**File:** `app/style/variables/_spacing.scss`

```scss
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
$spacing-2xl: 3rem;     // 48px
$spacing-3xl: 4rem;     // 64px
```

Use in components:
```scss
@use "../../style/variables/spacing" as space;

.component {
  padding: space.$spacing-md;
  margin-bottom: space.$spacing-lg;
  gap: space.$spacing-sm;
}
```

### 3. Typography

**File:** `app/style/variables/_typography.scss`

```scss
$h1-size: 1.5rem;   // Increase for larger headings
$h2-size: 1rem;
$p-size: 0.875rem;  // Body text size
```

### 4. Using Mixins

**File:** `app/style/mixins/_mixins.scss`

```scss
@use "../../style/mixins/mixins" as mix;

.my-component {
  @include mix.flex-center;        // Center with flexbox
  @include mix.flex-between;       // Space-between layout
  @include mix.responsive-grid;    // Auto responsive grid
  @include mix.container;          // Max-width container
  @include mix.transition;         // Smooth transitions
}
```

### 5. Using Placeholders

**File:** `app/style/placeholders/_components.scss`

```scss
@use "../../style/placeholders/components";

.my-button {
  @extend %button;           // Base button styles
  @extend %card;             // Card container
  @extend %link;             // Link styling
  @extend %input;            // Input field styling
}
```

### 6. Component Styling

**Example:** `app/_components/header/_header.scss`

```scss
@use "../../style/variables/color" as color;
@use "../../style/variables/spacing" as space;
@use "../../style/mixins/mixins" as mix;

.header {
  background: light-dark(color.$bg-color-light, color.$bg-color-dark);
  padding: space.$spacing-md 0;

  &__container {
    @include mix.container;
    @include mix.flex-between;
  }
}
```

**Key Pattern:**
1. Import variables, mixins, placeholders at the top
2. Use `light-dark()` for dark mode support
3. Use spacing variables instead of hardcoded values
4. Use mixins for common patterns

### 7. Adding Dark Mode to New Components

```scss
// Automatically supports dark mode
.component {
  background: light-dark(color.$bg-color-light, color.$bg-color-dark);
  color: light-dark(color.$text-color-light, color.$fonts-color-dark);
}

// Or use @media query for advanced dark mode styles
@media (prefers-color-scheme: dark) {
  .component {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }
}
```

## Quick Changes

### Change Theme Color

1. Open `app/style/variables/_color.scss`
2. Find `$highlight-green-color: #4d861f;`
3. Change to your brand color
4. All buttons and accent colors update automatically

### Change Button Style

1. Open `app/style/placeholders/_components.scss`
2. Edit the `%button` placeholder
3. All buttons inherit the new style

### Change Spacing

1. Open `app/style/variables/_spacing.scss`
2. Adjust spacing values (all units in `rem` for consistency)
3. All components using `space.$spacing-*` update automatically

## Testing

The template uses `light-dark()` CSS function which automatically switches based on system preferences:

- **Light mode**: When system is set to light
- **Dark mode**: When system is set to dark

To test dark mode in browser:
- Chrome DevTools → Settings (⚙️) → Rendering → Emulate CSS media feature preference

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Dark mode support via CSS `light-dark()` function
- ✅ Responsive design with mobile-first approach

## Tips

1. **Use variables** instead of hardcoding values
2. **Use mixins** for repeated patterns
3. **Use placeholders** for base component styles
4. **Import consistently** at the top of each file
5. **Keep margins/padding consistent** using spacing variables
6. **Test dark mode** regularly as you add new styles

---

Happy styling! 🎨
