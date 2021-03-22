const dedent = require('dedent');
const { writeFileSync } = require('fs');

const components = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const pages = ['P', 'Q', 'R', 'S'];

function generateComponentFileWithDeps(name, deps) {
  return dedent`
    ${deps.map(n => `import { ${n} } from "./${n}";`).join('\n')}

    const ${name} = ${[`'${name}'`, ...deps].join(' + ')};
    export { ${name} };
  `;
}

function generateStoryFileWithDeps(name, deps) {
  return dedent`
    import { ${name} } from "./${name}";
    ${deps.map(n => `import { ${n}Story } from "./${n}.stories";`).join('\n')}

    const ${name}Story = ${[`'${name}'`, ...deps.map(d=>`${d}Story`)].join(' + ')};
    export { ${name}Story };
  `;
}


// First generate components
components.forEach((component, index) => {
  // Depend on a random number of components later in the list
  const deps = components.slice(index + 1).filter(() => Math.random() < 0.2);

  const componentFile = generateComponentFileWithDeps(component, deps);
  writeFileSync(`./components/${component}.js`, componentFile)

  const storiesFile = generateStoryFileWithDeps(component, deps);
  writeFileSync(`./components/${component}.stories.js`, storiesFile)
});

// Second generate pages
pages.forEach((page) => {
  // Depend on a random number of components
  const deps = components.filter(() => Math.random() < 0.4);

  const componentFile = generateComponentFileWithDeps(page, deps);
  writeFileSync(`./components/${page}.js`, componentFile)

  const storiesFile = generateStoryFileWithDeps(page, deps);
  writeFileSync(`./components/${page}.stories.js`, storiesFile)

  const storiesEntry = dedent`
    import { ${page}Story } from "./${page}.stories";

    console.log(${page}Story);
  `;
  writeFileSync(`./components/${page}.entry.js`, storiesEntry);
})

const combined = [...components, ...pages];
const storiesEntry = dedent`
  ${combined.map(n => `import { ${n} } from "./components/${n}.stories";`).join('\n')}

  console.log(${combined.join(' + ')});
`;
writeFileSync('./storiesEntry.js', storiesEntry);