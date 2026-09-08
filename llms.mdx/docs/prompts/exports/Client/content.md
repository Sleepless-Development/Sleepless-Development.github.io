# Client Exports (/docs/prompts/exports/Client)



All client-side exports for showing and updating prompt groups. You can also import the global:

```lua
client_script '@sleepless_prompts/init.lua'
```

Then call `prompts.show(...)` instead of `exports.sleepless_prompts:show(...)`.

Prompt table shapes are documented on [Prompt Options](/docs/prompts/prompt-options).

***

## show [#show]

Show or replace a prompt group. Returns the group id.

```lua
local id = exports.sleepless_prompts:show(id, data)
local id = exports.sleepless_prompts:show(data)
```

### Parameters [#parameters]

| Parameter | Type                        | Description                                        |
| --------- | --------------------------- | -------------------------------------------------- |
| `id`      | `string \| PromptGroupData` | Group id, or a full group table that includes `id` |
| `data`    | `PromptGroupData?`          | Group table when `id` is a string                  |

### Returns [#returns]

| Type     | Description  |
| -------- | ------------ |
| `string` | The group id |

### Example [#example]

```lua
exports.sleepless_prompts:show('vehicle', {
    position = 'bottom-center',
    prompts = {
        { id = 'enter', key = 'E', gamepad = 'A', label = 'Enter' },
        { id = 'lock', key = 'L', gamepad = 'X', label = 'Lock' },
        { id = 'trunk', key = 'G', gamepad = 'B', label = 'Trunk' },
        { id = 'engine', key = 'F', gamepad = 'Y', label = 'Engine', holdTime = 1500 },
    },
})
```

***

## update [#update]

Patch an existing group. Omitted fields stay as they are. Passing `prompts` replaces the whole list.

```lua
exports.sleepless_prompts:update(id, data)
```

### Example [#example-1]

```lua
exports.sleepless_prompts:update('vehicle', {
    position = 'middle-left',
    layout = 'column',
})
```

***

## updatePrompt [#updateprompt]

Patch a single prompt inside a group.

```lua
exports.sleepless_prompts:updatePrompt(groupId, promptId, patch)
```

### Example [#example-2]

```lua
exports.sleepless_prompts:updatePrompt('vehicle', 'lock', {
    label = 'Unlock',
    disabled = false,
})
```

***

## addPrompt [#addprompt]

Append a prompt to an open group. Returns the prompt id.

```lua
local promptId = exports.sleepless_prompts:addPrompt(groupId, entry)
```

### Example [#example-3]

```lua
exports.sleepless_prompts:addPrompt('vehicle', {
    key = 'H',
    gamepad = 'LB',
    label = 'Horn',
    control = 86,
})
```

***

## removePrompt [#removeprompt]

Remove a prompt from an open group.

```lua
exports.sleepless_prompts:removePrompt(groupId, promptId)
```

***

## setPosition [#setposition]

Move an open group.

```lua
exports.sleepless_prompts:setPosition(id, position, offset?)
```

### Parameters [#parameters-1]

| Parameter  | Type              | Description                       |
| ---------- | ----------------- | --------------------------------- |
| `id`       | `string`          | Group id                          |
| `position` | `string \| table` | Named slot or `{ x, y, origin? }` |
| `offset`   | `{ x, y }?`       | Extra offset in `rem`             |

### Example [#example-4]

```lua
exports.sleepless_prompts:setPosition('vehicle', 'top-right')
exports.sleepless_prompts:setPosition('vehicle', { x = 82, y = 18, origin = 'top-right' })
```

***

## hide [#hide]

Hide a group. Omit `id` to hide every group owned by the calling resource.

```lua
exports.sleepless_prompts:hide(id?)
```

***

## hideAll [#hideall]

Hide every group.

```lua
exports.sleepless_prompts:hideAll()
```

***

## isActive [#isactive]

`true` if the named group is open, or if any group is open when `id` is omitted.

```lua
local open = exports.sleepless_prompts:isActive(id?)
```

***

## get / getAll [#get--getall]

```lua
local group = exports.sleepless_prompts:get(id)
local groups = exports.sleepless_prompts:getAll()
```

***

## setMode / getMode [#setmode--getmode]

Lock or auto-detect which icons to show. Player picks from `/promptmode` are saved in KVP and override this on the next start.

```lua
exports.sleepless_prompts:setMode('auto')
exports.sleepless_prompts:setMode('keyboard')
exports.sleepless_prompts:setMode('xbox')
exports.sleepless_prompts:setMode('playstation')

local mode = exports.sleepless_prompts:getMode()
```

| Mode          | Behavior                                                         |
| ------------- | ---------------------------------------------------------------- |
| `auto`        | Follows last input device. Detects Xbox vs DualSense / DualShock |
| `keyboard`    | Always show keyboard / mouse icons                               |
| `xbox`        | Always show Xbox icons                                           |
| `playstation` | Always show DualSense icons                                      |

`setGamepad('auto' | 'xbox' | 'playstation')` is an alias for `setMode`.

***

## openModeMenu [#openmodemenu]

Opens the ox\_lib select dialog (same as `/promptmode`).

```lua
exports.sleepless_prompts:openModeMenu()
```

***

## getGamepad / getDevice [#getgamepad--getdevice]

```lua
local family = exports.sleepless_prompts:getGamepad() -- 'xbox' | 'playstation'
local device = exports.sleepless_prompts:getDevice() -- 'keyboard' | 'gamepad'
```

`getGamepad` never returns `'auto'`. It is the resolved family after detection.

***

## setStyle / getStyle [#setstyle--getstyle]

Change keyboard and gamepad art styles at runtime.

```lua
exports.sleepless_prompts:setStyle('dark')
exports.sleepless_prompts:setStyle('light')
exports.sleepless_prompts:setStyle('retro')
exports.sleepless_prompts:setStyle('white', 'alt2')
exports.sleepless_prompts:setStyle({ keyboard = 'vintage', gamepad = 'default' })

local keyboardStyle, gamepadStyle = exports.sleepless_prompts:getStyle()
```

Keyboard: `white`, `dark`, `alt`, `retro`, `vintage`.

Gamepad: `default`, `light`, `alt`, `alt2`, `retro`.

One string applies to the device that owns that style. `alt` and `retro` apply to both.

***

## getKeybindKey [#getkeybindkey]

Current keyboard key for an ox\_lib keybind name or the table from `lib.addKeybind`.

```lua
local key = exports.sleepless_prompts:getKeybindKey('vehicle_enter')
```

***

## setScale / setTheme / setColor [#setscale--settheme--setcolor]

```lua
exports.sleepless_prompts:setScale(1.1)

exports.sleepless_prompts:setTheme('cyber')
exports.sleepless_prompts:setTheme('modern', { 255, 64, 180, 255 })

exports.sleepless_prompts:setColor({ 232, 96, 48, 255 })
exports.sleepless_prompts:setColor(nil)
```

`setTheme` takes a look id that matches `web/themes/<id>.css`. Built-in: `modern`, `minimal`, `light`, `retro`, `cyber`, `vice`, `noir`, `industrial`, `fantasy`.

The optional second argument, and `setColor`, set the HUD accent as `{ r, g, b, a }` (0–255). `setColor(nil)` restores the current theme's color from `config.themeColors`.

See [Custom Themes](/docs/prompts/custom-themes).

***

## on [#on]

Subscribe to a prompt hook. Returns an unsubscribe function.

```lua
local remove = exports.sleepless_prompts:on('pressed', function(groupId, promptId, entry)
    if groupId == 'vehicle' and promptId == 'enter' then
        -- handle enter
    end
end)
```

| Event           | Arguments                  |
| --------------- | -------------------------- |
| `shown`         | `id, group`                |
| `hidden`        | `id?`                      |
| `updated`       | `id, group`                |
| `deviceChanged` | `device, gamepad`          |
| `pressed`       | `groupId, promptId, entry` |
| `released`      | `groupId, promptId, entry` |
| `held`          | `groupId, promptId, entry` |

The same names are also fired as net-local events: `sleepless_prompts:shown`, `sleepless_prompts:pressed`, and so on.

Hold prompts fill while the control is held, then fire `held` / `onHold`.
