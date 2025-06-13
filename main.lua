--- STEAMODDED HEADER
--- MOD_NAME: Mefi Joker
--- MOD_ID: MefiJoker
--- MOD_AUTHOR: [Blink]
--- MOD_DESCRIPTION: A rare joker that gains X0.5 mult for every destroyed playing card

----------------------------------------------
------------MOD CODE -------------------------

-- Initialize mod
local mod = SMODS.current_mod

-- Mefi Joker definition
SMODS.Joker{
    key = 'mefi',
    loc_txt = {
        name = 'Mefi',
        text = {
            "{X:mult,C:white}X#1#{} Mult",
            "Gains {X:mult,C:white}X0.5{} Mult",
            "for every destroyed card"
        }
    },
    config = {extra = 1},
    rarity = 3, -- Rare
    cost = 8,
    unlocked = true,
    discovered = true,
    blueprint_compat = true,
    eternal_compat = true,
    atlas = 'mefi_atlas',
    pos = {x = 0, y = 0},
    
    loc_vars = function(self, info_queue, center)
        return {vars = {center.ability.extra}}
    end,
    
    calculate = function(self, card, context)
        -- Main joker calculation for mult
        if context.joker_main then
            return {
                message = localize{type='variable',key='a_xmult',vars={card.ability.extra}},
                Xmult_mod = card.ability.extra,
                colour = G.C.MULT
            }
        end
        
        -- Track destroyed cards
        if context.destroying_card and not context.blueprint then
            card.ability.extra = card.ability.extra + 0.5
            G.E_MANAGER:add_event(Event({
                func = function()
                    card_eval_status_text(card, 'extra', nil, nil, nil, {
                        message = "Upgrade!",
                        colour = G.C.MULT
                    })
                    return true
                end
            }))
            return {
                message = "X" .. card.ability.extra .. " Mult!",
                colour = G.C.MULT
            }
        end
    end
}

-- Create atlas for the joker sprite
SMODS.Atlas{
    key = "mefi_atlas",
    path = "mefij.png",
    px = 71,
    py = 95
}

----------------------------------------------
------------MOD CODE END----------------------