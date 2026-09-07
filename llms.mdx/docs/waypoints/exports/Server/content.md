# Server Exports (/docs/waypoints/exports/Server)



All server-side exports for creating and managing waypoints that are synced to target client(s).

<Callout type="info">
  Server-created waypoints are automatically cleaned up when a player disconnects. Global waypoints (target `-1`) persist until explicitly removed.
</Callout>

***

## create [#create]

Creates a new waypoint for specific player(s) from the server. The waypoint will be synced to the target client(s) and rendered on their screen.

```lua
local id = exports.sleepless_waypoints:create(target, data)
```

### Parameters [#parameters]

| Parameter | Type                 | Description                                                                                                        |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `target`  | `number \| number[]` | Target player(s) to show the waypoint to. Use a single server ID, an array of server IDs, or `-1` for all players. |
| `data`    | `WaypointData`       | A table containing the [waypoint configuration](/docs/waypoints/configuration#waypoint-data)                       |

### Returns [#returns]

| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| `number` | The server-side waypoint ID for managing this waypoint |

### Example: Single Player [#example-single-player]

```lua
RegisterCommand('sendwaypoint', function(source, args)
    local targetPlayer = tonumber(args[1])
    if not targetPlayer then return end

    local ped = GetPlayerPed(targetPlayer)
    local coords = GetEntityCoords(ped)
    local targetPos = vector3(coords.x + 100, coords.y, coords.z)

    local id = exports.sleepless_waypoints:create(targetPlayer, {
        coords = targetPos,
        type = 'checkpoint',
        color = '#4ecdc4',
        label = 'GO HERE',
        size = 1.0,
        drawDistance = 500.0,
        groundZ = coords.z,
    })

    print(('Created waypoint %d for player %d'):format(id, targetPlayer))
end, true)
```

### Example: Multiple Players [#example-multiple-players]

```lua
local playerIds = { 1, 2, 3 }

local id = exports.sleepless_waypoints:create(playerIds, {
    coords = vector3(0, 0, 72),
    type = 'checkpoint',
    color = '#f5a623',
    label = 'MEETING POINT',
    size = 1.0,
    drawDistance = 1000.0,
})
```

### Example: Global Waypoint [#example-global-waypoint]

```lua
local id = exports.sleepless_waypoints:create(-1, {
    coords = vector3(0, 0, 72),
    type = 'checkpoint',
    color = '#9b59b6',
    label = 'EVENT LOCATION',
    size = 1.5,
    drawDistance = 5000.0,
    groundZ = 70.0,
})

-- Remove after 1 minute
SetTimeout(60000, function()
    exports.sleepless_waypoints:remove(id)
end)
```

***

## update [#update]

Updates an existing server-created waypoint's properties. The update will be synced to all target clients. Only the properties you specify will be changed.

```lua
exports.sleepless_waypoints:update(id, data)
```

### Parameters [#parameters-1]

| Parameter | Type           | Description                                        |
| --------- | -------------- | -------------------------------------------------- |
| `id`      | `number`       | The server-side waypoint ID returned from `create` |
| `data`    | `WaypointData` | A table containing the properties to update        |

### Example: Update Position [#example-update-position]

```lua
local waypointId = exports.sleepless_waypoints:create(-1, {
    coords = vector3(100, 200, 30),
    type = 'checkpoint',
    label = 'OBJECTIVE',
})

-- Update position when objective moves
RegisterNetEvent('objective:moved', function(newCoords)
    exports.sleepless_waypoints:update(waypointId, {
        coords = newCoords,
    })
end)
```

### Example: Update Appearance Based on State [#example-update-appearance-based-on-state]

```lua
local waypointId = nil

RegisterNetEvent('delivery:start', function(targetPlayer, dropoffCoords)
    waypointId = exports.sleepless_waypoints:create(targetPlayer, {
        coords = dropoffCoords,
        type = 'checkpoint',
        color = '#3498db',
        label = 'DELIVER HERE',
    })
end)

-- Update to show urgency when time is running low
RegisterNetEvent('delivery:urgent', function()
    if waypointId then
        exports.sleepless_waypoints:update(waypointId, {
            color = '#e74c3c',
            label = 'HURRY!',
        })
    end
end)
```

<Callout type="warn">
  Only waypoints created with the server-side `create` can be updated using the server-side `update`. Client-created waypoints cannot be modified from the server.
</Callout>

***

## remove [#remove]

Removes a server-created waypoint by its ID. The removal will be synced to all target clients.

```lua
exports.sleepless_waypoints:remove(id)
```

### Parameters [#parameters-2]

| Parameter | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| `id`      | `number` | The server-side waypoint ID returned from `create` |

### Example: Basic Removal [#example-basic-removal]

```lua
local waypointId = exports.sleepless_waypoints:create(source, {
    coords = vector3(100, 200, 30),
    type = 'checkpoint',
    label = 'OBJECTIVE',
})

-- Remove after 30 seconds
SetTimeout(30000, function()
    exports.sleepless_waypoints:remove(waypointId)
end)
```

### Example: Mission Complete [#example-mission-complete]

```lua
local activeWaypoints = {}

RegisterNetEvent('mission:assignWaypoint', function(playerId, coords)
    local id = exports.sleepless_waypoints:create(playerId, {
        coords = coords,
        type = 'checkpoint',
        label = 'OBJECTIVE',
        color = '#2ecc71',
    })
    activeWaypoints[playerId] = id
end)

RegisterNetEvent('mission:complete', function()
    local playerId = source
    local waypointId = activeWaypoints[playerId]

    if waypointId then
        exports.sleepless_waypoints:remove(waypointId)
        activeWaypoints[playerId] = nil
    end
end)
```

***

## removeAll [#removeall]

Removes all server-created waypoints. Can optionally target a specific player's waypoints only.

```lua
exports.sleepless_waypoints:removeAll(playerId?)
```

### Parameters [#parameters-3]

| Parameter  | Type      | Description                                                                                                                            |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `playerId` | `number?` | Optional player server ID. If provided, only removes waypoints for that player. If omitted, removes **all** waypoints for all players. |

### Example: Remove All Global Waypoints [#example-remove-all-global-waypoints]

```lua
exports.sleepless_waypoints:removeAll()
```

### Example: Event Cleanup [#example-event-cleanup]

```lua
local eventWaypoints = {}

RegisterCommand('startevent', function(source)
    local eventCoords = {
        vector3(100, 200, 30),
        vector3(150, 250, 30),
        vector3(200, 300, 30),
    }

    for i, coords in ipairs(eventCoords) do
        local id = exports.sleepless_waypoints:create(-1, {
            coords = coords,
            type = 'checkpoint',
            label = 'CHECKPOINT ' .. i,
            color = '#3498db',
        })
        table.insert(eventWaypoints, id)
    end
end, true)

RegisterCommand('endevent', function(source)
    exports.sleepless_waypoints:removeAll()
    eventWaypoints = {}
end, true)
```

<Callout type="warn">
  When called without a `playerId`, this removes **all** server-created waypoints across the entire server. Use with caution.
</Callout>

***

## removeForPlayer [#removeforplayer]

Removes all waypoints associated with a specific player. This is automatically called when a player disconnects, but can be used manually for cleanup.

```lua
exports.sleepless_waypoints:removeForPlayer(playerId)
```

### Parameters [#parameters-4]

| Parameter  | Type     | Description            |
| ---------- | -------- | ---------------------- |
| `playerId` | `number` | The player's server ID |

### Example: Job Change Cleanup [#example-job-change-cleanup]

```lua
RegisterNetEvent('job:changed', function(oldJob, newJob)
    local playerId = source
    exports.sleepless_waypoints:removeForPlayer(playerId)

    -- Optionally create new waypoints for the new job
    if newJob.name == 'police' then
        -- Create police-specific waypoints
    end
end)
```

### Example: Admin Cleanup [#example-admin-cleanup]

```lua
RegisterCommand('clearwaypoints', function(source, args)
    local targetId = tonumber(args[1])
    if not targetId then
        print('Usage: clearwaypoints [player_id]')
        return
    end

    exports.sleepless_waypoints:removeForPlayer(targetId)
    print(('Cleared all waypoints for player %d'):format(targetId))
end, true)
```

***

## get [#get]

Retrieves a server-created waypoint by its ID.

```lua
local waypoint = exports.sleepless_waypoints:get(id)
```

### Parameters [#parameters-5]

| Parameter | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| `id`      | `number` | The server-side waypoint ID returned from `create` |

### Returns [#returns-1]

| Type                   | Description                               |
| ---------------------- | ----------------------------------------- |
| `ServerWaypointEntry?` | The waypoint entry, or `nil` if not found |

### ServerWaypointEntry Properties [#serverwaypointentry-properties]

| Property    | Type                    | Description                                             |
| ----------- | ----------------------- | ------------------------------------------------------- |
| `target`    | `number \| number[]`    | The target player(s) for this waypoint                  |
| `data`      | `WaypointData`          | The waypoint's configuration data                       |
| `clientIds` | `table<number, number>` | Mapping of player IDs to their client-side waypoint IDs |

### Example [#example]

```lua
local waypointId = exports.sleepless_waypoints:create(source, {
    coords = vector3(100, 200, 30),
    type = 'checkpoint',
    label = 'TARGET',
})

local waypoint = exports.sleepless_waypoints:get(waypointId)

if waypoint then
    print('Waypoint exists')
    print('Target:', json.encode(waypoint.target))
    print('Label:', waypoint.data.label)

    if waypoint.target == -1 then
        print('This is a global waypoint')
    elseif type(waypoint.target) == 'table' then
        print('Waypoint is shown to', #waypoint.target, 'players')
    else
        print('Waypoint is shown to player', waypoint.target)
    end
else
    print('Waypoint not found')
end
```

***

## getAll [#getall]

Retrieves all server-created waypoints indexed by their server IDs.

```lua
local waypoints = exports.sleepless_waypoints:getAll()
```

### Returns [#returns-2]

| Type                                 | Description                        |
| ------------------------------------ | ---------------------------------- |
| `table<number, ServerWaypointEntry>` | All waypoints indexed by server ID |

### Example: List All Waypoints [#example-list-all-waypoints]

```lua
local waypoints = exports.sleepless_waypoints:getAll()

for id, waypoint in pairs(waypoints) do
    print(('Waypoint %d: %s at %s'):format(
        id,
        waypoint.data.label or 'No Label',
        waypoint.data.coords
    ))
end
```

### Example: Debug Command [#example-debug-command]

```lua
RegisterCommand('debugwaypoints', function(source)
    local waypoints = exports.sleepless_waypoints:getAll()

    print('=== Active Waypoints ===')
    for id, waypoint in pairs(waypoints) do
        local targetStr
        if waypoint.target == -1 then
            targetStr = 'Global'
        elseif type(waypoint.target) == 'table' then
            targetStr = 'Players: ' .. table.concat(waypoint.target, ', ')
        else
            targetStr = 'Player ' .. waypoint.target
        end

        print(('ID: %d | Target: %s | Label: %s'):format(
            id,
            targetStr,
            waypoint.data.label or 'N/A'
        ))
    end
    print('========================')
end, true)
```

***

## getForPlayer [#getforplayer]

Retrieves all waypoints that are visible to a specific player.

```lua
local waypoints = exports.sleepless_waypoints:getForPlayer(playerId)
```

### Parameters [#parameters-6]

| Parameter  | Type     | Description            |
| ---------- | -------- | ---------------------- |
| `playerId` | `number` | The player's server ID |

### Returns [#returns-3]

| Type                                 | Description                                    |
| ------------------------------------ | ---------------------------------------------- |
| `table<number, ServerWaypointEntry>` | Waypoints for this player indexed by server ID |

### Example: List Player's Waypoints [#example-list-players-waypoints]

```lua
RegisterCommand('mywaypoints', function(source)
    local waypoints = exports.sleepless_waypoints:getForPlayer(source)

    local count = 0
    for id, waypoint in pairs(waypoints) do
        count = count + 1
        TriggerClientEvent('chat:addMessage', source, {
            args = { ('Waypoint %d: %s'):format(id, waypoint.data.label or 'No Label') }
        })
    end

    TriggerClientEvent('chat:addMessage', source, {
        args = { ('You have %d active waypoints'):format(count) }
    })
end, false)
```

### Example: Mission Waypoint Check [#example-mission-waypoint-check]

```lua
RegisterNetEvent('mission:accept', function(missionId)
    local playerId = source
    local waypoints = exports.sleepless_waypoints:getForPlayer(playerId)

    -- Check for existing mission waypoints
    for id, waypoint in pairs(waypoints) do
        if waypoint.data.label and waypoint.data.label:find('MISSION') then
            TriggerClientEvent('notify', playerId, 'You already have an active mission!')
            return
        end
    end

    -- Create new mission waypoint
    local missionData = GetMissionData(missionId)
    exports.sleepless_waypoints:create(playerId, {
        coords = missionData.coords,
        type = 'checkpoint',
        label = 'MISSION OBJECTIVE',
        color = '#2ecc71',
    })
end)
```
