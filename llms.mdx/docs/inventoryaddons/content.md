# Sleepless Inventory Addons (/docs/inventoryaddons)





Addon modules for ox\_inventory that enhance its utility with back items, drag crafting, and item carrying systems. Each addon can be used independently or together.

<ResourceLinks repo="https://github.com/Sleepless-Development/sleepless_inventory_addons" />

## Features [#features]

* 🎒 **Back Items** - Attach items to player models with customizable bone positions and rotations
* 🔨 **Drag Craft** - Simple crafting system using ox\_inventory drag-and-drop mechanics
* 📦 **Item Carry** - Automatic item carrying with animations and prop attachments

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/overextended/ox_lib) (required)
* [ox\_inventory](https://github.com/overextended/ox_inventory) (required)

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Download a [release](https://github.com/Sleepless-Development/sleepless_inventory_addons/releases) or clone the repository:

    ```bash
    git clone https://github.com/Sleepless-Development/sleepless_inventory_addons.git
    ```
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_inventory_addons` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg` (after ox\_inventory):

    ```bash
    ensure ox_lib
    ensure ox_inventory
    ensure sleepless_inventory_addons
    ```
  </div>

  <div className="fd-step">
    ### Configure Addons [#configure-addons-step]

    Each addon has its own configuration file in its respective subfolder. See the individual addon pages for details:

    * [Back Items](/docs/inventoryaddons/back-items) — `backitems/config.lua`
    * [Drag Craft](/docs/inventoryaddons/drag-craft) — `dragcraft/config.lua`
    * [Item Carry](/docs/inventoryaddons/item-carry) — `itemcarry/config.lua`
  </div>
</div>

## Addons Overview [#addons-overview]

<div className="fd-steps">
  <div className="fd-step">
    ### Back Items [#back-items-step]

    Configure item attachments to player models with bone-specific positioning. Supports weapons, backpacks, and custom items with priority-based slot management. Items visually display on the player's back (or other bones) when in their inventory.
  </div>

  <div className="fd-step">
    ### Drag Craft [#drag-craft-step]

    Create crafting recipes that work with ox\_inventory's drag-and-drop system. Drag one item onto another to trigger a craft. Supports multi-item recipes, durability costs, and client/server-side callbacks for custom logic.
  </div>

  <div className="fd-step">
    ### Item Carry [#item-carry-step]

    Automatically attach props and play animations when players receive specific items. Includes options for vehicle blocking and walk-only mode for realistic item carrying behavior.

    <Callout type="info">
      Each addon can be configured independently. You only need to set up the addons you want to use — unused addons can be left with their default (empty) configurations.
    </Callout>
  </div>
</div>

## Support [#support]

If you need help or have questions:

* [Discord](https://discord.gg/A2bDPbfgNP)
* [GitHub Issues](https://github.com/Sleepless-Development/sleepless_inventory_addons/issues)
