# Client Events (/docs/crafting/Events/Client)



Events triggered on the client that can be listened to for custom integrations.

## sleepless\_crafting:PlayerOpenedStation [#sleepless_craftingplayeropenedstation]

Triggered when the local player opens a crafting station.

```lua
RegisterNetEvent("sleepless_crafting:PlayerOpenedStation", function(benchId)
    -- benchId: The ID of the crafting station that was opened
    print("Player opened crafting station:", benchId)
end)
```

### Parameters [#parameters]

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| `benchId` | `string` | The ID of the crafting station that was opened |

***

## sleepless\_crafting:PlayerClosedStation [#sleepless_craftingplayerclosedstation]

Triggered when the local player closes a crafting station.

```lua
RegisterNetEvent("sleepless_crafting:PlayerClosedStation", function(benchId)
    -- benchId: The ID of the crafting station that was closed
    print("Player closed crafting station:", benchId)
end)
```

### Parameters [#parameters-1]

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| `benchId` | `string` | The ID of the crafting station that was closed |

### Example: Toggle HUD Visibility [#example-toggle-hud-visibility]

```lua
RegisterNetEvent("sleepless_crafting:PlayerOpenedStation", function(benchId)
    -- Hide your custom HUD while crafting
    exports.myHud:setVisible(false)
end)

RegisterNetEvent("sleepless_crafting:PlayerClosedStation", function(benchId)
    -- Show your custom HUD again
    exports.myHud:setVisible(true)
end)
```
