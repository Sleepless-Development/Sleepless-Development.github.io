# Call Options (/docs/gizmo/options)



Pass a table as the second argument of `useGizmo` to override [config.lua](/docs/gizmo/configuration) for that edit only. Omitted keys keep the config value.

A number is shorthand for `distanceLimit`:

```lua
exports.object_gizmo:useGizmo(entity, 2.5)
```

```lua
exports.object_gizmo:useGizmo(entity, {
    camera = 'orbit',
    pivot = 'center',
    enableScale = true,
    distanceLimit = 4.0,
})
```

## Editor [#editor]

| Option            | Type                                     | Description                                                                 |
| ----------------- | ---------------------------------------- | --------------------------------------------------------------------------- |
| `camera`          | `'gameplay'` \| `'orbit'`                | Camera for this edit.                                                       |
| `mode`            | `'translate'` \| `'rotate'` \| `'scale'` | Starting mode.                                                              |
| `space`           | `'world'` \| `'local'`                   | `relative` is accepted and treated as `local`.                              |
| `pivot`           | `'origin'` \| `'center'`                 | Where the handles sit. The returned position is always the entity origin.   |
| `enableScale`     | `boolean`                                | Allow scale mode on this call.                                              |
| `enableRotate`    | `boolean`                                | Allow rotate mode. Default `true`.                                          |
| `enableTranslate` | `boolean`                                | Allow translate mode. Default `true`.                                       |
| `gizmoSize`       | `number`                                 | Handle size.                                                                |
| `axes`            | `{ x, y, z }`                            | GTA axes. `z = false` hides the vertical handle. Missing axes stay visible. |

## Orbit [#orbit]

`orbit` is merged over `Config.orbit`. Set only the fields this call should change.

```lua
exports.object_gizmo:useGizmo(entity, {
    camera = 'orbit',
    orbit = {
        minRadius = 2.0,
        maxRadius = 8.0,
        zoomStep = 0.5,
    },
})
```

| Field         | Type     | Description                         |
| ------------- | -------- | ----------------------------------- |
| `minRadius`   | `number` | Closest orbit distance, in metres.  |
| `maxRadius`   | `number` | Farthest orbit distance, in metres. |
| `zoomStep`    | `number` | Scroll step, in metres.             |
| `sensitivity` | `number` | Drag sensitivity.                   |
| `blend`       | `number` | Camera blend, in milliseconds.      |

## Bounds [#bounds]

`bounds` keeps the entity origin inside a volume. The check is that zone's `contains`, so a rotated box and a poly thickness behave the same as they do elsewhere in ox\_lib.

Pass a zone you already created:

```lua
local room = lib.zones.box({
    coords = vec3(100.0, 200.0, 30.0),
    size = vec3(4.0, 4.0, 3.0),
    rotation = 45,
})

exports.object_gizmo:useGizmo(entity, {
    bounds = room,
})
```

Or pass a definition. It uses the same fields as `lib.zones.box`, `lib.zones.sphere`, or `lib.zones.poly`, plus `type`. The temporary zone is removed when the gizmo closes. A zone you created yourself is left in place.

```lua
exports.object_gizmo:useGizmo(entity, {
    bounds = {
        type = 'sphere',
        coords = GetEntityCoords(entity),
        radius = 3.0,
        debug = true,
    },
})
```

```lua
exports.object_gizmo:useGizmo(entity, {
    bounds = {
        type = 'poly',
        points = {
            vec3(100.0, 200.0, 30.0),
            vec3(104.0, 200.0, 30.0),
            vec3(104.0, 204.0, 30.0),
            vec3(100.0, 204.0, 30.0),
        },
        thickness = 4.0,
    },
})
```

`debug = true` on a definition draws the zone for the edit.

If the entity starts outside the zone, and the zone center is inside, the entity is pulled to the edge when the gizmo opens. Dragging past the edge stops on it. The prompt shows the limit. `distanceLimit` still applies, and the entity has to satisfy both.

<Callout type="info">
  Bounds constrain the entity origin, which is the `position` you get back. With `pivot = 'center'`, the handles can stop before the zone edge by the distance from the origin to the model center.
</Callout>

## Distance [#distance]

| Option          | Type      | Description                                                                               |
| --------------- | --------- | ----------------------------------------------------------------------------------------- |
| `distanceLimit` | `number`  | Max metres from `origin`. `0` or omitting it disables the limit.                          |
| `origin`        | `vector3` | Point the distance is measured from. Default is the entity position when the gizmo opens. |

## Highlight And Physics [#highlight-and-physics]

| Option             | Type             | Description                                                  |
| ------------------ | ---------------- | ------------------------------------------------------------ |
| `outline`          | `boolean`        | Draw the outline. Default `true`. Peds fade instead.         |
| `outlineColor`     | `{ r, g, b, a }` | Outline colour for this call.                                |
| `outlineShader`    | `number`         | `0` hard edge, `1` softer edge.                              |
| `pedAlpha`         | `number`         | Ped alpha while editing.                                     |
| `freezeEntity`     | `boolean`        | Freeze the entity, then restore the previous freeze state.   |
| `freezePlayer`     | `boolean`        | Freeze the player ped.                                       |
| `disableCollision` | `boolean`        | Disable entity collision for the edit, then turn it back on. |
| `playerCanMove`    | `boolean`        | Allow the player to walk while the gizmo is open.            |
| `requestControl`   | `boolean`        | Request network control of a networked entity.               |

## Controls And HUD [#controls-and-hud]

| Option             | Type                  | Description                                                                      |
| ------------------ | --------------------- | -------------------------------------------------------------------------------- |
| `enableCancel`     | `boolean`             | `Esc` cancels and can restore the entity.                                        |
| `restoreOnCancel`  | `boolean`             | Put the entity back when the edit is cancelled. Default `true`.                  |
| `snapToGround`     | `boolean`             | Show ground snap.                                                                |
| `enableSnapToggle` | `boolean`             | Show the snap toggle.                                                            |
| `snap`             | `boolean`             | Start with snap on. Matches `Config.snapEnabled`.                                |
| `translationSnap`  | `number`              | Metres while snap is on.                                                         |
| `rotationSnap`     | `number`              | Degrees while snap is on.                                                        |
| `scaleSnap`        | `number`              | Scale step while snap is on.                                                     |
| `enableCopy`       | `boolean`             | Show the copy control.                                                           |
| `prompts`          | `boolean`             | Use sleepless\_prompts for this call when it is started. `false` forces text UI. |
| `promptPosition`   | `string`              | Prompt slot for this call.                                                       |
| `promptLayout`     | `'row'` \| `'column'` | Prompt layout for this call.                                                     |
| `textUiPosition`   | `string`              | Text UI position for this call.                                                  |
| `showCoords`       | `boolean`             | Print position and rotation in the text UI.                                      |

## onChange [#onchange]

Called while the entity is moving. `confirmed` is `false` until the player finishes. Errors in the callback are caught and do not close the gizmo.

```lua
exports.object_gizmo:useGizmo(entity, {
    onChange = function(update)
        print(update.position)
    end,
})
```
