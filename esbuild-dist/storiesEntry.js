// storiesEntry.js
async function go() {
  const {A} = await import("./components/A.stories.js");
  const {B} = await import("./components/B.stories.js");
  const {C} = await import("./components/C.stories.js");
  const {D} = await import("./components/D.stories.js");
  const {E} = await import("./components/E.stories.js");
  const {F} = await import("./components/F.stories.js");
  const {G} = await import("./components/G.stories.js");
  const {H} = await import("./components/H.stories.js");
  const {P} = await import("./components/P.stories.js");
  const {Q} = await import("./components/Q.stories.js");
  const {R} = await import("./components/R.stories.js");
  const {S} = await import("./components/S.stories.js");
  console.log(A + B + C + D + E + F + G + H + P + Q + R + S);
}
go();
