/* eslint-disable import/no-anonymous-default-export */
export default function (plop) {
  const getComponentName = {
    type: 'input',
    name: 'name',
    message: 'Please enter a component name.',
    validate: (value) => {
      if (/.+/.test(value)) {
        return true;
      }

      return 'Component name is required!';
    },
  };

  const getStorybookFileStatus = {
    type: 'confirm',
    name: 'storybook',
    message: 'Do you want to add storybook?',
    default: false,
  };

  const createComponentFile = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
    templateFile: 'templates/component.tsx.hbs',
  };

  const createStyleFile = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/style.css.ts',
    templateFile: 'templates/style.css.ts.hbs',
  };

  const createStoryFile = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
    templateFile: 'templates/stories.tsx.hbs',
  };

  plop.setGenerator('Create component template files', {
    description: 'Create templates',
    prompts: [getComponentName, getStorybookFileStatus],
    actions: (data) => {
      const fileCreateActions = [createComponentFile, createStyleFile];

      if (data && data.storybook) {
        fileCreateActions.push(createStoryFile);
      }

      return fileCreateActions;
    },
  });
}
