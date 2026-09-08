# Prompt Options (/docs/prompts/prompt-options)



Each call to `show` takes a group table. Each item in `prompts` is a `PromptEntry`.

## Prompt group [#prompt-group]

| Property    | Type                                   | Default                  | Description                                 |
| ----------- | -------------------------------------- | ------------------------ | ------------------------------------------- |
| `id`        | `string`                               | required                 | Group id. `show('id', data)` also sets this |
| `position`  | `string \| table`                      | `config.defaultPosition` | Named slot or custom `{ x, y, origin? }`    |
| `offset`    | `{ x, y }`                             | `{ x = 0, y = 0 }`       | Extra offset in `rem`                       |
| `layout`    | `'row' \| 'column' \| 'auto'`          | `config.defaultLayout`   | Arrangement of prompts in the group         |
| `separator` | `'slash' \| 'line' \| 'dot' \| 'none'` | `config.separator`       | Divider between prompts                     |
| `order`     | `number`                               | `0`                      | CSS order when multiple groups share a slot |
| `prompts`   | `PromptEntry \| PromptEntry[]`         | required                 | One prompt or an array                      |

## Prompt entry [#prompt-entry]

A prompt needs a `label` and at least one of `key`, `keyboard`, `gamepad`, `icon`, or `keybind`.

| Property         | Type                  | Description                                                                                                                 |
| ---------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`             | `string?`             | Unique id within the group. Defaults to the key name                                                                        |
| `name`           | `string?`             | Alias for `id`                                                                                                              |
| `label`          | `string`              | Visible label                                                                                                               |
| `key`            | `string \| string[]?` | Keyboard and/or shared input name (`E`, `LMB`, `LT`)                                                                        |
| `keyboard`       | `string \| string[]?` | Keyboard-only override                                                                                                      |
| `gamepad`        | `string \| string[]?` | Gamepad-only override (Xbox layout)                                                                                         |
| `keybind`        | `string \| table?`    | ox\_lib keybind name, or the table from `lib.addKeybind`                                                                    |
| `icon`           | `string \| string[]?` | Raw image path. Skips icon lookup                                                                                           |
| `control`        | `number?`             | GTA control index. When set, presses are tracked and hooks fire                                                             |
| `disableControl` | `boolean?`            | Disable the GTA control while this prompt is shown                                                                          |
| `holdTime`       | `number?`             | Hold duration in ms. Shows the localized `hold` string before the button, fills a progress bar, and fires `onHold` / `held` |
| `cooldown`       | `number?`             | Ignore further presses for this many ms after press or hold                                                                 |
| `disabled`       | `boolean?`            | Dimmed, non-interactive                                                                                                     |
| `hidden`         | `boolean?`            | Omitted from the HUD                                                                                                        |
| `progress`       | `number?`             | `0` to `1` hold fill                                                                                                        |
| `onPressed`      | `function?`           | Hook when `control` is pressed                                                                                              |
| `onReleased`     | `function?`           | Hook when `control` is released                                                                                             |
| `onHold`         | `function?`           | Hook when `holdTime` completes                                                                                              |
| `onSelect`       | `function?`           | Action when the prompt fires (press, or hold complete)                                                                      |
| `export`         | `string?`             | Export on the registering resource                                                                                          |
| `event`          | `string?`             | Client event to trigger                                                                                                     |
| `serverEvent`    | `string?`             | Server event to trigger                                                                                                     |
| `command`        | `string?`             | Command to execute                                                                                                          |

```lua
{
    id = 'engine',
    key = 'F',
    gamepad = 'Y',
    label = 'Engine',
    control = 23,
    holdTime = 1500,
}
```

## Actions [#actions]

One action runs when the prompt fires, in this order:

1. `onSelect`
2. `export`
3. `event`
4. `serverEvent`
5. `command`

Press fires the action immediately. `holdTime` waits until the hold completes. `onPressed` / `onHold` / `onReleased` still run as hooks.

```lua
{
    id = 'lock',
    key = 'L',
    gamepad = 'X',
    label = 'Lock',
    control = 182,
    event = 'myresource:lockVehicle',
}

{
    id = 'engine',
    key = 'F',
    gamepad = 'Y',
    label = 'Engine',
    control = 23,
    holdTime = 1500,
    serverEvent = 'myresource:toggleEngine',
}

{
    id = 'emote',
    key = 'G',
    label = 'Wave',
    control = 47,
    command = 'e wave',
}
```

The callback or event receives:

| Property   | Type     | Description                    |
| ---------- | -------- | ------------------------------ |
| `id`       | `string` | Prompt id                      |
| `name`     | `string` | Same as `id`                   |
| `label`    | `string` | Visible label                  |
| `groupId`  | `string` | Group id                       |
| `resource` | `string` | Resource that showed the group |

`export` is called as `exports[resource][export](nil, data)` on the resource that called `show`.

<Callout type="info">
  `keybind` sets the keyboard icon from the live ox\_lib mapping. Combine it with `gamepad` so pad users still see a face or trigger icon.
</Callout>

## Positions [#positions]

Named slots:

`top-left`, `top-center`, `top-right`, `middle-left`, `center`, `middle-right`, `bottom-left`, `bottom-center`, `bottom-right`.

Aliases: `top`, `bottom`, `left`, `right`, `center-left`, `center-right`, `center-top`, `center-bottom`.

Custom:

```lua
prompts.setPosition('vehicle', { x = 82, y = 18, origin = 'top-right' })
```

`x` and `y` are percents of the screen. `origin` is the transform origin (defaults to `center`).

## Gamepad names [#gamepad-names]

Names follow Xbox layout. PlayStation icons remap automatically.

| Name                                       | Xbox               | PlayStation        |
| ------------------------------------------ | ------------------ | ------------------ |
| `a` / `cross`                              | A                  | Cross              |
| `b` / `circle`                             | B                  | Circle             |
| `x` / `square`                             | X                  | Square             |
| `y` / `triangle`                           | Y                  | Triangle           |
| `lt` / `l2`                                | LT                 | L2                 |
| `rt` / `r2`                                | RT                 | R2                 |
| `lb` / `l1`                                | LB                 | L1                 |
| `rb` / `r1`                                | RB                 | R1                 |
| `ls` / `rs`                                | Left / right stick | Left / right stick |
| `lsclick` / `l3`                           | LS click           | L3                 |
| `dpadup` `dpaddown` `dpadleft` `dpadright` | D-pad              | D-pad              |
| `start` / `options`                        | Menu               | Options            |
| `back` / `share`                           | View               | Share              |

Keyboard names include letters, `F1` to `F12`, `Shift`, `Ctrl`, `Alt`, `Enter`, `Space`, `LMB`, `RMB`, and similar aliases.

Arrays draw combo keys:

```lua
{ keyboard = { 'Ctrl', 'E' }, gamepad = 'A', label = 'Interact' }
```
