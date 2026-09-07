# Sleepless Crafting (/docs/crafting)





<Callout type="warn">
  This is a **paid resource**. The core functionality is encrypted, but all configuration files and bridges are fully accessible and customizable.
</Callout>

A flexible and modern crafting system for FiveM servers with a React-based UI, upgradable stations, and full framework compatibility.

<PaidResourceLinks tebex="https://sleeplessdev.tebex.io/" />

## Features [#features]

* 🔧 **Multi-Framework** - Supports ESX, QBCore, Qbox, and ox\_core
* 📦 **Inventory Support** - Compatible with ox\_inventory and qb-inventory
* 🎨 **Modern UI** - React-based with 3D item previews and smooth animations
* 🏗️ **Custom Stations** - Unlimited station types with unique recipes and props
* ⬆️ **Upgradable Benches** - Unlock new recipes and change appearance
* 📍 **Placeable & Static** - Player-placed or pre-configured permanent stations
* 👥 **Group Restrictions** - Lock stations to jobs/gangs with grade requirements
* 📋 **Crafting Queue** - Queue multiple items with progress indicators
* 🗄️ **Station Storage** - Built-in stash system that scales with upgrades
* ⚡ **Optimized** - Grid-based loading for minimal resource usage
* 🔁 **Hooks & Events** - Server-side hooks and crafting event listeners

## Dependencies [#dependencies]

* [ox\_lib](https://github.com/communityox/ox_lib)
* [oxmysql](https://github.com/communityox/oxmysql)
* A supported framework (ESX, QB-Core, QBX, or OX\_Core)
* A supported inventory (ox\_inventory or qb-inventory)

## Preview [#preview]

<iframe width="560" height="315" src="https://www.youtube.com/embed/sz34xgh6se0?si=FS6DHbxksFbj-C3K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" />

## Installation [#installation]

<div className="fd-steps">
  <div className="fd-step">
    ### Download the Resource [#download-the-resource-step]

    Purchase and download `sleepless_crafting` from our Tebex store.
  </div>

  <div className="fd-step">
    ### Add to Server [#add-to-server-step]

    Place the `sleepless_crafting` folder in your server's resources directory.
  </div>

  <div className="fd-step">
    ### Configure Your Server [#configure-your-server-step]

    Add the following to your `server.cfg`:

    ```bash
    ensure ox_lib
    ensure oxmysql
    ensure sleepless_crafting
    ```
  </div>

  <div className="fd-step">
    ### Configure the Resource [#configure-the-resource-step]

    Edit the configuration files in the `config/` folder to customize the resource for your server:

    * `config.lua` - General settings
    * `queries.lua` - SQL schema and queries (fully editable)
    * `stationTypes.lua` - Define crafting stations, recipes, and props
    * `stationLocations.lua` - Pre-placed static station locations
  </div>

  <div className="fd-step">
    ### Set Up Inventory Items [#set-up-inventory-items-step]

    Make sure you have the required items registered in your inventory system. See the [Items Setup](/docs/crafting/items) page for examples.
  </div>

  <div className="fd-step">
    ### Restart Your Server [#restart-your-server-step]

    The database tables will be created automatically on first start.
  </div>
</div>

## Support [#support]

If you need help or have questions, join our [Discord](https://discord.gg/A2bDPbfgNP) server for support.
