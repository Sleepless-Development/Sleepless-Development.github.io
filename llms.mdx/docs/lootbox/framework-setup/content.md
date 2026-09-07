# Framework Setup (/docs/lootbox/framework-setup)



Each framework handles usable items differently. This page explains how to configure your item definitions so that lootbox cases work correctly with your framework and inventory system.

<Callout type="info">
  These steps are **in addition** to defining your lootboxes in `config.lua`. You must also ensure the item definitions exist in your inventory/framework so players can hold and use the items.
</Callout>

## How It Works [#how-it-works]

When `config.registerUsableItems = true` (the default), sleepless\_lootbox automatically registers each lootbox as a usable item through the framework bridge. However, the item must still be **defined** in your inventory or framework's item list — the resource can only register the *use callback*, not create the item definition itself.

<Tabs items="['ox_core / ox_inventory', 'QBCore / Qbox']">
  <Tab>
    ## ox\_core + ox\_inventory Setup [#ox_core--ox_inventory-setup]

    When using **ox\_core**, usable items are handled through **ox\_inventory** item definitions rather than the framework itself. For each lootbox case item, you need to add a `server.export` entry in your ox\_inventory item definitions that points back to this resource.

    ### Item Definition Format [#item-definition-format]

    Add your lootbox case items to `ox_inventory/data/items.lua`:

    ```lua
    ["gun_case"] = {
        label = "Gun Case",
        description = "Contains various firearms",
        weight = 500,
        stack = true,
        server = {
            export = "sleepless_lootbox.gun_case",
        },
    },
    ```

    <Callout type="warn">
      The `server.export` value **must** follow the format `sleepless_lootbox.<item_name>`, where `<item_name>` matches the lootbox key defined in your `config.lua` or registered via exports. Without this, using the item will do nothing.
    </Callout>

    ### How It Works (ox\_core) [#how-it-works-ox_core]

    1. ox\_inventory sees that the item has a `server.export` defined.
    2. When a player uses the item, ox\_inventory calls the matching export on `sleepless_lootbox`.
    3. The ox framework bridge registers these exports automatically when `config.registerUsableItems = true`.
    4. The lootbox opens for the player.

    ### Complete Example [#complete-example]

    Here are all three default lootbox cases configured for ox\_inventory:

    ```lua
    -- ox_inventory/data/items.lua

    ["gun_case"] = {
        label = "Gun Case",
        description = "Contains various firearms",
        weight = 500,
        stack = true,
        server = {
            export = "sleepless_lootbox.gun_case",
        },
    },

    ["supply_crate"] = {
        label = "Supply Crate",
        description = "Contains useful supplies and materials",
        weight = 1000,
        stack = true,
        server = {
            export = "sleepless_lootbox.supply_crate",
        },
    },

    ["vip_case"] = {
        label = "VIP Case",
        description = "Premium rewards for VIP members",
        weight = 500,
        stack = true,
        server = {
            export = "sleepless_lootbox.vip_case",
        },
    },
    ```

    <Callout type="info">
      Don't forget to also add item definitions for any **loot contents** (weapons, items, etc.) that your lootboxes can reward. Those items don't need `server.export` — only the case items do.
    </Callout>

    ### Resource Order [#resource-order]

    Make sure your `server.cfg` starts resources in the correct order:

    ```bash
    ensure ox_lib
    ensure ox_core
    ensure ox_inventory
    ensure sleepless_lootbox
    ```
  </Tab>

  <Tab>
    ## QBCore / Qbox Setup [#qbcore--qbox-setup]

    When using **QBCore** or **Qbox**, lootbox case items must be defined in your shared items table with `useable = true`. This allows the framework to register usable item callbacks.

    ### Item Definition Format [#item-definition-format-1]

    Add your lootbox case items to `qb-core/shared/items.lua`:

    ```lua
    ["gun_case"] = {
        name = "gun_case",
        label = "Gun Case",
        weight = 500,
        type = "item",
        image = "gun_case.png",
        unique = false,
        useable = true,
        shouldClose = true,
        combinable = nil,
        description = "Contains various firearms",
    },
    ```

    <Callout type="warn">
      The `useable = true` flag is **required**. Without it, `QBCore.Functions.CreateUseableItem` (or `exports.qbx_core:CreateUseableItem` for Qbox) will not be able to register the callback, and using the item will do nothing.
    </Callout>

    ### How It Works (QBCore / Qbox) [#how-it-works-qbcore--qbox]

    1. The framework sees that the item has `useable = true` in the shared items table.
    2. When `config.registerUsableItems = true`, the bridge calls `CreateUseableItem` for each lootbox.
    3. When a player uses the item, the framework triggers the registered callback.
    4. The lootbox opens for the player.

    ### Complete Example [#complete-example-1]

    Here are all three default lootbox cases configured for QBCore/Qbox:

    ```lua
    -- qb-core/shared/items.lua

    ["gun_case"] = {
        name = "gun_case",
        label = "Gun Case",
        weight = 500,
        type = "item",
        image = "gun_case.png",
        unique = false,
        useable = true,
        shouldClose = true,
        combinable = nil,
        description = "Contains various firearms",
    },

    ["supply_crate"] = {
        name = "supply_crate",
        label = "Supply Crate",
        weight = 1000,
        type = "item",
        image = "supply_crate.png",
        unique = false,
        useable = true,
        shouldClose = true,
        combinable = nil,
        description = "Contains useful supplies and materials",
    },

    ["vip_case"] = {
        name = "vip_case",
        label = "VIP Case",
        weight = 500,
        type = "item",
        image = "vip_case.png",
        unique = false,
        useable = true,
        shouldClose = true,
        combinable = nil,
        description = "Premium rewards for VIP members",
    },
    ```

    <Callout type="info">
      Don't forget to also add item definitions for any **loot contents** (weapons, items, etc.) that your lootboxes can reward. Those items don't need `useable = true` — only the case items do.
    </Callout>

    ### Resource Order [#resource-order-1]

    Make sure your `server.cfg` starts resources in the correct order:

    ```bash
    ensure ox_lib
    ensure qb-core
    ensure sleepless_lootbox
    ```

    For Qbox, replace `qb-core` with `qbx_core`:

    ```bash
    ensure ox_lib
    ensure qbx_core
    ensure sleepless_lootbox
    ```
  </Tab>
</Tabs>

## Reference File [#reference-file]

The resource includes a `_items.lua` reference file in its root directory containing example item definitions for both ox\_inventory and QBCore/Qbox. This file is **not loaded at runtime** — it's purely for reference. Copy the relevant entries into your framework's item configuration.

## Adding Custom Lootboxes [#adding-custom-lootboxes]

When you register a new lootbox (either in `config.lua` or via the `registerLootbox` export), you need to add a matching item definition to your framework:

<Tabs items="['ox_inventory', 'QBCore / Qbox']">
  <Tab>
    ```lua
    -- Add to ox_inventory/data/items.lua
    ["my_custom_case"] = {
        label = "My Custom Case",
        weight = 500,
        stack = true,
        server = {
            export = "sleepless_lootbox.my_custom_case",
        },
    },
    ```
  </Tab>

  <Tab>
    ```lua
    -- Add to qb-core/shared/items.lua
    ["my_custom_case"] = {
        name = "my_custom_case",
        label = "My Custom Case",
        weight = 500,
        type = "item",
        image = "my_custom_case.png",
        unique = false,
        useable = true,
        shouldClose = true,
        combinable = nil,
        description = "A custom lootbox",
    },
    ```
  </Tab>
</Tabs>

## Troubleshooting [#troubleshooting]

### Item does nothing when used [#item-does-nothing-when-used]

* **ox\_inventory:** Verify the item definition includes `server.export = "sleepless_lootbox.<item_name>"` and that the item name matches your lootbox key exactly.
* **QBCore/Qbox:** Verify the item definition has `useable = true` in the shared items table.
* **All frameworks:** Ensure `config.registerUsableItems = true` in your `config.lua`.
* **All frameworks:** Ensure `sleepless_lootbox` starts **after** your framework and inventory in `server.cfg`.

### "No supported framework detected" warning [#no-supported-framework-detected-warning]

Check that your framework resource is started before `sleepless_lootbox`. The bridge auto-detects the framework by checking if the resource is started, so load order matters.

### Lootbox opens but no item is given [#lootbox-opens-but-no-item-is-given]

This is likely an inventory bridge issue. Make sure the loot content items (not the case items) are also defined in your inventory system. The resource can only give items that your inventory recognizes.
