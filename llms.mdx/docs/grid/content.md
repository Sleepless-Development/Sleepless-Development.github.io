# Sleepless Grid (/docs/grid)





A spatial grid other resources use to load and unload nearby world content. Players stream the cell they are standing in, plus a buffer around it.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_grid" />

## Features [#features]

* **Cells** built from world X and Y. The default cell is 100 meters
* **Streaming** of the current cell and the surrounding buffer
* **Speed hysteresis** that shrinks streaming to the current cell while the player is moving fast
* **Routing buckets** so occupancy and streaming stay inside the bucket the player is in
* **Optional bucket names** when `sleepless_routing` is running

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/communityox/ox_lib) (required)
* [sleepless\_routing](https://github.com/Sleepless-Development/sleepless_routing) (optional, for bucket names)

A framework bridge loads for Qbox, QBCore, ox\_core, or ESX. Qbox is preferred when more than one is started, then QBCore, ox\_core, and ESX.

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/Sleepless-Development/sleepless_grid/releases) from GitHub.
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_grid` folder in your server's resources directory. Keep the folder name so `exports.sleepless_grid` resolves.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`, before resources that subscribe to cells:

    ```bash
    ensure ox_lib
    ensure sleepless_grid
    ```
  </div>
</div>

## Quick Start [#quick-start]

```lua
exports.sleepless_grid:RegisterCellHandler(function(cellId, bucket)
    lib.print.info('entered', cellId, bucket)
end, function(cellId, bucket)
    lib.print.info('left', cellId, bucket)
end)
```

On the server, the same export receives the player id first.

```lua
local players = exports.sleepless_grid:getPlayersFromCell(coords)
exports.sleepless_grid:triggerClientEventForCell(coords, 'myresource:client:cellUpdated', payload)
```

`getPlayersFromCell` lists players standing in the cell. `getSubscribersFromCell` lists players streaming it. Pass a bucket id, or a `sleepless_routing` bucket name, when the cell is not in the global world.
