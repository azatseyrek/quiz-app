import React from 'react';
import {AnswerObject} from '../App';
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  questionNr,
  userAnswer,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className='number'>
        Question: {questionNr} / {totalQuestions}
      </p>
      {/* dangerouslySetInnerHTML search this  */}
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            key={answer}
            userClicked={userAnswer?.answer === answer}
          >
            {/* {!!userAnswer} === { {userAnswer ? true : false}}  */}
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
