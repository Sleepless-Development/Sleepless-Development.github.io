# Client Exports (/docs/grid/exports/Client)



Call these with `exports.sleepless_grid`. The shared helpers on this page also exist on the server.

Cell ids look like `cell_12_-3`.

***

## RegisterCellHandler [#registercellhandler]

Registers callbacks for cells this client starts or stops streaming.

```lua
exports.sleepless_grid:RegisterCellHandler(onLoad, onUnload)
```

### Parameters [#parameters]

| Parameter  | Type                                   | Description                             |
| ---------- | -------------------------------------- | --------------------------------------- |
| `onLoad`   | `fun(cellId: string, bucket: number)?` | Called when streaming starts for a cell |
| `onUnload` | `fun(cellId: string, bucket: number)?` | Called when streaming stops for a cell  |

`bucket` is the routing bucket the cell was loaded in. Handlers are removed when the calling resource stops.

***

## getActiveCells [#getactivecells]

Returns the cells this client is streaming.

```lua
local cells = exports.sleepless_grid:getActiveCells()
```

### Returns [#returns]

| Type                  | Description                               |
| --------------------- | ----------------------------------------- |
| `table<string, true>` | Cell id keys for the current subscription |

***

## refreshCells [#refreshcells]

On the next tick, runs load callbacks again for cells the player is still streaming. Cells that are no longer nearby unload in the same pass.

```lua
exports.sleepless_grid:refreshCells()
```

***

## getRoutingBucket [#getroutingbucket]

Returns the routing bucket this client is streaming, and the `sleepless_routing` name when one is set.

```lua
local bucket, bucketName = exports.sleepless_grid:getRoutingBucket()
```

### Returns [#returns-1]

| Type            | Description            |
| --------------- | ---------------------- |
| `number`        | Streaming bucket       |
| `string \| nil` | Registered bucket name |

***

## getCurrentBufferSize [#getcurrentbuffersize]

Returns the buffer radius currently applied on this client, after the speed shrink.

```lua
local buffer = exports.sleepless_grid:getCurrentBufferSize()
```

### Returns [#returns-2]

| Type     | Description                                     |
| -------- | ----------------------------------------------- |
| `number` | `0` while shrunk, otherwise `config.bufferSize` |

***

## getCellIdFromCoords [#getcellidfromcoords]

```lua
local cellId = exports.sleepless_grid:getCellIdFromCoords(coords)
```

| Parameter | Type      | Description    |
| --------- | --------- | -------------- |
| `coords`  | `vector3` | World position |

Returns the cell id string.

***

## getCellCenter [#getcellcenter]

```lua
local center = exports.sleepless_grid:getCellCenter(cellId)
```

`cellId` may be a cell id or a `vector3`. Returns the center of that cell at `z = 0`, or `nil` when the id cannot be parsed.

***

## parseCellId [#parsecellid]

```lua
local x, y = exports.sleepless_grid:parseCellId(cellId)
```

Returns the integer cell coordinates, or `nil` when the string is not a cell id.

***

## getNearbyCells [#getnearbycells]

```lua
local cellIds = exports.sleepless_grid:getNearbyCells(cellX, cellY, buffer)
```

| Parameter | Type       | Description                                 |
| --------- | ---------- | ------------------------------------------- |
| `cellX`   | `integer`  | Cell X                                      |
| `cellY`   | `integer`  | Cell Y                                      |
| `buffer`  | `integer?` | Ring count. Defaults to `config.bufferSize` |

***

## getBufferSize [#getbuffersize]

Returns the configured buffer, before speed shrinking.

```lua
local buffer = exports.sleepless_grid:getBufferSize()
```
