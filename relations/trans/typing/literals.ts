module typing/aggregation

imports

	// constructors
	src-gen/signatures/Expressions-sig
	src-gen/signatures/Types-sig
	
	// functions
	trans/naming/names
	
	// // use custom runtime libraries  
 //  lib/nabl/-
 //  lib/task/-
 //  lib/types/-
 //  lib/properties/-
 //  lib/relations/-

type rules

	Int(x) : Int()
	Int(x) has multiplicity One()
	
	String(x) : String()
	String(x) has multiplicity One()
	
	True() : Boolean()
	True() has multiplicity One()
	
	False() : Boolean()
	False() has multiplicity One()

type rules // literal types

	EntityRef(e) : e-ty
	where definition of e : e-ty
	
	t@Int() : t	
	t@String() : t	
	t@Boolean() : t
	
	t@None(): t
