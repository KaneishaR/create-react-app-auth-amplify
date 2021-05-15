import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Topic {
  COREJAVA = "COREJAVA",
  JAVASCRIPT = "JAVASCRIPT",
  SPRING = "SPRING",
  MSA = "MSA",
  REACT = "REACT",
  AWS = "AWS",
  DEVOPS = "DEVOPS",
  SQL = "SQL",
  HIBERNATE = "HIBERNATE",
  ANGULAR = "ANGULAR",
  OOP = "OOP",
  REST = "REST"
}



export declare class Answer {
  readonly id: string;
  readonly answerText?: string;
  readonly questions?: (QuestionAnswer | null)[];
  constructor(init: ModelInit<Answer>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer>) => MutableModel<Answer> | void): Answer;
}

export declare class QuestionAnswer {
  readonly id: string;
  readonly question: Question;
  readonly answer: Answer;
  constructor(init: ModelInit<QuestionAnswer>);
  static copyOf(source: QuestionAnswer, mutator: (draft: MutableModel<QuestionAnswer>) => MutableModel<QuestionAnswer> | void): QuestionAnswer;
}

export declare class Question {
  readonly id: string;
  readonly questionText?: string;
  readonly topic?: Topic | keyof typeof Topic;
  readonly QuestionAnswers?: (QuestionAnswer | null)[];
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}