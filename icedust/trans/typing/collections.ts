module typing/collections

imports

  // constructors
  src-gen/signatures/Expressions-sig
  src-gen/signatures/Types-sig
  
  // functions
  names/naming/names
  
  // // use custom runtime libraries  
 //  lib/nabl/-
 //  lib/task/-
 //  lib/types/-
 //  lib/properties/-
 //  lib/relations/-

type rules

  Filter(expr1, x, expr2) : ty1
  where
    expr1 : ty1 and
    expr2 : ty2 and
    ty2 == Boolean() else error $[Type mismatch: expected Boolean got [ty2]] on expr2
  
  Filter(expr1, x, expr2) has multiplicity mu
  where
    expr1 has multiplicity mu1 and
    <lowerbound-zero> (mu1) => mu and
    expr2 has multiplicity mu2 and
    mu2 == One() else error $[Multiplicity mismatch: expected One got [mu2]] on expr2
    
  Filter(expr1, x, expr2) has ordering or1
  where
    expr1 has ordering or1

type rules

  First(e):ty
  where
    e:ty
    
  First(e) has multiplicity mu
  where
    e has multiplicity e-mu
    and <upperbound-one> (e-mu) => mu
  
  First(e) has ordering Ordered()

type rules

  ElemAt(e1, e2) : t1
  where e1 : t1
    and e2 : t2
    and t2 == Int() else error $[Type mismatch: expected Int got [t2]] on e2
  
  ElemAt(e1, e2) has multiplicity ZeroOrOne()
  where e2 has multiplicity m2
    and (m2 == One() or m2 == ZeroOrOne()) else error $[Multiplicity mismatch: expected One or ZeroOrOne got [m2]] on e2
    
  ElemAt(e1, e2) has ordering Ordered()
  where e1 has ordering o1
    and o1 == Ordered() else error $[Ordering mismatch: Expected Ordered but got Unordered] on e1
  
type rules

  IndexOf(e1, e2) : Int()
  where e1 : t1
    and e2 : t2
    and t1 == t1 else error $[Type mismatch: expected [t1] got [t2]] on e2
  
  IndexOf(e1, e2) has multiplicity ZeroOrOne()
  where e2 has multiplicity m2
    and m2 == One() else error $[Multiplicity mismatch: Expected One or ZeroOrOne got [m2]] on e2
    
  IndexOf(e1, e2) has ordering Ordered()
  where e1 has ordering o1
    and o1 == Ordered() else error $[Ordering mismatch: Expected Ordered but got Unordered] on e1