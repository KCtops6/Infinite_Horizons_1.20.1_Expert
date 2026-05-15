BlockEvents.modification(event => {
    event.modify(/.*(oak|birch|spruce|jungle|acacia|mangrove|cherry|crimson|warped).*(log|wood|planks|stairs|slab|fence|gate|button|pressure_plate).*/, (block) => { 
        block.setRequiresTool(true); 
    });
});