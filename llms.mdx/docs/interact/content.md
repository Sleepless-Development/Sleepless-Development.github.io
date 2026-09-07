# Sleepless Interact (/docs/interact)





A 3D DUI interaction library for interacting with various entities and points in the world. Provides a modern, performant alternative to traditional targeting systems with full ox\_target API compatibility.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_interact" />

## Features [#features]

* 🎯 **3D DUI Rendering** - Beautiful interaction indicators rendered in 3D world space
* 🔄 **ox\_target Compatibility** - Full drop-in support for ox\_target exports
* 📍 **Multiple Target Types** - Coordinates, entities, models, and global types (objects, peds, players, vehicles)
* 🎨 **Visual themes** - Ten built-in looks, per-theme accents, or one global color override
* ⌨️ **Compact prompt** - Multi-option targets show Interact until E is pressed
* ⚡ **Performance Optimized** - Distance-based culling with configurable render distance
* 🚗 **Vehicle Support** - Options can be configured to work inside vehicles
* ⏱️ **Hold Actions** - Support for press-and-hold interactions with configurable durations
* 🧊 **Cooldown System** - Prevent interaction spam with per-option cooldowns
* 🔁 **Active Callbacks** - `onActive`, `onInactive`, and `whileActive` callbacks for advanced use cases

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/overextended/ox_lib) (required)

## ox\_target Compatibility [#ox_target-compatibility]

Sleepless Interact fully supports the ox\_target API. If you enable the ox\_target bridge, the resource will handle all ox\_target exports, allowing you to use it as a drop-in replacement without modifying other resources.

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/Sleepless-Development/sleepless_interact/releases) or clone the repository. The prompt UI is vanilla HTML, CSS, and JavaScript under `web/` and does not need a build step.
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_interact` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`:

    ```bash
    ensure ox_lib
    ensure sleepless_interact
    ```
  </div>

  <div className="fd-step">
    ### Configure the Resource [#configure-the-resource-step]

    Edit `client/modules/config.lua` to choose a theme, accent colors, compact prompt behavior, keybinds, and render distance. See the [Configuration](/docs/interact/configuration) page for details, or [Custom Themes](/docs/interact/custom-themes) to add your own look.
  </div>
</div>

## Quick Start [#quick-start]

### Adding a Coordinate Interaction [#adding-a-coordinate-interaction]

```lua
local id = exports.sleepless_interact:addCoords(vec3(100.0, 200.0, 30.0), {
    label = "Interact Here",
    icon = "hand",
    distance = 2.0,
    onSelect = function(data)
        print("Selected at", data.coords)
    end,
})
```

### Adding a Global Ped Interaction [#adding-a-global-ped-interaction]

```lua
exports.sleepless_interact:addGlobalPed({
    label = "Talk to Ped",
    name = "talk_to_ped",
    icon = "comment",
    distance = 2.0,
    onSelect = function(data)
        print("Talking to ped", data.entity)
    end,
})
```

<Callout type="info">
  See the [Client Exports](/docs/interact/exports/Client) page for the full API reference.
</Callout>

## Support [#support]

If you need help or have questions:

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/Sleepless-Development/sleepless_interact/issues)
