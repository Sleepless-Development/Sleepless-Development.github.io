# Interact Options (/docs/interact/interact-options)



All interact actions are formatted as an array containing objects with the following properties.

## Option Type Definition [#option-type-definition]

```lua
---@class InteractOption
---@field label string The display label for the option.
---@field icon? string The icon associated with the option.
---@field iconColor? string The CSS color for the icon.
---@field distance? number The maximum distance at which the option is available. Defaults to 2.
---@field holdTime? number Makes the option a press and hold and sets how long it should be held for (milliseconds).
---@field canInteract? fun(entity: number, distance: number, coords: vector3, name: string): boolean? A function to determine if the option can be interacted with.
---@field hideWhenEmpty? boolean Override `config.hideWhenEmpty` for this option. True hides the distant marker when this option is invalid. False keeps it.
---@field name? string A unique identifier for the option.
---@field resource? string The resource that registered the option.
---@field offset? vector3 A relative offset from the entity's position.
---@field offsetAbsolute? vector3 An absolute offset in world coordinates.
---@field color? number[] 4 numbers in an array used for RGBA, overwriting the theme accent for that option.
---@field groups? string | string[] | table<string, number> Job, gang, or group filter. Hidden when the player does not match.
---@field items? string | string[] | table<string, number> Item the player must have. A table of name to count requires each amount.
---@field anyItem? boolean When true, one matching item is enough.
---@field bones? string | string[] An array of bone IDs associated with the option.
---@field allowInVehicle? boolean Marks the option as being usable inside a vehicle.
---@field onSelect? fun(data: InteractResponse) A function to execute when the option is selected.
---@field cooldown? number Milliseconds to wait after this option is selected. Defaults to 1500. 0 skips the wait.
---@field export? string Optional export function name.
---@field event? string Client-side event to trigger.
---@field serverEvent? string Server-side event to trigger.
---@field command? string Command to execute.
---@field onActive? fun(data: InteractResponse) A function to execute when the option is active.
---@field onInactive? fun(data: InteractResponse) A function to execute when the option was active and is now inactive.
---@field whileActive? fun(data: InteractResponse) A function to execute while the option is active on a loop.
```

### Properties [#properties]

| Property         | Type                          | Required | Description                                                                                                                                                           |
| ---------------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`          | `string`                      | Yes      | The display label for the option                                                                                                                                      |
| `icon`           | `string`                      | No       | FontAwesome icon name                                                                                                                                                 |
| `iconColor`      | `string`                      | No       | CSS color for the icon                                                                                                                                                |
| `distance`       | `number`                      | No       | Maximum distance at which the option is available. Defaults to `2`                                                                                                    |
| `holdTime`       | `number`                      | No       | Press-and-hold duration in milliseconds                                                                                                                               |
| `canInteract`    | `function`                    | No       | Function to determine if the option can be interacted with                                                                                                            |
| `hideWhenEmpty`  | `boolean`                     | No       | Overrides `config.hideWhenEmpty` for this option. `true` hides the distant marker when the option is invalid. `false` keeps it. Takes priority over the type default. |
| `name`           | `string`                      | No       | A unique identifier for the option                                                                                                                                    |
| `resource`       | `string`                      | No       | The resource that registered the option                                                                                                                               |
| `offset`         | `vector3`                     | No       | Relative offset from the entity's position                                                                                                                            |
| `offsetAbsolute` | `vector3`                     | No       | Absolute offset in world coordinates                                                                                                                                  |
| `color`          | `number[]`                    | No       | RGBA array `{r, g, b, a}` overriding the theme accent for that option                                                                                                 |
| `groups`         | `string \| string[] \| table` | No       | Job, gang, or group filter. The option is hidden when the player does not match. The running framework decides the shape                                              |
| `items`          | `string \| string[] \| table` | No       | Item the player must carry. A name-to-count table requires each amount                                                                                                |
| `anyItem`        | `boolean`                     | No       | When `true`, one matching item is enough                                                                                                                              |
| `bones`          | `string \| string[]`          | No       | Bone ID(s) associated with the option                                                                                                                                 |
| `allowInVehicle` | `boolean`                     | No       | Allow usage inside a vehicle                                                                                                                                          |
| `onSelect`       | `function`                    | No       | Callback when the option is selected                                                                                                                                  |
| `cooldown`       | `number`                      | No       | Cooldown in milliseconds after selection. Defaults to `1500`. Set `0` to skip it                                                                                      |
| `export`         | `string`                      | No       | Export function name to call                                                                                                                                          |
| `event`          | `string`                      | No       | Client-side event to trigger                                                                                                                                          |
| `serverEvent`    | `string`                      | No       | Server-side event to trigger                                                                                                                                          |
| `command`        | `string`                      | No       | Command to execute                                                                                                                                                    |
| `onActive`       | `function`                    | No       | Callback when the option becomes active                                                                                                                               |
| `onInactive`     | `function`                    | No       | Callback when the option becomes inactive                                                                                                                             |
| `whileActive`    | `function`                    | No       | Callback that runs in a loop while the option is active                                                                                                               |

## Callback Response [#callback-response]

When a player selects an option, a single action is triggered in the following priority order:

1. `onSelect`
2. `export`
3. `event`
4. `serverEvent`
5. `command`

The callback or event receives a copy of the option. `icon`, `groups`, `items`, and the callbacks are removed. These fields describe the current target:

| Property   | Type      | Description                                                                                    |
| ---------- | --------- | ---------------------------------------------------------------------------------------------- |
| `entity`   | `number`  | Entity handle. A server event receives the network id, or `0` when the entity is not networked |
| `coords`   | `vector3` | Interaction point                                                                              |
| `distance` | `number`  | The player's distance from the coords                                                          |
| `coordsId` | `string?` | Id of the coordinate target, when the option was added with `addCoords`                        |

<Callout type="info">
  When using `serverEvent`, the `entity` value is automatically converted to a network ID so it can be resolved on the server.
</Callout>

## Example [#example]

```lua
local options = {
    {
        label = "Talk to Ped",
        name = "talk_to_ped",
        icon = "comments",
        distance = 2.0,
        cooldown = 1500,
        onSelect = function(data)
            print("Talking to ped", data.entity)
        end,
        canInteract = function(entity, distance, coords, name)
            return distance < 2.0
        end,
    },
    {
        label = "Rob Ped",
        name = "rob_ped",
        icon = "hand-holding-dollar",
        distance = 1.5,
        holdTime = 3000,
        serverEvent = "myresource:robPed",
    },
}
```
