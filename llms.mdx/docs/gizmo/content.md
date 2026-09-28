# Object Gizmo (/docs/gizmo)





A drop-in 3D gizmo for moving, rotating, and optionally scaling entities. `exports.object_gizmo:useGizmo(entity)` blocks until the player finishes and returns `handle`, `position`, and `rotation`.

<ResourceLinks repo="https://github.com/DemiAutomatic/object_gizmo" />

<Callout type="info">
  Keep the resource folder named `object_gizmo`. Existing scripts that call `exports.object_gizmo:useGizmo` keep working. `cancelled` and `confirmed` are extra result fields and are safe to ignore.
</Callout>

## Features [#features]

* Translate, rotate, and optional scale handles drawn with Three.js
* Gameplay camera, or a scripted orbit camera, chosen per call
* World or local space
* Handles on the entity origin, or on the model bounds center
* Snap to ground, grid snap, and copy the transform to the clipboard
* Distance limit and an ox\_lib zone bounds limit
* Control strip uses [sleepless\_prompts](/docs/prompts) when that resource is running, and ox\_lib text UI otherwise
* Outline on objects, and a fade on peds

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/communityox/ox_lib) (required)
* [sleepless\_prompts](/docs/prompts) (optional)

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/DemiAutomatic/object_gizmo/releases) or clone the repository. The gizmo UI is the built `web/dist` folder. You do not need to build it unless you change `web/src`.
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `object_gizmo` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`, after `ox_lib`:

    ```bash
    ensure ox_lib
    ensure object_gizmo
    ```

    Start `sleepless_prompts` as well if you want the prompt strip. It is not a dependency.
  </div>

  <div className="fd-step">
    ### Configure the Resource [#configure-the-resource-step]

    Edit `config.lua` for the defaults every call inherits. See [Configuration](/docs/gizmo/configuration). Pass a table to `useGizmo` when one placement needs different settings. See [Call Options](/docs/gizmo/options).
  </div>
</div>

## Quick Start [#quick-start]

```lua
local result = exports.object_gizmo:useGizmo(entity)

if result.confirmed then
    print(result.position, result.rotation)
end
```

A number as the second argument is a distance limit, in metres, measured from the entity origin when the gizmo opened:

```lua
local result = exports.object_gizmo:useGizmo(entity, 2.5)
```

Switch the camera for a single call without changing `config.lua`:

```lua
exports.object_gizmo:useGizmo(entity, { camera = 'gameplay' })
exports.object_gizmo:useGizmo(entity, { camera = 'orbit' })
```

## Controls [#controls]

Players can rebind these under Settings, Key Bindings, FiveM.

| Key      | Action                                             |
| -------- | -------------------------------------------------- |
| W        | Translate                                          |
| R        | Rotate                                             |
| S        | Scale, when scale is enabled for that call         |
| Q        | World / local                                      |
| Left Alt | Snap to ground                                     |
| G        | Release the cursor so the gameplay camera can look |
| X        | Toggle snap                                        |
| C        | Copy the transform                                 |
| Enter    | Finish                                             |
| Esc      | Cancel and restore                                 |

G is not used while the camera mode is `orbit`. Drag empty space to orbit, and scroll to zoom.

Enter from the chat command that opened the gizmo is ignored. Press Enter again after the gizmo is open to finish.

## Test Command [#test-command]

`/testGizmo` is registered only when `Config.debug` is `true`. Leave that off on a live server. The command spawns a prop in front of the player.

```lua
/testGizmo
/testGizmo prop_bench_01a
/testGizmo orbit
/testGizmo gameplay prop_barrier_work05
```

## Locales [#locales]

Set the language with the `ox:locale` convar, for example `setr ox:locale "de"`.

Available: `cs`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pl`, `pt-br`, `ru`, `sv`, `tr`.

## Support [#support]

If you need help or have questions:

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/DemiAutomatic/object_gizmo/issues)
