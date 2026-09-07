# Server Exports (/docs/lootbox/exports/Server)



## registerLootbox [#registerlootbox]

Register a new lootbox at runtime from another resource.

```lua
exports.sleepless_lootbox:registerLootbox(name, data)
```

### Parameters [#parameters]

| Parameter | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| `name`    | `string` | Unique identifier for the lootbox (typically the item name) |
| `data`    | `table`  | Lootbox configuration data                                  |

### Data Structure [#data-structure]

| Property           | Type      | Required | Description                                               |
| ------------------ | --------- | -------- | --------------------------------------------------------- |
| `label`            | `string`  | Yes      | Display name shown in UI                                  |
| `description`      | `string`  | No       | Description shown in UI                                   |
| `image`            | `string`  | No       | Custom image URL for the lootbox                          |
| `registerItem`     | `boolean` | No       | Auto-register as usable item (default: `true`)            |
| `items`            | `table`   | Yes      | Array of weighted loot items                              |
| `rarityThresholds` | `table`   | No       | Override global rarity weight thresholds for this lootbox |

### Returns [#returns]

| Type      | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| `boolean` | `true` if registration was successful, `false` if lootbox already exists or has no items |

### Example [#example]

```lua
exports.sleepless_lootbox:registerLootbox('mystery_box', {
    label = 'Mystery Box',
    description = 'Who knows what\'s inside?',
    registerItem = true,
    items = {
        { 50, { name = 'bread', amount = 5 } },
        { 30, { name = 'water', amount = 3 } },
        { 15, { name = 'bandage', amount = 2 } },
        { 5, { name = 'medkit', amount = 1, rarity = 'rare' } },
    },
})
```

<Callout type="info">
  Wrap your `registerLootbox` call in a `SetTimeout` or wait for the resource to be fully loaded to ensure the export is available.
</Callout>

***

## unregisterLootbox [#unregisterlootbox]

Remove a previously registered lootbox.

```lua
exports.sleepless_lootbox:unregisterLootbox(name)
```

### Parameters [#parameters-1]

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `name`    | `string` | The lootbox identifier to remove |

### Example [#example-1]

```lua
exports.sleepless_lootbox:unregisterLootbox('mystery_box')
```

***

## getLootbox [#getlootbox]

Get the configuration data for a specific lootbox.

```lua
local data = exports.sleepless_lootbox:getLootbox(name)
```

### Parameters [#parameters-2]

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| `name`    | `string` | The lootbox identifier |

### Returns [#returns-1]

| Type         | Description                        |
| ------------ | ---------------------------------- |
| `table\|nil` | Lootbox data or `nil` if not found |

### Example [#example-2]

```lua
local gunCase = exports.sleepless_lootbox:getLootbox('gun_case')
if gunCase then
    print('Found lootbox:', gunCase.label)
end
```

***

## getAllLootboxes [#getalllootboxes]

Get all registered lootboxes.

```lua
local lootboxes = exports.sleepless_lootbox:getAllLootboxes()
```

### Returns [#returns-2]

| Type    | Description                                       |
| ------- | ------------------------------------------------- |
| `table` | Table of all lootbox configurations keyed by name |

### Example [#example-3]

```lua
local allBoxes = exports.sleepless_lootbox:getAllLootboxes()
for name, data in pairs(allBoxes) do
    print(name, data.label)
end
```

***

## open [#open]

Open a lootbox for a player, triggering the roll animation and giving the reward.

```lua
exports.sleepless_lootbox:open(source, caseName, skipItemRemoval)
```

### Parameters [#parameters-3]

| Parameter         | Type      | Description                                                 |
| ----------------- | --------- | ----------------------------------------------------------- |
| `source`          | `number`  | Player server ID                                            |
| `caseName`        | `string`  | The lootbox identifier to open                              |
| `skipItemRemoval` | `boolean` | If `true`, the lootbox item won't be removed from inventory |

### Returns [#returns-3]

| Type      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `boolean` | `true` if the lootbox was opened successfully, `false` otherwise |

<Callout type="warn">
  Set `skipItemRemoval` to `true` if you handle item removal yourself (e.g., via ox\_target or custom triggers).
</Callout>

### Example: Custom Trigger [#example-custom-trigger]

```lua
RegisterNetEvent('myresource:openCase', function(caseName)
    local src = source
    -- Remove the item manually first
    exports.ox_inventory:RemoveItem(src, caseName, 1)
    -- Open with skipItemRemoval = true
    exports.sleepless_lootbox:open(src, caseName, true)
end)
```

### Example: Standard Usage [#example-standard-usage]

```lua
-- Let sleepless_lootbox handle item removal
exports.sleepless_lootbox:open(source, 'gun_case', false)
```

***

## getPreview [#getpreview]

Get preview data for a lootbox, including all items with their calculated drop chances.

```lua
local preview = exports.sleepless_lootbox:getPreview(caseName)
```

### Parameters [#parameters-4]

| Parameter  | Type     | Description            |
| ---------- | -------- | ---------------------- |
| `caseName` | `string` | The lootbox identifier |

### Returns [#returns-4]

| Type              | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| `RollItem[]\|nil` | Array of items with calculated chances, or `nil` if lootbox not found |

### Example [#example-4]

```lua
local items = exports.sleepless_lootbox:getPreview('gun_case')
if items then
    for _, item in ipairs(items) do
        print(item.name, item.chance .. '%', item.rarity)
    end
end
```

***

## registerRewardHook [#registerrewardhook]

Register a custom reward handler for a specific reward type. This allows external resources to handle non-item rewards like vehicles, bank deposits, or any custom reward logic.

```lua
exports.sleepless_lootbox:registerRewardHook(rewardType, hook)
```

### Parameters [#parameters-5]

| Parameter    | Type       | Description                                                 |
| ------------ | ---------- | ----------------------------------------------------------- |
| `rewardType` | `string`   | The reward type to handle (e.g., `'vehicle'`, `'bank'`)     |
| `hook`       | `function` | Handler function that receives `(source, reward, caseName)` |

### Hook Function [#hook-function]

The hook function receives three parameters:

| Parameter  | Type       | Description                                             |
| ---------- | ---------- | ------------------------------------------------------- |
| `source`   | `number`   | Player server ID                                        |
| `reward`   | `RollItem` | The reward data including `rewardType` and `rewardData` |
| `caseName` | `string`   | The lootbox identifier                                  |

### Hook Return Value [#hook-return-value]

| Return           | Behavior                                                        |
| ---------------- | --------------------------------------------------------------- |
| `true`           | Reward was handled by the hook, skip default item logic         |
| `false` or `nil` | Hook did not handle the reward, fall back to default item logic |

<Callout type="info">
  If a reward has a `rewardType` set but no hook is registered for it, the system will log a warning and fall back to default item behavior to prevent reward loss.
</Callout>

### Example: Vehicle Reward Hook [#example-vehicle-reward-hook]

```lua
-- Register a handler for 'vehicle' reward types
exports.sleepless_lootbox:registerRewardHook('vehicle', function(source, reward, caseName)
    local data = reward.rewardData
    -- data contains whatever you put in rewardData in your config
    -- e.g., { model = 'adder', garage = 'legion' }
    
    -- Example with qbx_vehicles
    local success = exports.qbx_vehicles:CreatePlayerVehicle({
        source = source,
        model = data.model,
        garage = data.garage or 'legion',
    })
    
    if success then
        -- Notify the player
        TriggerClientEvent('ox_lib:notify', source, {
            title = 'Vehicle Won!',
            description = 'Your ' .. reward.label .. ' has been added to your garage',
            type = 'success',
        })
        return true -- We handled this reward
    end
    
    return false -- Something went wrong, fall back to default behavior
end)
```

### Example: Bank Money Hook [#example-bank-money-hook]

```lua
-- Register a handler for 'bank' reward types
exports.sleepless_lootbox:registerRewardHook('bank', function(source, reward, caseName)
    local data = reward.rewardData
    -- data contains: { amount = 50000 }
    
    -- Example with QBCore
    local Player = exports.qbx_core:GetPlayer(source)
    if Player then
        Player.Functions.AddMoney('bank', data.amount, 'lootbox-reward')
        return true
    end
    
    return false
end)
```

***

## removeRewardHook [#removerewardhook]

Remove a previously registered reward hook.

```lua
exports.sleepless_lootbox:removeRewardHook(rewardType)
```

### Parameters [#parameters-6]

| Parameter    | Type     | Description                               |
| ------------ | -------- | ----------------------------------------- |
| `rewardType` | `string` | The reward type to remove the handler for |

### Example [#example-5]

```lua
-- Remove the vehicle hook (e.g., when your resource stops)
exports.sleepless_lootbox:removeRewardHook('vehicle')
```

<Callout type="warn">
  If you register hooks from another resource, consider removing them in that resource's `onResourceStop` handler to prevent errors if the resource restarts.
</Callout>
