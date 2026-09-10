# Custom Themes (/docs/interact/custom-themes)



Each look is a CSS file. The Lua config only picks an id and an accent. Copy a built-in theme, rename the selector, then restyle the E key and option rows.

<div className="fd-steps">
  <div className="fd-step">
    ### Create the stylesheet [#create-the-stylesheet-step]

    Add `web/themes/<id>.css`. The id must be lowercase with no spaces (`ember`, `hospital`, `mytheme`). Every rule is scoped to that id:

    ```css
    [data-theme="ember"] {
      --primary: 232, 96, 48;
      --on-accent: 8, 11, 16;
      --text: 236, 241, 247;
    }
    ```

    Unknown ids are loaded from `web/themes/<id>.css` automatically. If the file is missing, the prompt falls back to `modern`.
  </div>

  <div className="fd-step">
    ### Point config at it [#point-config-at-it-step]

    In `client/modules/config.lua`:

    ```lua
    config.theme = 'ember'

    config.themeColors = {
        -- keep the built-ins, then add yours
        ember = { 232, 96, 48, 255 },
    }
    ```

    `themeColors` is the default HUD accent. Leave `config.themeColor = nil` so this color is not forced onto every other theme. The distant marker is white unless you set `config.IndicatorSprite.color`.
  </div>

  <div className="fd-step">
    ### Preview in a browser [#preview-in-a-browser-step]

    Serve the `web/` folder and open:

    ```
    http://127.0.0.1:8080/?theme=ember&compact=0
    ```

    | Query            | Effect                           |
    | ---------------- | -------------------------------- |
    | `theme=<id>`     | Load that theme                  |
    | `compact=0`      | Always show the full option list |
    | `state=open`     | Expand the compact prompt        |
    | `state=hold`     | Fill hold progress on the E key  |
    | `state=cooldown` | Show the cooldown hourglass      |

    The on-page dock is browser-only. In game, restart the resource after CSS or config changes.
  </div>
</div>

## Markup [#markup]

The HTML does not change. Themes only restyle these nodes:

```
#container
  #interact-container          E key
    #interact-progress         hold fill (height is set in JS)
    #interact-key              the letter, or an hourglass in cooldown
  #options-wrapper
    .interact-summary          compact "INTERACT" label
      .option-label
    #options-list
      .option-container        one row per option
        .animated-background   optional fill (legacy / retro)
        .option-icon
        .option-label
        .option-hold           only when the option has holdTime
```

### States [#states]

| Selector                         | When                                            |
| -------------------------------- | ----------------------------------------------- |
| `.option-container.highlighted`  | Current option (E / scroll). There is no hover. |
| `#interact-container.is-holding` | Player is holding E                             |
| `body.is-cooldown`               | Option cooldown; the key becomes an hourglass   |
| `#container.is-compact`          | Target has more than one option                 |
| `#container.is-compact.is-open`  | Compact list is expanded                        |

Do not add `:hover` or `:active` on option rows. They are never clicked.

## Tokens [#tokens]

Color tokens are **RGB triplets**, not `rgb()` values, so both `rgb(var(--primary))` and `rgba(var(--primary), 0.2)` work. Server `themeColors` / option `color` write `--primary` the same way.

| Token          | Example                            | Use                                          |
| -------------- | ---------------------------------- | -------------------------------------------- |
| `--primary`    | `49, 164, 252`                     | Highlight, hold fill, selected border        |
| `--on-accent`  | `8, 11, 16`                        | Text sitting on a filled `--primary` surface |
| `--text`       | `236, 241, 247`                    | Labels                                       |
| `--text-muted` | `156, 170, 186`                    | Idle icons, Hold chip                        |
| `--surface`    | `10, 14, 20`                       | Panel fill                                   |
| `--ink`        | `8, 11, 16`                        | Dark insets                                  |
| `--hairline`   | `220, 230, 242`                    | Borders, usually with `--hairline-a`         |
| `--panel-a`    | `0.92`                             | Panel opacity                                |
| `--font`       | `"DINPRO", "Segoe UI", sans-serif` | Typeface                                     |

`--on-accent` should contrast with `--primary`. Light accents need a dark `--on-accent`; dark accents need a light one. JS will recompute `--on-accent` when a global `themeColor` or per-option `color` is applied.

Root `font-size` is `1vh`, so `1rem` is 1% of the viewport height. Size the E key and rows in `rem`, not `px`. Offset the list from the key with `--options-x` on `#options-wrapper` (default `2.6rem`).

## What to style [#what-to-style]

Copy `web/themes/modern.css` or `web/themes/minimal.css` and rename `[data-theme="..."]`. At minimum, cover:

1. **`#interact-container` / `#interact-key`** — size, border, background, letter
2. **`#interact-progress`** — usually `left/right/bottom: 0; width: 100%; height: 0` with `background: rgb(var(--primary))`. JS only changes `height`.
3. **`.option-container`** — row chrome
4. **`.option-container.highlighted`** — selected row. Put `--primary` here, not on every idle row.
5. **`.option-icon`, `.option-label`, `.option-hold`** — idle and `.highlighted` colors
6. **`body.is-cooldown`** — dim the key so the hourglass reads as blocked

`.animated-background` is a full-row fill used by `legacy` and `retro`. Most themes hide it with `display: none`.

### Compact INTERACT [#compact-interact]

When compact, global CSS strips border, background, and shadow from `.interact-summary` and draws `INTERACT` as uppercase outlined type. Keep row decorations on `.option-container` only. Pseudos on `.interact-summary` will still show on the compact label.

To force compact label color (light themes need this so it stays white):

```css
[data-theme="ember"] #container.is-compact .interact-summary .option-label {
  color: #fff;
}
```

### Hold contrast [#hold-contrast]

While holding, the letter keeps its idle color and gets a `--on-accent` stroke so it stays readable as `--primary` fills the key. If the fill and the letter are the same color, that stroke is what keeps E visible.

## Starter [#starter]

```css
[data-theme="ember"] {
  --ink: 12, 8, 6;
  --surface: 22, 14, 12;
  --text: 255, 236, 228;
  --text-muted: 196, 150, 132;
  --hairline: 232, 96, 48;
  --hairline-a: 0.4;
  --primary: 232, 96, 48;
  --on-accent: 12, 8, 6;
  --font: "DINPRO", "Segoe UI", sans-serif;
  --panel-a: 0.94;
}

[data-theme="ember"] body {
  font-family: var(--font);
  color: rgb(var(--text));
}

[data-theme="ember"] .animated-background {
  display: none;
}

[data-theme="ember"] #options-list {
  gap: 0.4rem;
}

[data-theme="ember"] #interact-container {
  width: 3.4rem;
  height: 3.4rem;
  border: 0.12rem solid rgba(var(--hairline), 0.7);
  border-radius: 0.4rem;
  background: rgba(var(--surface), var(--panel-a));
}

[data-theme="ember"] #interact-progress {
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background: rgb(var(--primary));
}

[data-theme="ember"] #interact-key {
  width: 100%;
  height: 100%;
  color: rgb(var(--text));
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

[data-theme="ember"] #interact-container.is-holding {
  border-color: rgb(var(--primary));
}

[data-theme="ember"] body.is-cooldown #interact-container {
  opacity: 0.5;
}

[data-theme="ember"] .option-container,
[data-theme="ember"] .interact-summary {
  min-width: 17rem;
  height: 2.8rem;
  padding: 0 0.85rem 0 0.5rem;
  gap: 0.55rem;
  overflow: hidden;
  border: 0.12rem solid rgba(var(--hairline), var(--hairline-a));
  border-radius: 0.4rem;
  background: rgba(var(--surface), var(--panel-a));
  color: rgb(var(--text));
  font-family: var(--font);
}

[data-theme="ember"] .interact-summary {
  min-width: 0;
  width: max-content;
  padding-left: 0.9rem;
  padding-right: 1.2rem;
}

[data-theme="ember"] .option-container.highlighted {
  border-color: rgb(var(--primary));
  background: rgba(var(--primary), 0.2);
}

[data-theme="ember"] .option-icon {
  width: 1.6rem;
  font-size: 1.2rem;
  color: rgb(var(--text-muted));
}

[data-theme="ember"] .option-container.highlighted .option-icon,
[data-theme="ember"] .option-container.highlighted .option-label {
  color: rgb(var(--text));
}

[data-theme="ember"] .option-label {
  font-size: 1.25rem;
  font-weight: 700;
}

[data-theme="ember"] .option-hold {
  margin-left: auto;
  color: rgb(var(--text-muted));
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

[data-theme="ember"] .option-container.highlighted .option-hold {
  color: rgb(var(--text));
}

@media (prefers-reduced-transparency: reduce) {
  [data-theme="ember"] {
    --panel-a: 1;
  }
}
```

## DUI limits [#dui-limits]

This prompt is a world sprite, not a fullscreen NUI overlay.

* Keep `html, body` background transparent. `style.css` already does this.
* `backdrop-filter` cannot blur GTA. CEF only composites the DUI texture, so a blur with nothing behind it paints black. Use solid or slightly transparent `--surface` fills.
* Keep the layout compact. Large shadows and oversized rows read poorly in the world.
* Prefer `rem` over `px`. Animate `transform` and `opacity` only.

DINPRO is self-hosted in `web/fonts/`. To use another face, add an `@font-face` in your theme file (see `legacy.css`) and set `--font`.

<Callout type="info">
  Built-in themes live in `web/themes/`. `modern.css` is the default HUD. `cyber.css`, `vice.css`, and `noir.css` show how far you can push shape without changing the HTML.
</Callout>
