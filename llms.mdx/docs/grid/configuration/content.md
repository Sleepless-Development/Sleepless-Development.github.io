# Configuration (/docs/grid/configuration)



Shared settings live in `config.lua` at the resource root. The file returns the table.

```lua
local config = {
    versionCheck = true,
    cellSize = 100,
    bufferSize = 1,
    checkInterval = 500,
    debug = false,
    dynamicBuffer = {
        enabled = true,
        speedThreshold = 60,
        restoreThreshold = 45,
    },
}

return config
```

| Option                           | Type      | Default | Description                                                                  |
| -------------------------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `versionCheck`                   | `boolean` | `true`  | Check GitHub for a newer release on start                                    |
| `cellSize`                       | `number`  | `100`   | Cell width and height in meters                                              |
| `bufferSize`                     | `number`  | `1`     | Extra rings of cells to stream around the player                             |
| `checkInterval`                  | `number`  | `500`   | Milliseconds between movement checks. The server never polls faster than 250 |
| `debug`                          | `boolean` | `false` | Print cell enter and leave lines                                             |
| `dynamicBuffer.enabled`          | `boolean` | `true`  | Shrink the streamed buffer while the player is moving fast                   |
| `dynamicBuffer.speedThreshold`   | `number`  | `60`    | Miles per hour where streaming shrinks to the current cell                   |
| `dynamicBuffer.restoreThreshold` | `number`  | `45`    | Miles per hour where the full buffer returns                                 |

`restoreThreshold` must stay below `speedThreshold`. When it does not, the resource uses 15 mph under the shrink speed.

`debug` only enables those log lines. There is no test command.
