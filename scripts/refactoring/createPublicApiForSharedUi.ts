import { Project } from 'ts-morph';
import path from 'path'
const project = new Project({});

project.addSourceFilesAtPaths('./src/**/*.ts');
project.addSourceFilesAtPaths('./src/**/*.tsx');

const files = project.getSourceFiles();
const UIPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(UIPath);
const componentsDirs = sharedUiDirectory?.getDirectories()

componentsDirs?.forEach(directory => {
  const getIndexFilePath = directory.getPath() + '/index.ts'
  const indexFile = directory.getSourceFile(getIndexFilePath)

  if (!indexFile) {
    const sourceCode = `export * from "./${directory.getBaseName()}";`
    const file = directory.createSourceFile(getIndexFilePath, sourceCode, { overwrite: true });
    file.save()
  }
})

function isAbsolute(value: string) {
  const layers = [
    'app',
    'pages',
    'widgets',
    'features',
    'entities',
    'shared'
  ]
  return layers.some(layer => value.startsWith(layer))
}

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach(importEl => {
    const value = importEl.getModuleSpecifierValue()
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias?.split('/')

    const isSharedLayer = segments?.[0] === 'shared'
    const isUiSlice = segments?.[1] === 'ui'

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias?.split('/').slice(0, 3).join('/')
      importEl.setModuleSpecifier('@/' + result)
    }
  })
})

project.save()
