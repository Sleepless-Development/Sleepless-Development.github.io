# Server Exports (/docs/routing/exports/Server)



All of these exports are server-side. Call them with `exports.sleepless_routing`.

Bucket `0` is the global world. Bucket `1` is the hidden bucket. Named buckets start at `2`.

***

## getPlayerBucket [#getplayerbucket]

Returns the replicated state and the live routing bucket for a player.

```lua
local state = exports.sleepless_routing:getPlayerBucket(playerId)
```

### Parameters [#parameters]

| Parameter  | Type     | Description             |
| ---------- | -------- | ----------------------- |
| `playerId` | `number` | Server id of the player |

### Returns [#returns]

| Type                       | Description                         |
| -------------------------- | ----------------------------------- |
| `PlayerBucketState \| nil` | `nil` when the player is not online |

### PlayerBucketState [#playerbucketstate]

| Field           | Type            | Description                              |
| --------------- | --------------- | ---------------------------------------- |
| `currentBucket` | `number \| nil` | Replicated `currentBucket` state         |
| `oldBucket`     | `number \| nil` | Replicated `oldBucket` state             |
| `bucket`        | `number`        | Live value from `GetPlayerRoutingBucket` |

`currentBucket` is the last bucket this resource published. `bucket` is the routing bucket the game is using right now.

### Example [#example]

```lua
local state = exports.sleepless_routing:getPlayerBucket(source)
if not state then return end

print(state.currentBucket, state.oldBucket, state.bucket)
```

***

## addPlayerToBucket [#addplayertobucket]

Moves a player into a bucket. The vehicle they are sitting in moves with them, including the other players in that vehicle and any non-player peds in its seats. Objects attached to the ped move too.

Replicates `oldBucket`, `currentBucket`, and `currentBucketName` on that player. `currentBucketName` is the registered name, or `nil` for buckets `0` and `1`.

```lua
local ok = exports.sleepless_routing:addPlayerToBucket(playerId, bucket, force)
```

### Parameters [#parameters-1]

| Parameter  | Type       | Description                                                                                   |
| ---------- | ---------- | --------------------------------------------------------------------------------------------- |
| `playerId` | `number`   | Server id of the player                                                                       |
| `bucket`   | `number`   | Target routing bucket. `0` is valid                                                           |
| `force`    | `boolean?` | When `true`, apply the move even if the player is already in that bucket. Defaults to `false` |

### Returns [#returns-1]

| Type      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| `boolean` | `true` when the player is in the requested bucket afterward |

Pass `true` for `force` when the caller needs attached entities moved again, or when the replicated state may be stale.

### Example [#example-1]

```lua
local bucketId = exports.sleepless_routing:requestBucketId('apartment_4b', false)
if not bucketId then return end

exports.sleepless_routing:addPlayerToBucket(source, bucketId, true)
```

***

## routePlayerToHiddenBucket [#routeplayertohiddenbucket]

Moves a player into bucket `1`. Population in that bucket is disabled for the life of the resource.

```lua
local ok = exports.sleepless_routing:routePlayerToHiddenBucket(playerId)
```

### Parameters [#parameters-2]

| Parameter  | Type     | Description             |
| ---------- | -------- | ----------------------- |
| `playerId` | `number` | Server id of the player |

### Returns [#returns-2]

| Type      | Description                                    |
| --------- | ---------------------------------------------- |
| `boolean` | `true` when the player is in the hidden bucket |

### Example [#example-2]

```lua
exports.sleepless_routing:routePlayerToHiddenBucket(source)
```

***

## routePlayerToGlobalBucket [#routeplayertoglobalbucket]

Moves a player into bucket `0`, the shared world.

```lua
local ok = exports.sleepless_routing:routePlayerToGlobalBucket(playerId)
```

### Parameters [#parameters-3]

| Parameter  | Type     | Description             |
| ---------- | -------- | ----------------------- |
| `playerId` | `number` | Server id of the player |

### Returns [#returns-3]

| Type      | Description                                    |
| --------- | ---------------------------------------------- |
| `boolean` | `true` when the player is in the global bucket |

### Example [#example-3]

```lua
RegisterNetEvent('myresource:leftInterior', function()
    exports.sleepless_routing:routePlayerToGlobalBucket(source)
end)
```

***

## createBucketId [#createbucketid]

Registers a new named bucket. If the name already exists, the existing id is returned and the population and lockdown arguments are ignored.

Population and lockdown apply only on the first create. An omitted population value defaults to `false`. An omitted lockdown leaves FiveM's default, `inactive`.

```lua
local bucketId = exports.sleepless_routing:createBucketId(name, population, lockdown)
```

### Parameters [#parameters-4]

| Parameter    | Type                                                           | Description                                                                         |
| ------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `name`       | `string`                                                       | Non-empty bucket name                                                               |
| `population` | `boolean?`                                                     | `SetRoutingBucketPopulationEnabled` for the new bucket. Defaults to `false`         |
| `lockdown`   | `'inactive' \| 'relaxed' \| 'strict' \| 'no_dummy' \| 'full'?` | `SetRoutingBucketEntityLockdownMode`. An unknown string makes the call return `nil` |

`strict` blocks client-created entities. Leave lockdown unset when a script inside the instance spawns networked entities from the client.

### Returns [#returns-4]

| Type            | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| `number \| nil` | Bucket id, or `nil` when `name` is empty or `lockdown` is not a known mode |

### Example [#example-4]

```lua
local quiet = exports.sleepless_routing:createBucketId('intro', false, 'strict')
local city = exports.sleepless_routing:createBucketId('public_event', true)
```

***

## requestBucketId [#requestbucketid]

Returns the id for a name. Creates the bucket when the name is not registered yet.

```lua
local bucketId = exports.sleepless_routing:requestBucketId(name, population, lockdown)
```

### Parameters [#parameters-5]

| Parameter    | Type                                                           | Description                                                                                |
| ------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `name`       | `string`                                                       | Non-empty bucket name                                                                      |
| `population` | `boolean?`                                                     | Used only when this call creates the bucket. Defaults to `false`                           |
| `lockdown`   | `'inactive' \| 'relaxed' \| 'strict' \| 'no_dummy' \| 'full'?` | Used only when this call creates the bucket. An unknown string makes the call return `nil` |

### Returns [#returns-5]

| Type            | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| `number \| nil` | Bucket id, or `nil` when `name` is empty or `lockdown` is not a known mode |

### Example [#example-5]

```lua
local bucketId = exports.sleepless_routing:requestBucketId(('house_%s'):format(propertyId), false)
exports.sleepless_routing:addPlayerToBucket(source, bucketId, true)
```

***

## getBucketId [#getbucketid]

Looks up a name and returns its id when that name is already registered.

```lua
local bucketId = exports.sleepless_routing:getBucketId(name)
```

### Parameters [#parameters-6]

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `name`    | `string` | Bucket name |

### Returns [#returns-6]

| Type            | Description                                         |
| --------------- | --------------------------------------------------- |
| `number \| nil` | Bucket id, or `nil` when the name is not registered |

### Example [#example-6]

```lua
local bucketId = exports.sleepless_routing:getBucketId('house_12')
if not bucketId then return end
```

***

## getBucketName [#getbucketname]

Looks up the name for a bucket id. Buckets `0` and `1` are unnamed.

```lua
local name = exports.sleepless_routing:getBucketName(bucketId)
```

### Parameters [#parameters-7]

| Parameter  | Type     | Description       |
| ---------- | -------- | ----------------- |
| `bucketId` | `number` | Routing bucket id |

### Returns [#returns-7]

| Type            | Description               |
| --------------- | ------------------------- |
| `string \| nil` | Registered name, or `nil` |

### Example [#example-7]

```lua
local state = exports.sleepless_routing:getPlayerBucket(source)
local name = state and exports.sleepless_routing:getBucketName(state.bucket)
```

***

## removeBucketId [#removebucketid]

Forgets a registered name. The numeric bucket is not deleted, and players still inside it stay there. Their `currentBucketName` state is cleared.

A later `requestBucketId` with the same name allocates a new id.

```lua
local removed = exports.sleepless_routing:removeBucketId(name)
```

### Parameters [#parameters-8]

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `name`    | `string` | Bucket name |

### Returns [#returns-8]

| Type      | Description                         |
| --------- | ----------------------------------- |
| `boolean` | `true` when the name was registered |

### Example [#example-8]

```lua
exports.sleepless_routing:routePlayerToGlobalBucket(source)
exports.sleepless_routing:removeBucketId(('house_%s'):format(propertyId))
```

***

## setBucketOptions [#setbucketoptions]

Changes population, lockdown, or both on a bucket that already exists. Pass a bucket id or a registered name. Bucket `0` and bucket `1` accept a numeric id.

```lua
local ok = exports.sleepless_routing:setBucketOptions(bucket, options)
```

### Parameters [#parameters-9]

| Parameter            | Type                                                           | Description                                 |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| `bucket`             | `number \| string`                                             | Bucket id, or a name from `requestBucketId` |
| `options.population` | `boolean?`                                                     | `SetRoutingBucketPopulationEnabled`         |
| `options.lockdown`   | `'inactive' \| 'relaxed' \| 'strict' \| 'no_dummy' \| 'full'?` | `SetRoutingBucketEntityLockdownMode`        |

### Returns [#returns-9]

| Type      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `boolean` | `true` when the bucket resolved and every supplied option was applied |

### Example [#example-9]

```lua
exports.sleepless_routing:setBucketOptions('house_12', {
    lockdown = 'strict',
})
```

***

## getPlayersInBucket [#getplayersinbucket]

Returns the server ids of players whose live routing bucket matches. This reads `GetPlayerRoutingBucket`, so it includes players moved by another resource.

```lua
local playerIds = exports.sleepless_routing:getPlayersInBucket(bucket)
```

### Parameters [#parameters-10]

| Parameter | Type               | Description                                 |
| --------- | ------------------ | ------------------------------------------- |
| `bucket`  | `number \| string` | Bucket id, or a name from `requestBucketId` |

### Returns [#returns-10]

| Type              | Description                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| `number[] \| nil` | Server ids. `{}` when the bucket is empty. `nil` when the name is not registered or the id is invalid |

### Example [#example-10]

```lua
local playerIds = exports.sleepless_routing:getPlayersInBucket(('house_%s'):format(propertyId)) or {}

for i = 1, #playerIds do
    exports.sleepless_routing:routePlayerToGlobalBucket(playerIds[i])
end
```

***

## triggerClientEventForBucket [#triggerclienteventforbucket]

Sends one client event to every player currently in the bucket. This wraps `lib.triggerClientEvent`, so the payload is packed once and delivered to each player in that bucket.

The argument order matches `lib.triggerClientEvent`: event name, then the target, then the payload. The target is a bucket id or a registered name instead of a server id.

```lua
local sent = exports.sleepless_routing:triggerClientEventForBucket(eventName, bucket, ...)
```

### Parameters [#parameters-11]

| Parameter   | Type               | Description                                 |
| ----------- | ------------------ | ------------------------------------------- |
| `eventName` | `string`           | Client event name                           |
| `bucket`    | `number \| string` | Bucket id, or a name from `requestBucketId` |
| `...`       | `any`              | Arguments forwarded to the client event     |

### Returns [#returns-11]

| Type      | Description                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `boolean` | `true` when the bucket resolved and the event was handed to `lib.triggerClientEvent`. An empty bucket still returns `true`. `false` when the event name is empty, the name is not registered, or the id is invalid |

### Example [#example-11]

```lua
exports.sleepless_routing:triggerClientEventForBucket('myresource:client:houseUpdated', ('house_%s'):format(propertyId), furniture)
```

***

## moveEntityToBucket [#moveentitytobucket]

Moves one entity into a bucket. Pass a bucket id, or the name used with `requestBucketId`. Use `addPlayerToBucket` for players.

```lua
local ok = exports.sleepless_routing:moveEntityToBucket(entityId, bucket)
```

### Parameters [#parameters-12]

| Parameter  | Type               | Description                     |
| ---------- | ------------------ | ------------------------------- |
| `entityId` | `number`           | Entity handle                   |
| `bucket`   | `number \| string` | Bucket id, or a registered name |

### Returns [#returns-12]

| Type      | Description                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| `boolean` | `true` when the entity exists, the bucket resolved, and the entity ends in that bucket |

### Example [#example-12]

```lua
local bucketId = exports.sleepless_routing:requestBucketId(('garage_%s'):format(propertyId), false)
exports.sleepless_routing:moveEntityToBucket(vehicle, bucketId)
```

***

## moveEntityToGlobalBucket [#moveentitytoglobalbucket]

Moves one entity into bucket `0`. Use `addPlayerToBucket` for players.

```lua
local ok = exports.sleepless_routing:moveEntityToGlobalBucket(entityId)
```

### Parameters [#parameters-13]

| Parameter  | Type     | Description   |
| ---------- | -------- | ------------- |
| `entityId` | `number` | Entity handle |

### Returns [#returns-13]

| Type      | Description                                          |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` when the entity exists and ends in bucket `0` |

### Example [#example-13]

```lua
exports.sleepless_routing:moveEntityToGlobalBucket(vehicle)
```
