# Sleepless Ped Manager (/docs/pedmanager)





A FiveM ped manager for spawning local peds within distance of players and adding target/interact options to them. Uses `ox_lib` points for efficient distance-based spawning and despawning.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_pedmanager" />

<Callout type="info">
  This resource is fully compatible with both `ox_target` and `sleepless_interact` for adding interaction options to managed peds.
</Callout>

## Features [#features]

* 🧍 **Distance-Based Spawning** - Peds spawn and despawn based on player proximity using `ox_lib` points
* 🎬 **Animations & Scenarios** - Assign animations or scenarios to peds on spawn
* 🔧 **Prop Attachments** - Attach props to ped bones with configurable offsets
* 🎯 **Target Integration** - Built-in support for `ox_target` and `sleepless_interact` options
* 📍 **Multi-Location Support** - Define multiple spawn coordinates for a single ped configuration
* 🔄 **Lifecycle Callbacks** - `onSpawn` and `onDespawn` callbacks for custom logic

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/overextended/ox_lib) (required)
* [ox\_target](https://github.com/overextended/ox_target) (optional — for target options)
* [sleepless\_interact](https://github.com/Sleepless-Development/sleepless_interact) (optional — for interact options)

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/Sleepless-Development/sleepless_pedmanager/releases) from GitHub.
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_pedmanager` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`:

    ```bash
    ensure ox_lib
    ensure sleepless_pedmanager
    ```
  </div>
</div>

## Quick Start [#quick-start]

<div className="fd-steps">
  <div className="fd-step">
    ### Basic Ped with Target Options [#basic-ped-with-target-options-step]

    ```lua
    local pedPoint = exports.sleepless_pedmanager:addPed({
        model = "a_m_m_business_01",
        coords = vec4(200.0, -900.0, 30.0, 180.0),
        scenario = "WORLD_HUMAN_CLIPBOARD",
        renderDistance = 15.0,
        targetOptions = {
            {
                icon = "fas fa-comments",
                label = "Talk",
                serverEvent = "myresource:talkToNpc",
            },
        },
    })
    ```
  </div>

  <div className="fd-step">
    ### Ped with Animation and Prop [#ped-with-animation-and-prop-step]

    ```lua
    local pedPoint = exports.sleepless_pedmanager:addPed({
        model = "u_m_y_zombie_01",
        coords = vec4(-1665.45, -3143.31, 13.99, 281.13),
        renderDistance = 8.0,
        animation = {
            dict = "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a",
            anim = "idle_a",
            flag = 63,
        },
        prop = {
            propModel = "prop_cs_tablet",
            bone = 28422,
            rot = vec3(0.0, 0.0, 0.03),
            pos = vec3(0.0, 0.0, 0.03),
        },
    })
    ```

    <Callout type="info">
      The `addPed` export returns an `ox_lib` point instance that you can use to manage the ped's lifecycle. See the [Client Exports](/docs/pedmanager/exports/Client) page for the full API reference.
    </Callout>
  </div>
</div>

## Support [#support]

If you need help or have questions:

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/Sleepless-Development/sleepless_pedmanager/issues)
