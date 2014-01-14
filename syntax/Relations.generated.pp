[
   Query                      -- _1 _2 _3,
   Query.2:opt                -- _1,
   Query.3:opt                -- _1,
   From                       -- KW["from"] _1,
   Join                       -- KW["join"] _1,
   Where                      -- KW["where"] _1 KW["."] _2 KW["="] KW["x"],
   AttributeName              -- _1,
   New                        -- KW["new"] _1 KW["{"] _2 KW["}{"] _3 KW["}"],
   New.2:iter-star            -- _1,
   New.3:iter-star            -- _1,
   RelationInNew              -- _1 KW["="] KW["x"],
   AttributeInNew             -- _1 KW["="] KW["x"],
   COMPLETION-From            -- _1,
   COMPLETION-Join            -- _1,
   COMPLETION-Where           -- _1,
   COMPLETION-AttributeName   -- _1,
   COMPLETION-Expression      -- _1,
   COMPLETION-RelationInNew   -- _1,
   COMPLETION-AttributeInNew  -- _1,
   Block                      -- V  [V vs=2 [KW["{"] _1] KW["}"]],
   Block.1:iter-star          -- _1,
   Exp                        -- _1,
   COMPLETION-Block           -- _1,
   COMPLETION-Statement       -- _1,
   Entity                     -- KW["entity"] _1 KW["{"] _2 KW["}"],
   Entity.2:iter-star         -- _1,
   Attribute                  -- _1 KW[":"] _2,
   PrimitiveType              -- _1,
   Relation                   -- KW["relation"] _1 KW["{"] _2 KW["}"],
   Relation.2:iter-star       -- _1,
   Role                       -- _1 _2 _3,
   Role.3:opt                 -- _1,
   EntityType                 -- _1,
   One                        -- KW["1"],
   ZeroOrOne                  -- KW["?"],
   OneOrMore                  -- KW["+"],
   ZeroOrMore                 -- KW["*"],
   COMPLETION-Attribute       -- _1,
   COMPLETION-PrimitiveType   -- _1,
   COMPLETION-Model           -- _1,
   COMPLETION-RoleOrAttribute -- _1,
   COMPLETION-Role            -- _1,
   COMPLETION-EntityType      -- _1,
   COMPLETION-Multiplicity    -- _1,
   Module                     -- KW["module"] _1 _2 _3,
   Module.2:opt               -- _1,
   Module.3:opt               -- _1,
   ModelDef                   -- V  [H  [KW["model"]] _1],
   ModelDef.1:iter-star       -- _1,
   Executable                 -- V  [H  [KW["execute"]] _1],
   Executable.1:iter-star     -- _1,
   COMPLETION-Start           -- _1,
   COMPLETION-ModelDef        -- _1,
   COMPLETION-Executable      -- _1,
   Identifier                 -- _1,
   COMPLETION-Identifier      -- _1
]