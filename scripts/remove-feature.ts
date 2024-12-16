import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removedFeatureName) throw Error('Укажите название фича флага');
if (!featureState) throw Error('Укажите состояние фичи (on или off)');
if (featureState !== 'off' && featureState !== 'on')
  throw Error('Некорректное значение состояния фичи (on или off)');

const project = new Project({});

// project.addSourceFilesAtPaths('./src/**/*.ts');
project.addSourceFilesAtPaths('./src/**/ArticleDetailsPage.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFeatures = false;
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  );

  if (!objectOptions) return;

  const onFunctionProperty = objectOptions.getProperty('on');
  const offFunctionProperty = objectOptions.getProperty('off');
  const nameFunctionProperty = objectOptions.getProperty('name');

  const onFunction = onFunctionProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );
  const offFunction = offFunctionProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );
  const featureName = nameFunctionProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on') {
    node.replaceWithText(onFunction?.getBody().getText() ?? '');
  }

  if (featureState === 'off') {
    node.replaceWithText(offFunction?.getBody().getText() ?? '');
  }
};

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => {
  return jsxAttributes?.find((node) => node.getName() === name);
};

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');
  const featureNameAttribute = getAttributeNodeByName(
    attributes,
    'featureName',
  );

  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureName) return;

  const onValue = onAttribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression();
  const offValue = offAttribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression();

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue.getText());
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue.getText());
  }
};

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      replaceToggleFunction(node);
    }
    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      replaceToggleComponent(node);
    }
  });
});

project.save();
