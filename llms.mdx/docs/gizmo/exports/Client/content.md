# Client Exports (/docs/gizmo/exports/Client)



Client exports for opening the gizmo and reading the transform the player settled on. Option fields are documented on [Call Options](/docs/gizmo/options).

The resource also emits local events. They are not networked.

| Event                              | Arguments | When                                                          |
| ---------------------------------- | --------- | ------------------------------------------------------------- |
| `object_gizmo:client:editStarted`  | `entity`  | The gizmo has opened.                                         |
| `object_gizmo:client:editFinished` | `result`  | The gizmo has closed. `result` matches the `useGizmo` return. |

```lua
AddEventHandler('object_gizmo:client:editFinished', function(result)
    if not result.confirmed then return end
    TriggerServerEvent('myresource:server:savedPlacement', result.position, result.rotation)
end)
```

***

## useGizmo [#usegizmo]

Opens the gizmo on an entity and blocks until the player finishes, cancels, or the entity disappears.

```lua
local result = exports.object_gizmo:useGizmo(entity)
local result = exports.object_gizmo:useGizmo(entity, options)
local result = exports.object_gizmo:useGizmo(entity, distanceLimit)
```

### Parameters [#parameters]

| Parameter | Type              | Description                                                         |
| --------- | ----------------- | ------------------------------------------------------------------- |
| `entity`  | `number`          | Entity handle to edit.                                              |
| `options` | `table \| number` | [Call options](/docs/gizmo/options), or a distance limit in metres. |

### Returns [#returns]

Always a table.

| Field       | Type      | Description                                                                                           |
| ----------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `handle`    | `number`  | The entity that was edited.                                                                           |
| `position`  | `vector3` | Entity coordinates when the gizmo closed. After a cancel with restore, this is the original position. |
| `rotation`  | `vector3` | Entity rotation when the gizmo closed.                                                                |
| `cancelled` | `boolean` | `true` when the player cancelled, the gizmo was already open, or the entity was invalid.              |
| `confirmed` | `boolean` | `true` when the player finished with the confirm control.                                             |

Calling `useGizmo` while one is already open returns immediately with `cancelled = true` and does not change the open edit.

### Example [#example]

```lua
local result = exports.object_gizmo:useGizmo(object, {
    camera = 'gameplay',
    pivot = 'center',
    bounds = roomZone,
})

if result.confirmed then
    lib.print.info(result.position, result.rotation)
end
```

***

## isGizmoActive [#isgizmoactive]

```lua
local active = exports.object_gizmo:isGizmoActive()
```

### Returns [#returns-1]

| Type      | Description                           |
| --------- | ------------------------------------- |
| `boolean` | `true` while a gizmo session is open. |

***

## cancelGizmo [#cancelgizmo]

Cancels the open gizmo. When restore-on-cancel is enabled, the entity returns to the transform it had when the gizmo opened.

```lua
exports.object_gizmo:cancelGizmo()
```

Does nothing if no gizmo is open.

***

## confirmGizmo [#confirmgizmo]

Finishes the open gizmo and keeps the current transform.

```lua
exports.object_gizmo:confirmGizmo()
```

Does nothing if no gizmo is open.
