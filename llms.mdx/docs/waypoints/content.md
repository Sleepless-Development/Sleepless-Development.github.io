# Sleepless Waypoints (/docs/waypoints)





A 3D DUI waypoint and marker system for FiveM. Create customizable waypoints with support for different styles, icons, labels, and distance tracking.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_waypoints" />

## Features [#features]

* 📍 **Two Waypoint Types** - Small markers and checkpoint-style beacons
* 🎨 **Customizable Appearance** - Colors, icons, labels, and sizes
* 📏 **Distance Display** - Automatic distance tracking to waypoints
* 🗺️ **Map Waypoint Sync** - Automatically creates a 3D marker at the player's map waypoint
* 🖥️ **Server-side Support** - Create waypoints for specific players or globally from the server
* ⚡ **Performance Optimized** - Efficient rendering with distance-based culling

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/overextended/ox_lib) (required)

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/Sleepless-Development/sleepless_waypoints/releases) or build from source:

    ```bash
    git clone https://github.com/Sleepless-Development/sleepless_waypoints.git
    cd sleepless_waypoints/web
    pnpm i
    pnpm build
    ```
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_waypoints` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`:

    ```bash
    ensure ox_lib
    ensure sleepless_waypoints
    ```
  </div>

  <div className="fd-step">
    ### Configure the Resource [#configure-the-resource-step]

    Edit `config.lua` to customize waypoint defaults, DUI settings, and rendering options. See the [Configuration](/docs/waypoints/configuration) page for details.
  </div>
</div>

## Quick Start [#quick-start]

<div className="fd-steps">
  <div className="fd-step">
    ### Create a Small Waypoint (Client) [#create-a-small-waypoint-client-step]

    ```lua
    local id = exports.sleepless_waypoints:create({
        coords = vec3(100.0, 200.0, 30.0),
        type = 'small',
        color = '#ff6b6b',
        icon = 'hand',
        size = 0.15,
        drawDistance = 100.0,
    })
    ```
  </div>

  <div className="fd-step">
    ### Create a Checkpoint Waypoint (Client) [#create-a-checkpoint-waypoint-client-step]

    ```lua
    local id = exports.sleepless_waypoints:create({
        coords = vec3(200.0, 300.0, 30.0),
        type = 'checkpoint',
        color = '#f5a623',
        label = 'DESTINATION',
        size = 1.0,
        drawDistance = 500.0,
        groundZ = 28.0,
    })
    ```
  </div>

  <div className="fd-step">
    ### Create a Server-side Waypoint [#create-a-server-side-waypoint-step]

    ```lua
    -- Send a waypoint to a specific player
    local id = exports.sleepless_waypoints:create(targetPlayerId, {
        coords = vector3(200, 300, 30),
        type = 'checkpoint',
        color = '#4ecdc4',
        label = 'GO HERE',
        drawDistance = 500.0,
    })

    -- Create a global waypoint visible to all players
    local id = exports.sleepless_waypoints:create(-1, {
        coords = vector3(0, 0, 72),
        type = 'checkpoint',
        color = '#9b59b6',
        label = 'EVENT LOCATION',
        drawDistance = 5000.0,
    })
    ```
  </div>
</div>

## Waypoint Types [#waypoint-types]

<div className="fd-steps">
  <div className="fd-step">
    ### Small [#small-step]

    A compact marker suitable for nearby points of interest. Displays an icon or image at the specified coordinates.
  </div>

  <div className="fd-step">
    ### Checkpoint [#checkpoint-step]

    A tall beacon-style marker visible from far distances. Features a vertical line extending from the ground with a label and distance display at the top.

    <Callout type="info">
      See the [Configuration](/docs/waypoints/configuration) page for the full `WaypointData` properties reference and default settings. See [Client Exports](/docs/waypoints/exports/Client) and [Server Exports](/docs/waypoints/exports/Server) for the complete API.
    </Callout>
  </div>
</div>

## Support [#support]

If you need help or have questions:

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/Sleepless-Development/sleepless_waypoints/issues)
