# README

@cloudcomponents/cdk-codepipeline-slack

# @cloudcomponents/cdk-codepipeline-slack

## Table of contents

### Enumerations

- [ChannelTypes](#channel-types)

### Classes

- [SlackApprovalAction](#slack-approval-action)
- [SlackNotifier](#slack-notifier)

### Interfaces

- [SlackApprovalActionProps](#slack-approval-action-props)
- [SlackNotifierProps](#slack-notifier-props)

# Slack Approval Action

[@cloudcomponents/cdk-codepipeline-slack](#readme) / SlackApprovalAction

# Class: SlackApprovalAction

## Hierarchy

- `Action`

  ↳ **`SlackApprovalAction`**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [providedActionProperties](#providedactionproperties)

### Accessors

- [\_pipeline](#_pipeline)
- [\_scope](#_scope)
- [\_stage](#_stage)
- [actionProperties](#actionproperties)

### Methods

- [bind](#bind)
- [bound](#bound)
- [onStateChange](#onstatechange)
- [variableExpression](#variableexpression)

## Constructors

### constructor

• **new SlackApprovalAction**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SlackApprovalActionProps`](#slack-approval-action-props) |

#### Overrides

Action.constructor

## Properties

### providedActionProperties

• `Protected` `Readonly` **providedActionProperties**: `ActionProperties`

This is a renamed version of the {@link IAction.actionProperties} property.

**`stability`** stable

#### Inherited from

Action.providedActionProperties

## Accessors

### \_pipeline

• `Private` `get` **_pipeline**(): `any`

#### Returns

`any`

___

### \_scope

• `Private` `get` **_scope**(): `any`

Retrieves the Construct scope of this Action.
Only available after the Action has been added to a Stage,
and that Stage to a Pipeline.

#### Returns

`any`

___

### \_stage

• `Private` `get` **_stage**(): `any`

#### Returns

`any`

___

### actionProperties

• `get` **actionProperties**(): `ActionProperties`

The simple properties of the Action, like its Owner, name, etc.

Note that this accessor will be called before the [bind](#bind) callback.

**`stability`** stable

#### Returns

`ActionProperties`

## Methods

### bind

▸ **bind**(`scope`, `stage`, `options`): `ActionConfig`

The callback invoked when this Action is added to a Pipeline.

**`stability`** stable

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `Construct` |
| `stage` | `IStage` |
| `options` | `ActionBindOptions` |

#### Returns

`ActionConfig`

#### Inherited from

Action.bind

___

### bound

▸ `Protected` **bound**(`scope`, `stage`, `options`): `ActionConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `Construct` |
| `stage` | `IStage` |
| `options` | `ActionBindOptions` |

#### Returns

`ActionConfig`

#### Overrides

Action.bound

___

### onStateChange

▸ **onStateChange**(`name`, `target?`, `options?`): `Rule`

Creates an Event that will be triggered whenever the state of this Action changes.

**`stability`** stable

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `target?` | `IRuleTarget` |
| `options?` | `RuleProps` |

#### Returns

`Rule`

#### Inherited from

Action.onStateChange

___

### variableExpression

▸ `Protected` **variableExpression**(`variableName`): `string`

**`stability`** stable

#### Parameters

| Name | Type |
| :------ | :------ |
| `variableName` | `string` |

#### Returns

`string`

#### Inherited from

Action.variableExpression

# Slack Notifier

[@cloudcomponents/cdk-codepipeline-slack](#readme) / SlackNotifier

# Class: SlackNotifier

## Hierarchy

- `Construct`

  ↳ **`SlackNotifier`**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [environment](#environment)
- [node](#node)

### Methods

- [onPrepare](#onprepare)
- [onSynthesize](#onsynthesize)
- [onValidate](#onvalidate)
- [prepare](#prepare)
- [synthesize](#synthesize)
- [toString](#tostring)
- [validate](#validate)
- [isConstruct](#isconstruct)

## Constructors

### constructor

• **new SlackNotifier**(`scope`, `id`, `props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `Construct` |
| `id` | `string` |
| `props` | [`SlackNotifierProps`](#slack-notifier-props) |

#### Overrides

Construct.constructor

## Properties

### environment

• `Protected` **environment**: `Record`<`string`, `string`\>

___

### node

• `Readonly` **node**: `ConstructNode`

The construct tree node associated with this construct.

**`stability`** stable

#### Inherited from

Construct.node

## Methods

### onPrepare

▸ `Protected` **onPrepare**(): `void`

Perform final modifications before synthesis.

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**`stability`** stable

#### Returns

`void`

#### Inherited from

Construct.onPrepare

___

### onSynthesize

▸ `Protected` **onSynthesize**(`session`): `void`

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**`stability`** stable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session` | `ISynthesisSession` | The synthesis session. |

#### Returns

`void`

#### Inherited from

Construct.onSynthesize

___

### onValidate

▸ `Protected` **onValidate**(): `string`[]

Validate the current construct.

This method can be implemented by derived constructs in order to perform
validation logic. It is called on all constructs before synthesis.

**`stability`** stable

#### Returns

`string`[]

An array of validation error messages, or an empty array if the construct is valid.

#### Inherited from

Construct.onValidate

___

### prepare

▸ `Protected` **prepare**(): `void`

Perform final modifications before synthesis.

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**`stability`** stable

#### Returns

`void`

#### Inherited from

Construct.prepare

___

### synthesize

▸ `Protected` **synthesize**(`session`): `void`

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**`stability`** stable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session` | `ISynthesisSession` | The synthesis session. |

#### Returns

`void`

#### Inherited from

Construct.synthesize

___

### toString

▸ **toString**(): `string`

Returns a string representation of this construct.

**`stability`** stable

#### Returns

`string`

#### Inherited from

Construct.toString

___

### validate

▸ `Protected` **validate**(): `string`[]

#### Returns

`string`[]

#### Overrides

Construct.validate

___

### isConstruct

▸ `Static` **isConstruct**(`x`): x is Construct

Return whether the given object is a Construct.

**`stability`** stable

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

x is Construct

#### Inherited from

Construct.isConstruct

# Channel Types

[@cloudcomponents/cdk-codepipeline-slack](#readme) / ChannelTypes

# Enumeration: ChannelTypes

## Table of contents

### Enumeration members

- [PRIVATE](#private)
- [PUBLIC](#public)

## Enumeration members

### PRIVATE

• **PRIVATE** = `"private_channel"`

___

### PUBLIC

• **PUBLIC** = `"public_channel"`

# Slack Approval Action Props

[@cloudcomponents/cdk-codepipeline-slack](#readme) / SlackApprovalActionProps

# Interface: SlackApprovalActionProps

## Hierarchy

- `CommonActionProps`

  ↳ **`SlackApprovalActionProps`**

## Table of contents

### Properties

- [actionName](#actionname)
- [additionalInformation](#additionalinformation)
- [externalEntityLink](#externalentitylink)
- [runOrder](#runorder)
- [slackBotIcon](#slackboticon)
- [slackBotName](#slackbotname)
- [slackBotToken](#slackbottoken)
- [slackChannel](#slackchannel)
- [slackChannelId](#slackchannelid)
- [slackChannelTypes](#slackchanneltypes)
- [slackSigningSecret](#slacksigningsecret)
- [variablesNamespace](#variablesnamespace)

## Properties

### actionName

• `Readonly` **actionName**: `string`

The physical, human-readable name of the Action.

Note that Action names must be unique within a single Stage.

**`stability`** stable

#### Inherited from

CommonActionProps.actionName

___

### additionalInformation

• `Optional` `Readonly` **additionalInformation**: `string`

___

### externalEntityLink

• `Optional` `Readonly` **externalEntityLink**: `string`

___

### runOrder

• `Optional` `Readonly` **runOrder**: `number`

The runOrder property for this Action.

RunOrder determines the relative order in which multiple Actions in the same Stage execute.

**`default`** 1

**`see`** https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html

**`stability`** stable

#### Inherited from

CommonActionProps.runOrder

___

### slackBotIcon

• `Optional` `Readonly` **slackBotIcon**: `string`

___

### slackBotName

• `Optional` `Readonly` **slackBotName**: `string`

___

### slackBotToken

• `Readonly` **slackBotToken**: `string`

___

### slackChannel

• `Optional` `Readonly` **slackChannel**: `string`

___

### slackChannelId

• `Optional` `Readonly` **slackChannelId**: `string`

___

### slackChannelTypes

• `Optional` `Readonly` **slackChannelTypes**: [`ChannelTypes`](#channel-types)[]

___

### slackSigningSecret

• `Readonly` **slackSigningSecret**: `string`

___

### variablesNamespace

• `Optional` `Readonly` **variablesNamespace**: `string`

The name of the namespace to use for variables emitted by this action.

**`default`** - a name will be generated, based on the stage and action names,
if any of the action's variables were referenced - otherwise,
no namespace will be set

**`stability`** stable

#### Inherited from

CommonActionProps.variablesNamespace

# Slack Notifier Props

[@cloudcomponents/cdk-codepipeline-slack](#readme) / SlackNotifierProps

# Interface: SlackNotifierProps

## Table of contents

### Properties

- [pipeline](#pipeline)
- [slackBotIcon](#slackboticon)
- [slackBotName](#slackbotname)
- [slackBotToken](#slackbottoken)
- [slackChannel](#slackchannel)
- [slackChannelId](#slackchannelid)
- [slackChannelTypes](#slackchanneltypes)
- [slackSigningSecret](#slacksigningsecret)
- [stageNames](#stagenames)

## Properties

### pipeline

• `Readonly` **pipeline**: `IPipeline`

___

### slackBotIcon

• `Optional` `Readonly` **slackBotIcon**: `string`

___

### slackBotName

• `Optional` `Readonly` **slackBotName**: `string`

___

### slackBotToken

• `Readonly` **slackBotToken**: `string`

___

### slackChannel

• `Optional` `Readonly` **slackChannel**: `string`

___

### slackChannelId

• `Optional` `Readonly` **slackChannelId**: `string`

___

### slackChannelTypes

• `Optional` `Readonly` **slackChannelTypes**: [`ChannelTypes`](#channel-types)[]

___

### slackSigningSecret

• `Readonly` **slackSigningSecret**: `string`

___

### stageNames

• `Optional` `Readonly` **stageNames**: `string`[]
