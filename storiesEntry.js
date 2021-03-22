async function go () {
  const { A } = await import("./components/A.stories");
  const { B } = await import("./components/B.stories");
  const { C } = await import("./components/C.stories");
  const { D } = await import("./components/D.stories");
  const { E } = await import("./components/E.stories");
  const { F } = await import("./components/F.stories");
  const { G } = await import("./components/G.stories");
  const { H } = await import("./components/H.stories");
  const { P } = await import("./components/P.stories");
  const { Q } = await import("./components/Q.stories");
  const { R } = await import("./components/R.stories");
  const { S } = await import("./components/S.stories");
  
  console.log(A + B + C + D + E + F + G + H + P + Q + R + S);
}

go();
