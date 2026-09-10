# Sleepless Prompts (/docs/prompts)





An on-screen input prompt HUD for FiveM. Show keyboard and gamepad button icons with labels, follow player remaps, update groups while they are open, and place them in named screen slots.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_prompts" />

## Features [#features]

* Keyboard and gamepad icons from a bundled button pack
* Set `control` or `keybind`. Icons are resolved from the live mapping
* GTA control icons follow remaps in Settings (keyboard and gamepad)
* FiveM / ox\_lib keybind icons follow remaps under Settings > Key Bindings > FiveM
* Live updates while a group is open
* Named slots (`bottom-center`, `top-right`, `middle-left`, and more) plus custom coordinates
* Auto Xbox vs DualSense / DualShock detection, or a locked mode
* Player command `/promptmode` to pick Auto, Keyboard, Xbox, or PlayStation
* Hold progress, press hooks, and per-prompt disable / hide
* Interact-style actions: `onSelect`, `export`, `event`, `serverEvent`, `command`
* Art styles for keyboard and gamepad
* The same visual themes as Interact (`modern`, `cyber`, `vice`, and more), plus custom CSS looks

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/communityox/ox_lib) (required)

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/Sleepless-Development/sleepless_prompts/releases) or clone the repository. The HUD is vanilla HTML, CSS, and JavaScript under `web/` and does not need a build step.
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_prompts` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`:

    ```bash
    ensure ox_lib
    ensure sleepless_prompts
    ```
  </div>

  <div className="fd-step">
    ### Configure the Resource [#configure-the-resource-step]

    Edit `client/modules/config.lua` for default slot, icon mode, styles, and theme. See the [Configuration](/docs/prompts/configuration) page for details.
  </div>
</div>

## Quick Start [#quick-start]

Other resources can call exports, or import the global:

```lua
client_script '@sleepless_prompts/init.lua'
```

### Show a prompt group [#show-a-prompt-group]

```lua
prompts.show('vehicle', {
    position = 'bottom-center',
    prompts = {
        { id = 'enter', label = 'Enter', control = 38 },
        { id = 'lock', label = 'Lock', control = 182 },
        { id = 'horn', label = 'Horn', control = 86 },
        { id = 'engine', label = 'Engine', control = 23, holdTime = 1500 },
    },
})
```

The same call works through `exports.sleepless_prompts:show(...)`.

### Actions [#actions]

Same trigger options as Interact. One action runs on press, or when `holdTime` completes:

```lua
{ id = 'lock', label = 'Lock', control = 182, event = 'myresource:lockVehicle' }
{ id = 'engine', label = 'Engine', control = 23, holdTime = 1500, serverEvent = 'myresource:toggleEngine' }
{ id = 'wave', label = 'Wave', control = 47, command = 'e wave' }
```

Priority: `onSelect`, `export`, `event`, `serverEvent`, `command`. See [Prompt Options](/docs/prompts/prompt-options#actions).

### Update while open [#update-while-open]

```lua
prompts.updatePrompt('vehicle', 'lock', { label = 'Unlock' })
prompts.setPosition('vehicle', 'top-right')
prompts.hide('vehicle')
```

### Live remapping [#live-remapping]

Icons update when the player remaps input. This applies to both:

* **GTA controls** (`control`): keyboard and gamepad glyphs come from `GetControlInstructionalButton`. Remap INPUT\_PICKUP from E to G, or move it to another pad button, and the open prompt follows.
* **FiveM / ox\_lib keybinds** (`keybind`): the keyboard icon comes from the live `RegisterKeyMapping` bind. Remap it under Settings > Key Bindings > FiveM and the open prompt follows.

`auto` mode also swaps keyboard vs gamepad icons when the last input device changes.

### GTA controls [#gta-controls]

```lua
{ id = 'enter', label = 'Enter', control = 38, disableControl = true }
```

`disableControl` adds that control to `lib.disableControls` while the prompt is shown.

### ox\_lib keybinds [#ox_lib-keybinds]

Pass the keybind `name` from `lib.addKeybind`, or the table it returns. `key` / `gamepad` are not required.

```lua
lib.addKeybind({
    name = 'vehicle_enter',
    description = 'Enter vehicle',
    defaultKey = 'E',
    onPressed = function() end,
})

prompts.show('vehicle', {
    prompts = {
        { keybind = 'vehicle_enter', label = 'Enter' },
    },
})
```

`prompts.getKeybindKey('vehicle_enter')` returns the current keyboard key.

<Callout type="info">
  Gamepad names use Xbox layout (A south, B east, X west, Y north). PlayStation faces remap from that. See [Prompt Options](/docs/prompts/prompt-options) for the full property list and [Client Exports](/docs/prompts/exports/Client) for the API.
</Callout>

## Icon mode [#icon-mode]

Players can run `/promptmode` to pick Auto, Keyboard, Xbox, or PlayStation. The choice is saved per client.

| Mode          | Behavior                                                         |
| ------------- | ---------------------------------------------------------------- |
| `auto`        | Follows last input device. Detects Xbox vs DualSense / DualShock |
| `keyboard`    | Always show keyboard / mouse icons                               |
| `xbox`        | Always show Xbox icons                                           |
| `playstation` | Always show DualSense icons                                      |

Steam Input or DS4Windows wrapping a DualSense as Xbox is treated as Xbox, which matches the buttons the player actually presses.

## Support [#support]

If you need help or have questions:

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/Sleepless-Development/sleepless_prompts/issues)
