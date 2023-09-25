import '../app/globals.css';
import { QuestionCard } from '../components/QuestionBaseCard';

const args = {
  userName: 'User Name',
  answerTime: 'Answer Time',
  questionTime: '1:25',
  imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  big: false,
};
export const Primary = {
  render: (args) => <QuestionCard {...args} />,
  args: args,
};
export default {
  title: 'Components/QuestionBaseCard',
  component: QuestionCard,
  args: args,
};
