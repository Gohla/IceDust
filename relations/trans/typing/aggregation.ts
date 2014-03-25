module typing/aggregation

imports
	
  lib/nabl/-
  lib/task/-
  lib/properties/-
  lib/types/-
  lib/editor/-

	include/Relations
	trans/naming/names

type rules

	Min(x)
+	Max(x)
+ Sum(x)
+	Avg(x) : x-ty
	where	x	: x-ty
		and x-ty == Int() else error $[Type mismatch: expected Int got [x-ty] in Aggregation] on x

	Concat(x) : x-ty
	where x : x-ty
		and x-ty == String() else error $[Type mismatch: expected String got [x-ty] in Concatenation] on x

	Count(x) : Int()


	Min(x)
+	Max(x)
+ Sum(x)
+	Avg(x)
+ Concat(x) has multiplicity mu
	where x has multiplicity x-mu
		and <mu-aggr> (x-mu) => mu
		and (x-mu == ZeroOrMore() or x-mu == OneOrMore())	else error "Expected multiplicity of higher than One" on x

	Count(x) has multiplicity One()

type functions

	mu-aggr:
		(x-mu) -> mu
		where ((x-mu == OneOrMore() or x-mu == One()) and One() => mu)
			 or ZeroOrOne() => mu
