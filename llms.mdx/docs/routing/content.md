# Sleepless Routing (/docs/routing)





A server-side routing bucket helper. Give an instance a name, move a player into it, and read the result from replicated player state.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_routing" />

## Features [#features]

* **Named buckets** so callers store a name instead of a raw bucket id
* **Reserved buckets** for the shared world and a hidden instance
* **Replicated player state** for `currentBucket`, `oldBucket`, and `currentBucketName`
* **Entities follow the player**: the occupied vehicle and objects attached to the ped move too
* **Population control** on each named bucket

## Buckets [#buckets]

| Id   | Role                                                                                    |
| ---- | --------------------------------------------------------------------------------------- |
| `0`  | Global world. `routePlayerToGlobalBucket` sends a player here.                          |
| `1`  | Hidden bucket. Population is disabled. `routePlayerToHiddenBucket` sends a player here. |
| `2+` | Named buckets from `createBucketId` or `requestBucketId`.                               |

`currentBucketName` is `nil` for the global and hidden buckets.

<Callout type="warn">
  Restarting `sleepless_routing` moves every online player back to bucket `0` and clears `currentBucketName`.
</Callout>

## Player state [#player-state]

Moving a player replicates three state bag fields on that player:

| Field               | Type            | Meaning                                               |
| ------------------- | --------------- | ----------------------------------------------------- |
| `currentBucket`     | `number`        | Bucket they were moved into                           |
| `oldBucket`         | `number`        | Bucket they were in before that move                  |
| `currentBucketName` | `string \| nil` | Registered name, or `nil` when the bucket has no name |

`0` is a real bucket. Check `== nil` when you need to know whether the state has been set.

```lua
AddStateBagChangeHandler('currentBucket', ('player:%s'):format(cache.serverId), function(_, _, bucket)
    local name = LocalPlayer.state.currentBucketName
    lib.print.info(bucket, name)
end)
```

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/communityox/ox_lib) (required)

No framework resource is required. On join, bucket state is published for ox\_core, ESX, QBCore, and Qbox, and for any player who joins before those events fire.

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/Sleepless-Development/sleepless_routing/releases) from GitHub.
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_routing` folder in your server's resources directory. Keep the folder name so `exports.sleepless_routing` resolves.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`:

    ```bash
    ensure ox_lib
    ensure sleepless_routing
    ```
  </div>
</div>

## Quick Start [#quick-start]

<div className="fd-steps">
  <div className="fd-step">
    ### Open a named instance [#open-a-named-instance-step]

    `requestBucketId` creates the bucket the first time and returns the same id after that. The second argument is population. `false` keeps ambient peds and traffic out of the instance. The third argument is an optional lockdown mode (`inactive`, `relaxed`, `strict`, `no_dummy`, `full`). Leave it unset when something inside the instance spawns networked entities from the client. `strict` blocks those spawns.

    Other players in the same vehicle move with the player. A later `setBucketOptions` call can change population or lockdown on a bucket that already exists. `getPlayersInBucket` returns whoever is in it right now. `triggerClientEventForBucket` sends one client event to those players through `lib.triggerClientEvent`.

    `currentBucket` stays aligned when another resource moves the player with `SetPlayerRoutingBucket`. The state bag updates from `onPlayerBucketChange`.

    ```lua
    lib.callback.register('myresource:enterHouse', function(source, propertyId)
        local bucketId = exports.sleepless_routing:requestBucketId(('house_%s'):format(propertyId), false)
        if not bucketId then return false end

        return exports.sleepless_routing:addPlayerToBucket(source, bucketId, true)
    end)
    ```
  </div>

  <div className="fd-step">
    ### Return to the world [#return-to-the-world-step]

    ```lua
    RegisterNetEvent('myresource:leftHouse', function()
        exports.sleepless_routing:routePlayerToGlobalBucket(source)
    end)
    ```
  </div>

  <div className="fd-step">
    ### Hide a player [#hide-a-player-step]

    ```lua
    exports.sleepless_routing:routePlayerToHiddenBucket(source)
    ```
  </div>
</div>

## Debug [#debug]

`/setroute` is registered only when `debug` is true in `config.lua`. The command is ACE restricted to `command.setroute`. With no argument, the player returns to the global bucket. With a name, they move into that named bucket (population off).

```lua
debug = true,
```

`versionCheckEnabled` checks GitHub for a newer release when the resource starts. Leave it `true` unless the server has no outbound access.

## Support [#support]

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/Sleepless-Development/sleepless_routing/issues)
