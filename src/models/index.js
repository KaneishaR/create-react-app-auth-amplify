// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Topic = {
  "COREJAVA": "COREJAVA",
  "JAVASCRIPT": "JAVASCRIPT",
  "SPRING": "SPRING",
  "MSA": "MSA",
  "REACT": "REACT",
  "AWS": "AWS",
  "DEVOPS": "DEVOPS",
  "SQL": "SQL",
  "HIBERNATE": "HIBERNATE",
  "ANGULAR": "ANGULAR",
  "OOP": "OOP",
  "REST": "REST"
};

const { Answer, QuestionAnswer, Question } = initSchema(schema);

export {
  Answer,
  QuestionAnswer,
  Question,
  Topic
};