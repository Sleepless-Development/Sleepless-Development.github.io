# Client Exports (/docs/lootbox/exports/Client)



## preview [#preview]

Request to show the preview modal for a lootbox, allowing players to view contents before opening.

```lua
exports.sleepless_lootbox:preview(caseName)
```

### Parameters [#parameters]

| Parameter  | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| `caseName` | `string` | The lootbox identifier to preview |

### Example [#example]

```lua
-- Show preview when player uses an item
RegisterNetEvent('myresource:previewCase', function(caseName)
    exports.sleepless_lootbox:preview(caseName)
end)
```

***

## isRolling [#isrolling]

Check if a lootbox roll animation is currently in progress.

```lua
local rolling = exports.sleepless_lootbox:isRolling()
```

### Returns [#returns]

| Type      | Description                                        |
| --------- | -------------------------------------------------- |
| `boolean` | `true` if a roll is in progress, `false` otherwise |

### Example [#example-1]

```lua
if not exports.sleepless_lootbox:isRolling() then
    -- Safe to open another lootbox
    TriggerServerEvent('myresource:openCase', 'gun_case')
end
```

***

## close [#close]

Close the lootbox UI.

```lua
exports.sleepless_lootbox:close()
```

### Example [#example-2]

```lua
-- Force close the UI
exports.sleepless_lootbox:close()
```
