# Sleepless Lootbox (/docs/lootbox)





A CS:GO-style lootbox/case opening system for FiveM with a polished React UI, weight-based loot pools, and framework-agnostic design.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_lootbox" />

## Features [#features]

* 🎰 **CS:GO-style roller animation** - Smooth spinning animation
* ⚖️ **Weight-based loot system** - Uses `ox_lib` selector for flexible drop rates
* 👀 **Preview system** - Players can view case contents and drop chances before opening
* 🎨 **Rarity system** - Visual rarity tiers (Common, Uncommon, Rare, Epic, Legendary)
* 🔧 **Framework agnostic** - Supports ESX, QBCore, Qbox, and ox\_core out of the box
* 📦 **Multiple inventory support** - Works with ox\_inventory, qb-inventoryy
* 🎁 **Metadata support** - Items can include custom metadata
* 📝 **Config + Runtime API** - Define lootboxes in config or register them dynamically via exports
* 🎀 **Bonus items** - Award hidden bonus items alongside the main reward (e.g., ammo with weapons)
* 🔌 **Custom reward hooks** - Extensible hook system for custom reward types (vehicles, bank money, etc.)

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/overextended/ox_lib) (required)
* A supported framework (ESX, QBCore, Qbox, or ox\_core)
* A supported inventory system (ox\_inventory, qb-inventory)

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download the latest release from [GitHub Releases](https://github.com/Sleepless-Development/sleepless_lootbox/releases). The release comes pre-built and ready to use.

    <Callout type="info">
      If you want to build from source instead, clone the repository and run the following in the `web` folder using [bun](https://bun.sh):

      ```bash
      bun install
      bun run build
      ```
    </Callout>
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_lootbox` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg` (after ox\_lib, your framework, and your inventory):

    ```bash
    ensure ox_lib
    ensure es_extended  # or qb-core, qbx_core, ox_core
    ensure ox_inventory # or qb-inventory
    ensure sleepless_lootbox
    ```
  </div>

  <div className="fd-step">
    ### Configure Framework Items [#configure-framework-items-step]

    Depending on your framework, you may need to configure your item definitions. See the [Framework Setup](/docs/lootbox/framework-setup) page for details.
  </div>

  <div className="fd-step">
    ### Configure Lootboxes [#configure-lootboxes-step]

    Edit `config.lua` to define your lootboxes and customize settings. See the [Configuration](/docs/lootbox/configuration) page for details.
  </div>
</div>

## Quick Start [#quick-start]

<div className="fd-steps">
  <div className="fd-step">
    ### Basic Lootbox Definition [#basic-lootbox-definition-step]

    ```lua
    config.lootboxes = {
        ['gun_case'] = {
            label = 'Gun Case',
            description = 'Contains various firearms',
            items = {
                -- Format: { weight, { name, amount, metadata?, rarity? } }
                { 80, { name = 'WEAPON_PISTOL', amount = 1 } },
                { 15, { name = 'WEAPON_SMG', amount = 1 } },
                { 4, { name = 'WEAPON_RIFLE', amount = 1 } },
                { 1, { name = 'WEAPON_RPG', amount = 1 } },
            },
        },
    }
    ```
  </div>

  <div className="fd-step">
    ### Weight System [#weight-system-step]

    Weights determine the relative drop chance of each item:

    * Higher weight = more common drops
    * Example: Items with weights 80, 15, 4, 1 (total 100) have 80%, 15%, 4%, and 1% chances respectively

    <Callout type="info">
      Weights don't need to add up to 100 - they're calculated relative to the total weight of all items in the lootbox.
    </Callout>
  </div>

  <div className="fd-step">
    ### Rarity Auto-Calculation [#rarity-auto-calculation-step]

    If you don't specify a `rarity` on an item, it's automatically calculated based on the weight:

    | Rarity    | Weight Threshold |
    | --------- | ---------------- |
    | Common    | weight >= 17     |
    | Uncommon  | weight >= 4      |
    | Rare      | weight >= 1      |
    | Epic      | weight >= 0.3    |
    | Legendary | weight \< 0.3    |

    You can customize these thresholds in `config.lua`.
  </div>
</div>

## Debug Commands [#debug-commands]

When `config.debug = true`, the following commands are available:

| Command                       | Description                                  |
| ----------------------------- | -------------------------------------------- |
| `/lootbox_test [caseName]`    | Test open a case without removing the item   |
| `/lootbox_preview [caseName]` | Print preview data to console                |
| `/lootbox_list`               | List all registered lootboxes                |
| `/lootbox_test_ui`            | Test the UI with dummy data (client)         |
| `/lootbox_test_preview`       | Test the preview UI with dummy data (client) |

## Support [#support]

If you need help or have questions:

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/Sleepless-Development/sleepless_lootbox/issues)
