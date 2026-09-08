# Sleepless Prompts (/docs/prompts)





An on-screen input prompt HUD for FiveM. Show keyboard and gamepad button icons with labels, update them while they are open, and place groups in named screen slots.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_prompts" />

## Features [#features]

* Keyboard and gamepad icons from a bundled button pack
* Live updates while a group is open
* Named slots (`bottom-center`, `top-right`, `middle-left`, and more) plus custom coordinates
* ox\_lib keybind tracking that follows player remaps
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
        { id = 'enter', key = 'E', gamepad = 'A', label = 'Enter', control = 38 },
        { id = 'lock', key = 'L', gamepad = 'X', label = 'Lock' },
        { id = 'trunk', key = 'G', gamepad = 'B', label = 'Trunk' },
        { id = 'engine', key = 'F', gamepad = 'Y', label = 'Engine', control = 23, holdTime = 1500 },
    },
})
```

The same call works through `exports.sleepless_prompts:show(...)`.

### Actions [#actions]

Same trigger options as Interact. One action runs on press, or when `holdTime` completes:

```lua
{ id = 'lock', key = 'L', control = 182, label = 'Lock', event = 'myresource:lockVehicle' }
{ id = 'engine', key = 'F', holdTime = 1500, label = 'Engine', serverEvent = 'myresource:toggleEngine' }
{ id = 'wave', key = 'G', control = 47, label = 'Wave', command = 'e wave' }
```

Priority: `onSelect`, `export`, `event`, `serverEvent`, `command`. See [Prompt Options](/docs/prompts/prompt-options#actions).

### Update while open [#update-while-open]

```lua
prompts.updatePrompt('vehicle', 'lock', { label = 'Unlock' })
prompts.setPosition('vehicle', 'top-right')
prompts.hide('vehicle')
```

### ox\_lib keybinds [#ox_lib-keybinds]

Pass the keybind `name` from `lib.addKeybind`. The keyboard icon tracks the live mapping and updates if the player remaps it in GTA settings.

```lua
lib.addKeybind({
    name = 'vehicle_enter',
    description = 'Enter vehicle',
    defaultKey = 'E',
    onPressed = function() end,
})

prompts.show('vehicle', {
    prompts = {
        { keybind = 'vehicle_enter', gamepad = 'A', label = 'Enter' },
    },
})
```

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
