/* eslint-disable ember/new-module-imports */
import Ember from 'ember';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';

export const Checkbox = macroCondition(
  dependencySatisfies('ember-source', '>= 3.27.0-beta.1')
)
  ? macroCondition(dependencySatisfies('ember-source', '< v4.0.0-beta.9'))
    ? Ember._LegacyCheckbox.extend()
    : importSync('@ember/legacy-built-in-components/components/checkbox')
  : Ember.Checkbox;

export const TextField = macroCondition(
  dependencySatisfies('ember-source', '>= 3.27.0-beta.1')
)
  ? macroCondition(dependencySatisfies('ember-source', '< v4.0.0-beta.9'))
    ? Ember._LegacyTextField.extend()
    : importSync('@ember/legacy-built-in-components/components/text-field')
  : Ember.TextField;

export const TextArea = macroCondition(
  dependencySatisfies('ember-source', '>= 3.27.0-beta.1')
)
  ? macroCondition(dependencySatisfies('ember-source', '< v4.0.0-beta.9'))
    ? Ember._LegacyTextArea.extend()
    : importSync('@ember/legacy-built-in-components/components/textarea')
  : Ember.TextArea;

export const LinkComponent = macroCondition(
  dependencySatisfies('ember-source', '>= 3.27.0-beta.1')
)
  ? macroCondition(dependencySatisfies('ember-source', '< v4.0.0-beta.9'))
    ? Ember._LegacyLinkComponent.extend()
    : importSync('@ember/legacy-built-in-components/components/link-to')
  : Ember.LinkComponent;
