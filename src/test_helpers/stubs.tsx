import {MessageGroups} from "../web_ui/message/message_display_widget";
import {MessageItemProps} from "../web_ui/message/message_item_widget";
import {guid} from '../utils/utils';

const randomWords = `particles felt memory grandfather far feature those hot grow wish area table climb classroom exact cattle half age eager flight ancient nation physical powerful fully deeply examine best oldest syllable yesterday flew leave now section produce telephone six pitch pattern shinning kept surface push tone drink light thick little finally my inch grain difficult quickly favorite sink them except pain radio modern although original route object steep room halfway date quiet rapidly likely scientist stiff steel available whom brush ancient interest theory source milk add rubber lungs pick loss bread tonight piece written date happy rhythm tobacco inch front back`.split(' ');

const randomWord = () => randomWords[Math.floor(Math.random() * randomWords.length)]
const generateRandomMessage = (): MessageItemProps => {
  return {
    priority: Math.floor(Math.random() * 5),
    text: [randomWord(), randomWord(), randomWord()].join(' '),
    id: guid(),
  }
}

const generateMessageGroup = () => {
  return {
   messages: [generateRandomMessage(), generateRandomMessage(), generateRandomMessage()],
   id: guid(),
   command: 'ls -n 5',
  }
}
export const messageStubs: MessageGroups = [
 generateMessageGroup(),
 generateMessageGroup(),
 generateMessageGroup(),
 generateMessageGroup(),
 generateMessageGroup(),
 generateMessageGroup(),
];