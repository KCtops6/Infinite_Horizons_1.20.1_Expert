EntityEvents.spawned(event => {
    if (event.getLevel().getDimension() == 'minecraft:overworld') {
        if (event.getEntity().getType() == 'minecraft:slime') event.cancel();
    }
});