# React Chat
![last commit](https://img.shields.io/github/last-commit/thinkty/react-chat?style=flat-square)
![downloads](https://img.shields.io/npm/dt/react-chat-interface?style=flat-square)
![size](https://img.shields.io/bundlephobia/min/react-chat-interface?style=flat-square)
![license](https://img.shields.io/github/license/thinkty/react-chat?style=flat-square)

![gif preview](https://imgur.com/kh3lmOQ.gif)

React Chat is a simple chat interface for React with a focus on high customizability.
See [example](https://github.com/thinkty/react-chat/tree/master/src/example) for usage.

## Installation
```
npm i --save react-chat-interface
```

## Example

In order to see the examples and play with the configuration, clone/fork this repository and run storybook 
```
git clone https://github.com/thinkty/react-chat.git
```
```
cd react-chat
```
```
npm i
```
```
npm run storybook
```

## Props
| Name                   | Description                                                                      | Required |                                      Default                                     |                                           Types                                          |
|------------------------|----------------------------------------------------------------------------------|:--------:|:--------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|
| messages               | array of message items                                                           |     ✓    |                                                                                  | [Message](https://github.com/thinkty/react-chat/blob/master/src/UserMessage.tsx#L15)\[\] |
| onSubmit               | callback function to be called when submit button or ctrl-enter has been pressed |     ✓    |                                                                                  |                                 (content: string) => void                                |
| height                 | height of the ReactChat component                                                |          |                                       500px                                      |                                          string                                          |
| width                  | width of the ReactChat component                                                 |          |                                       300px                                      |                                          string                                          |
| autoScrollToBottom     | scroll to bottom on mount and on new message                                     |          |                                      `true`                                      |                                           bool                                           |
| senderStyle            | CSS property for the sender name                                                 |          | [styles.ts](https://github.com/thinkty/react-chat/blob/master/src/styles.ts#L36) |                                            CSS                                           |
| primaryStyle           | CSS property for message sent by the owner                                       |          |  [styles.ts](https://github.com/thinkty/react-chat/blob/master/src/styles.ts#L8) |                                            CSS                                           |
| secondaryStyle         | CSS property for message sent by others                                          |          | [styles.ts](https://github.com/thinkty/react-chat/blob/master/src/styles.ts#L22) |                                            CSS                                           |
| allowEmptySubmit       | If true, allow onSubmit to be triggered even if content is empty                 |          |                                      `false`                                     |                                           bool                                           |
| textAreaStyle          | CSS property for the text-area input                                             |          | [styles.ts](https://github.com/thinkty/react-chat/blob/master/src/styles.ts#L48) |                                            CSS                                           |
| enableSubmitButton     | If true, display submit button                                                   |          |                                      `true`                                      |                                           bool                                           |
| enableCtrlEnterSubmit  | If true, enable submit by pressing ctrl-enter                                    |          |                                      `true`                                      |                                           bool                                           |
| submitButtonColor      | Color of the submit button on non-hover state                                    |          |                                     `#DCDCDC`                                    |                                          string                                          |
| submitButtonStyle      | CSS property for the submit button                                               |          | [styles.ts](https://github.com/thinkty/react-chat/blob/master/src/styles.ts#L60) |                                            CSS                                           |
| submitButtonHoverColor | Color of the submit button on hover state                                        |          |                                     `#B3B3B3`                                    |                                          string                                          |
| submitButtonHoverStyle | CSS property for the submit button on hover state                                |          | [styles.ts](https://github.com/thinkty/react-chat/blob/master/src/styles.ts#L60) |                                            CSS                                           |
|                        |                                                                                  |          |                                                                                  |                                                                                          |
|                        |                                                                                  |          |                                                                                  |                                                                                          |

## License
[MIT](https://github.com/thinkty/react-chat/blob/master/LICENSE)
