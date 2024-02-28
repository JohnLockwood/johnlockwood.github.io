## Problem #5 

This problem asks us to find:

$$
\lim_{x \to 3} \frac{4\space(x^2 - 8x - 15)}{x - 3}
$$

The answer given by a table of values and by SymPy is "does not exist".  (Because $\lim{x \to 3-} = \infty$, $\lim{x \to 3+} = -\infty$).  To make the answer -8 as you documented, you need $+ \space 15$, i.e.:

$$
\lim_{x \to 3} \frac{4\space (x^2 - 8x + 15)}{x - 3}
$$

This also makes the function nicely factorable.

## Problem # 14

This one I think has another sign problem.  The question asks us to find the derivative of

$$
	f(x) = x^2 + 7x - 4
$$

You give the answer as $2x - 7$, but via the limit definition or the product rule, I get $2x + 7$.