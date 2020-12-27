# React Chat

![gif preview](https://imgur.com/kh3lmOQ.gif)

React Chat is a simple chat interface for React with a focus on high customizability.

## Props
| Name                      | Description                                           | Required |  Default  |  Types  |
|---------------------------|-------------------------------------------------------|:--------:|:---------:|:-------:|
| onSubmit                  | a callback function to be called when submitting      |     ✓    |           |   func  |
| messages                  | array of message items                                |     ✓    |           | Message |
| height                    | height of the chat view                               |          |   '100%'  |  string |
| width                     | width of the chat view                                |          |   '100%'  |  string |
| senderStyle               | display style for the sender name                     |          |     *     |   CSS   |
| primaryStyle              | message style for the messages sent by the owner      |          |     *     |   CSS   |
| secondaryStyle            | message style for the messages sent by others         |          |     *     |   CSS   |
| textAreaStyle             | style props for the text area                         |          |     *     |   CSS   |
| submitInputStyle          | style props for the submission button                 |          |     *     |   CSS   |
| submitInputColor          | color for the submission button when not hovered      |          | '#DCDCDC' |  string |
| submitInputHighlightColor | color for the submission button when hovered          |          | '#B3B3B3' |  string |
| submitOnCtrlEnter         | whether to submit on ctrl and enter both pressed      |          |    true   |   bool  |
| autoScrollToBottom        | scroll to bottom on mount and on update (new message) |          |    true   |   bool  |

For default values of CSS prop types, see [styles.js](https://github.com/thinkty/react-chat/blob/master/src/lib/styles.js).
