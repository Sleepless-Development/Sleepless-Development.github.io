# Configuration (/docs/interact/configuration)



The configuration file is located at `client/modules/config.lua`. This file controls the world prompt, visual theme, compact menu, and keybinds.

## General Settings [#general-settings]

```lua
local config = {}

-- Maximum distance the indicator sprite renders.
config.maxInteractDistance = 5.0

-- Maximum indicator sprites drawn at once.
config.maxIndicators = 8

-- Only open the prompt when looking at the target.
config.requireLookAt = true

-- How close to the reticle the target must be.
config.lookRadius = 0.08

-- Place unoffset entity options at the model center.
config.autoCenter = true

-- Hide interacts the player cannot see.
config.requireLos = true

-- What blocks line of sight. 1 world, 2 vehicles, 4 peds, 16 objects.
config.losFlags = 17

-- How far collision in front of an ATM can be and still count as visible.
config.losShellDepth = 2.0

-- Hide the indicator when an interact type has no valid options.
config.hideWhenEmpty = {
    globalPeds = true,
    globalVehicles = true,
    globalObjects = true,
    globalPlayers = true,
    models = false,
    entities = false,
    localEntities = false,
    coords = false,
}

-- Size of the world prompt.
config.duiScale = 0.12

-- Maximum size of the prompt texture.
config.duiResolution = 1024

-- Prompt theme.
config.theme = 'modern'

-- Accent color for each theme.
config.themeColors = {
    legacy = { 28, 100, 184, 200 },
    modern = { 49, 164, 252, 255 },
    minimal = { 168, 186, 204, 255 },
    light = { 37, 99, 235, 255 },
    retro = { 255, 176, 32, 255 },
    cyber = { 0, 229, 255, 255 },
    vice = { 255, 64, 180, 255 },
    noir = { 240, 240, 236, 255 },
    industrial = { 212, 168, 48, 255 },
    fantasy = { 212, 175, 110, 255 },
}

-- Accent color used for every theme. Nil uses the theme color.
config.themeColor = nil

-- Show one Interact row until the menu is opened.
config.compactOptions = true

-- How long before a compact menu closes.
config.compactIdleMs = 2500

-- Default interact key.
config.defaultInteractKey = 'E'

-- Distant indicator sprite.
config.IndicatorSprite = {
    dict = 'slp_ind',
    txt = 'radio',
    file = 'web/indicator.png',
    rotation = 0.0,
    color = { 255, 255, 255 },
    scale = 0.016,
}

-- Dot drawn at the center of the screen.
config.CenterDot = {
    enabled = true,
    dict = 'mpcarhud',
    txt = 'leaderboard_car_colour_icon_singlecolour',
    color = { 255, 255, 255, 255 },
    scale = 0.002,
    x = 0.5,
    y = 0.5,
}

-- Use a key to show and hide interacts.
config.useShowKeyBind = false

-- Default key for showing interacts.
config.defaultShowKeyBind = 'LMENU'

-- Hold or toggle the show key.
config.showKeyBindBehavior = 'toggle'
```

## Options Explained [#options-explained]

| Option                | Type              | Default                        | Description                                                                                                                                                                                                                                                                                                     |
| --------------------- | ----------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxInteractDistance` | `number`          | `5.0`                          | Maximum distance at which interact indicator sprites are rendered. Keep low for performance.                                                                                                                                                                                                                    |
| `maxIndicators`       | `number`          | `8`                            | Max distant marker sprites drawn per frame. The active prompt is not counted. Raise it in busy areas if dots vanish when many targets are nearby.                                                                                                                                                               |
| `requireLookAt`       | `boolean`         | `true`                         | If true, the prompt only opens when the target is inside `lookRadius` of the reticle. If false, the closest valid nearby interact opens without aiming.                                                                                                                                                         |
| `lookRadius`          | `number`          | `0.08`                         | How close to screen center a target must be to open the prompt. Units are a fraction of screen height. Raise it to aim looser. Ignored when `requireLookAt` is false.                                                                                                                                           |
| `autoCenter`          | `boolean`         | `true`                         | If true, entity options without `offset`, `offsetAbsolute`, or `bones` are placed at the model bounding-box center instead of the entity origin.                                                                                                                                                                |
| `requireLos`          | `boolean`         | `true`                         | Hide interacts the player cannot see.                                                                                                                                                                                                                                                                           |
| `losFlags`            | `number`          | `17`                           | What blocks line of sight. `1` world, `2` vehicles, `4` peds, `16` objects.                                                                                                                                                                                                                                     |
| `losShellDepth`       | `number`          | `2.0`                          | How far collision in front of an ATM can be and still count as visible.                                                                                                                                                                                                                                         |
| `hideWhenEmpty`       | `table`           | globals `true`, others `false` | Per interact type: hide the distant marker when every option on that target is currently invalid (`canInteract`, distance, groups, items, in-vehicle). Globals default to hide so nearby peds/vehicles/objects do not spam sprites. Models, entities, and coords keep the marker unless you set them to `true`. |
| `duiScale`            | `number`          | `0.12`                         | World size of the prompt sprite. The prompt fills the DUI texture, so this is the on-screen size of the prompt itself. Raise it to make the prompt larger in the world.                                                                                                                                         |
| `duiResolution`       | `number`          | `2048`                         | Cap on the DUI texture long edge. The texture is sized to 2x the on-screen sprite so type stays sharp. This only clamps very large resolutions.                                                                                                                                                                 |
| `theme`               | `string`          | `'modern'`                     | Visual look of the world prompt. Must match a file in `web/themes/<id>.css`.                                                                                                                                                                                                                                    |
| `themeColors`         | `table`           | see above                      | Per-theme RGBA accent `{ r, g, b, a }` (0–255). Drives the HUD highlight.                                                                                                                                                                                                                                       |
| `themeColor`          | `number[] \| nil` | `nil`                          | Optional global accent override. When set, every theme uses this color instead of `themeColors`.                                                                                                                                                                                                                |
| `compactOptions`      | `boolean`         | `true`                         | Compact multi-option prompt. See [Compact prompt](#compact-prompt).                                                                                                                                                                                                                                             |
| `compactIdleMs`       | `number`          | `2500`                         | Idle time in milliseconds before a compact list collapses. Minimum `500`.                                                                                                                                                                                                                                       |
| `defaultInteractKey`  | `string`          | `'E'`                          | Default mapping for the interact action. Players can rebind it in GTA Settings; the prompt shows the live key.                                                                                                                                                                                                  |
| `IndicatorSprite`     | `table`           | radio PNG, white               | Distant marker. `file` is a PNG in this resource. `color` tints it (`{ 255, 255, 255 }` stays white). `scale` is world size. Omit `file` and set `dict` / `txt` to use a GTA texture instead.                                                                                                                   |
| `CenterDot`           | `table`           | `mpcarhud` colour icon         | Screen-center circle while at least one usable interact is nearby. Set `enabled` to `false` to hide it. `color` tints the sprite. `scale` is screen size, `x` / `y` are 0–1 screen position. Optional `file` loads a PNG instead of `dict` / `txt`.                                                             |
| `useShowKeyBind`      | `boolean`         | `false`                        | Whether a keybind is required to show/hide interactions.                                                                                                                                                                                                                                                        |
| `defaultShowKeyBind`  | `string`          | `'LMENU'`                      | The default key mapping for toggling interaction visibility.                                                                                                                                                                                                                                                    |
| `showKeyBindBehavior` | `string`          | `'toggle'`                     | `"hold"` requires holding the key; `"toggle"` switches on/off per press.                                                                                                                                                                                                                                        |

<Callout type="info">
  The `maxInteractDistance` directly affects performance. A lower value means fewer interactions are checked and rendered each frame.
</Callout>

<Callout type="info">
  Set `hideWhenEmpty.models = true` if model targets should lose their marker when `canInteract` returns false. An option can set `hideWhenEmpty = true` or `false` to override the type default. The marker only hides when every option on the target wants to hide.
</Callout>

<Callout type="info">
  Interact is registered as a FiveM keybind (`interact_action`). Players rebind it in GTA Settings → Key Bindings → FiveM. The prompt reads the live mapping, so the keycap updates after they leave the pause menu.
</Callout>

## Themes [#themes]

`config.theme` selects the prompt skin. Each built-in look has its own accent in `config.themeColors`. Leave `config.themeColor` as `nil` unless you want one color on every theme.

| Id           | Description                              |
| ------------ | ---------------------------------------- |
| `legacy`     | Original sleepless\_interact prompt      |
| `modern`     | Night HUD with frost panels              |
| `minimal`    | Quiet hairline frames                    |
| `light`      | Light panels, dark type                  |
| `retro`      | CRT amber with scanlines                 |
| `cyber`      | Angular HUD with a clipped corner        |
| `vice`       | Magenta-to-cyan neon rim                 |
| `noir`       | Circular iris key, letterbox title cards |
| `industrial` | Riveted plates, hazard stripe on select  |
| `fantasy`    | Manuscript corner brackets               |

An option's `color` field still overrides the accent for that row only. See [Interact Options](/docs/interact/interact-options).

To add your own look, see [Custom Themes](/docs/interact/custom-themes).

## Compact prompt [#compact-prompt]

When `compactOptions` is `true` (the default), a target with **more than one option** starts as a single `INTERACT` label.

* Press E once to open the list.
* Press E again to select the highlighted option. Hold E for options with `holdTime`.
* Scroll to move the highlight. The list stays still; the highlight moves.
* After a selection, or after `compactIdleMs` with no activity, the list collapses back to `INTERACT`.
* A hold in progress will not collapse.

Targets with a single option always show that option. Set `compactOptions` to `false` to always show the full list.

## Locales [#locales]

Compact prompt copy uses [ox\_lib locales](https://coxdocs.dev/ox_lib#usage). English ships in `locales/en.json`. Add another file (for example `locales/fr.json`) to translate it; ox\_lib merges that over English using the player's language.

```json
{
  "interact": "Interact",
  "interact_enabled": "Enabled",
  "interact_disabled": "Disabled"
}
```

| Key                 | Use                                                            |
| ------------------- | -------------------------------------------------------------- |
| `interact`          | Compact prompt label, keybind name, and notify title           |
| `interact_enabled`  | Notify when the show-interactions keybind turns the prompt on  |
| `interact_disabled` | Notify when the show-interactions keybind turns the prompt off |

The compact label is drawn in uppercase by the HUD, so store sentence case in the locale file (`Interact`, not `INTERACT`).

<Callout type="info">
  For details on how to define interaction options (the `Option` type used in exports), see the [Interact Options](/docs/interact/interact-options) reference page.
</Callout>
